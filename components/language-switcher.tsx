'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Globe2 } from 'lucide-react'
import { languageTags, locales, localizedPath, type Locale } from '@/lib/i18n'

const languageNames = { ja: '日本語', en: 'English', zh: '简体中文' }
const shortNames = { ja: 'JA', en: 'EN', zh: '中文' }
const switcherLabels = { ja: '言語を選択', en: 'Select language', zh: '选择语言' }
const selectionHints = { ja: '言語を選択すると、対応する言語のページに切り替わります。', en: 'Selecting a language immediately opens this page in that language.', zh: '选择语言后，将立即打开该语言的对应页面。' }

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const [suffix, setSuffix] = useState('')

  useEffect(() => {
    const syncSuffix = () => setSuffix(window.location.search + window.location.hash)
    syncSuffix()
    window.addEventListener('hashchange', syncSuffix)
    window.addEventListener('popstate', syncSuffix)
    return () => {
      window.removeEventListener('hashchange', syncSuffix)
      window.removeEventListener('popstate', syncSuffix)
    }
  }, [pathname])

  return (
    <nav className="language-switcher" aria-label={switcherLabels[locale]}>
      <Globe2 size={14} aria-hidden="true" />
      {locales.map((language, index) => <span className="language-link" key={language}>
        {index ? <span className="language-divider" aria-hidden="true">/</span> : null}
        <a href={localizedPath(pathname, language) + suffix} lang={languageTags[language]} hrefLang={languageTags[language]} aria-label={languageNames[language]} aria-current={locale === language ? 'true' : undefined}>{shortNames[language]}</a>
      </span>)}
      <span id="language-change-hint" className="sr-only">{selectionHints[locale]}</span>
      <select className="mobile-language-select" aria-label={switcherLabels[locale]} aria-describedby="language-change-hint" title={selectionHints[locale]} value={locale} onChange={event => {
        const language = event.target.value
        if (language === 'ja' || language === 'en' || language === 'zh') {
          window.location.assign(localizedPath(window.location.pathname, language) + window.location.search + window.location.hash)
        }
      }}>
        {locales.map(language => <option key={language} value={language} lang={languageTags[language]} aria-label={languageNames[language]}>{shortNames[language]}</option>)}
      </select>
    </nav>
  )
}
