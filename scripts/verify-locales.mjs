import assert from 'node:assert/strict'

const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:3100'
const paths = ['/', '/about', '/services', '/services/software', '/services/iot', '/services/obd2', '/contact']
const mission = 'AutoSystemsの使命は、世界中のシステムを自動化し、世界中の人がアクセスできて、使えるようにすることです。'
const bodyText = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, '')

for (const locale of ['ja', 'en', 'zh']) {
  for (const path of paths) {
    const url = locale === 'ja' ? path : `/${locale}${path === '/' ? '' : path}`
    const response = await fetch(origin + url)
    assert.equal(response.status, 200, `${url} should render`)
    const html = await response.text()
    const languageTag = locale === 'zh' ? 'zh-Hans' : locale
    assert.match(html, new RegExp(`<html[^>]+lang="${languageTag}"`), `${url} document language`)
    for (const alternate of ['ja', 'en', 'zh-Hans', 'x-default']) {
      assert.match(html, new RegExp(`hrefLang="${alternate}"`, 'i'), `${url} alternate ${alternate}`)
    }
    const expectedCanonical = url
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)
    assert.ok(canonical, `${url} canonical link`)
    assert.equal(new URL(canonical[1]).pathname, expectedCanonical, `${url} canonical path`)
    const content = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || ''
    const hrefs = Array.from(content.matchAll(/href="(\/[^"#?]*)/g), match => match[1])
    if (locale !== 'ja') {
      for (const href of hrefs) assert.ok(href === `/${locale}` || href.startsWith(`/${locale}/`), `${url} should keep ${locale} internal link: ${href}`)
      assert.ok(!bodyText(content).includes('お問い合わせ'), `${url} should translate the contact copy`)
    }
    if (locale === 'zh') {
      assert.match(bodyText(content), /[\u4e00-\u9fff]/, `${url} should include Chinese content`)
      assert.ok(!/[\u3040-\u30ff]/.test(bodyText(content)), `${url} should not fall back to Japanese`)
    }
    if (locale === 'ja' && path === '/about') {
      const section = content.match(/<section[^>]+id="mission"[^>]*>([\s\S]*?)<\/section>/)?.[1]
      assert.ok(section, 'Japanese mission section exists')
      const missionParagraph = Array.from(section.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g), match => bodyText(match[1])).find(text => text.startsWith('AutoSystemsの使命は'))
      assert.equal(missionParagraph, mission, 'Japanese mission paragraph must remain character-for-character exact')
    }
    console.log(`PASS ${url}: language, metadata, links${locale === 'ja' && path === '/about' ? ', exact mission' : ''}`)
  }
}
console.log('All 21 localized pages verified.')
