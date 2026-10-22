'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import LanguageSwitcher from '@/components/language-switcher'
import { localizedPath, type Locale } from '@/lib/i18n'

interface HeaderProps { activeSection?: string; locale?: Locale }

const navigation = [
  { href: '/services', label: 'Services', japanese: '事業・サービス', chinese: '服务', section: 'services' },
  { href: '/about', label: 'About us', japanese: '私たちについて', chinese: '关于我们', section: 'about' },
]

const copy = {
  ja: { skip: '本文へスキップ', home: 'AutoSystems, Inc. ホーム', main: 'メインナビゲーション', mobile: 'モバイルナビゲーション', contact: 'お問い合わせ', open: 'メニューを開く', close: 'メニューを閉じる' },
  en: { skip: 'Skip to content', home: 'AutoSystems, Inc. Home', main: 'Main navigation', mobile: 'Mobile navigation', contact: 'Contact us', open: 'Open menu', close: 'Close menu' },
  zh: { skip: '跳至正文', home: 'AutoSystems, Inc. 首页', main: '主导航', mobile: '移动导航', contact: '联系我们', open: '打开菜单', close: '关闭菜单' },
}

export default function Header({ activeSection, locale = 'ja' }: HeaderProps) {
  const t = copy[locale]
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileNavigation = useRef<HTMLElement>(null)

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 920px)')
    const closeOnDesktop = () => { if (!breakpoint.matches) setMenuOpen(false) }
    breakpoint.addEventListener('change', closeOnDesktop)
    return () => breakpoint.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
      if (event.key === 'Tab') {
        const links = mobileNavigation.current?.querySelectorAll<HTMLAnchorElement>('a')
        const first = menuButton.current
        const last = links?.[links.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">{t.skip}</a>
      <div className="header-inner">
        <Link href={localizedPath('/', locale)} className="brand" aria-label={t.home}>
          <span className="brand-mark" aria-hidden="true"><img src="/brand-symbol.png" alt="" width="44" height="44" /></span>
          <span>AutoSystems, Inc.</span>
        </Link>
        <nav className="desktop-nav" aria-label={t.main}>
          {navigation.map((item) => (
            <Link key={item.href} href={localizedPath(item.href, locale)} aria-current={activeSection === item.section ? 'page' : undefined}>
              {locale === 'zh' ? item.chinese : item.label}{locale === 'ja' ? <span>{item.japanese}</span> : null}
            </Link>
          ))}
          <Link href={localizedPath('/contact', locale)} className="header-contact" aria-current={activeSection === 'contact' ? 'page' : undefined}>
            {t.contact} <span className="header-contact-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
          </Link>
        </nav>
        <div className="header-tools"><LanguageSwitcher locale={locale} />
        <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? t.close : t.open} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>
      <nav ref={mobileNavigation} id="mobile-navigation" className="mobile-nav" aria-label={t.mobile} hidden={!menuOpen}>
        {navigation.map((item, index) => (
          <Link key={item.href} href={localizedPath(item.href, locale)} onClick={() => setMenuOpen(false)} aria-current={activeSection === item.section ? 'page' : undefined}>
            <span className="mobile-nav-number">0{index + 1}</span><span>{locale === 'zh' ? item.chinese : item.label}{locale === 'ja' ? <small>{item.japanese}</small> : null}</span><ArrowUpRight size={26} aria-hidden="true" />
          </Link>
        ))}
        <Link href={localizedPath('/contact', locale)} className="mobile-contact" onClick={() => setMenuOpen(false)} aria-current={activeSection === 'contact' ? 'page' : undefined}>
          <span className="mobile-nav-number">03</span><span>{t.contact}{locale === 'ja' ? <small>Contact us</small> : null}</span><ArrowUpRight size={26} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}

