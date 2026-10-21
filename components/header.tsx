'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

interface HeaderProps { activeSection?: string }

const navigation = [
  { href: '/services', label: 'Services', japanese: '事業・サービス', section: 'services' },
  { href: '/about', label: 'About us', japanese: '私たちについて', section: 'about' },
]

export default function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileNavigation = useRef<HTMLElement>(null)

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 760px)')
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
      <a href="#main-content" className="skip-link">本文へスキップ</a>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="AutoSystems, Inc. ホーム">
          <span className="brand-mark" aria-hidden="true"><img src="/brand-symbol.png" alt="" width="44" height="44" /></span>
          <span>AutoSystems, Inc.</span>
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={activeSection === item.section ? 'page' : undefined}>
              {item.label}<span>{item.japanese}</span>
            </Link>
          ))}
          <Link href="/contact" className="header-contact" aria-current={activeSection === 'contact' ? 'page' : undefined}>
            お問い合わせ <span className="header-contact-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
          </Link>
        </nav>
        <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav ref={mobileNavigation} id="mobile-navigation" className="mobile-nav" aria-label="モバイルナビゲーション" hidden={!menuOpen}>
        {navigation.map((item, index) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={activeSection === item.section ? 'page' : undefined}>
            <span className="mobile-nav-number">0{index + 1}</span><span>{item.label}<small>{item.japanese}</small></span><ArrowUpRight size={26} aria-hidden="true" />
          </Link>
        ))}
        <Link href="/contact" className="mobile-contact" onClick={() => setMenuOpen(false)} aria-current={activeSection === 'contact' ? 'page' : undefined}>
          <span className="mobile-nav-number">03</span><span>お問い合わせ<small>Contact us</small></span><ArrowUpRight size={26} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}

