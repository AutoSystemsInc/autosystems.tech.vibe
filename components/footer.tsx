import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { localizedPath, type Locale } from '@/lib/i18n'

export default function Footer({ locale = 'ja' }: { locale?: Locale }) {
  const t = {
    ja: {home:'AutoSystems, Inc. ホーム', tagline:'可能性を、動く仕組みに。', navigation:'フッターナビゲーション', services:'Services', about:'About us', contact:'お問い合わせ', top:'Back to top ↑'},
    en: {home:'AutoSystems, Inc. Home', tagline:'Turning possibility into working systems.', navigation:'Footer navigation', services:'Services', about:'About us', contact:'Contact us', top:'Back to top ↑'},
    zh: {home:'AutoSystems, Inc. 首页', tagline:'让可能，成为现实。', navigation:'页脚导航', services:'服务', about:'关于我们', contact:'联系我们', top:'返回顶部 ↑'},
  }[locale]
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <Link href={localizedPath('/', locale)} className="brand" aria-label={t.home}>AutoSystems, Inc.</Link>
          <p>{t.tagline}<br /><span>Engineering a more accessible world.</span></p>
          <nav aria-label={t.navigation}>
            <Link href={localizedPath('/services', locale)}>{t.services} <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href={localizedPath('/about', locale)}>{t.about} <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href={localizedPath('/contact', locale)}>{t.contact} <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </div>
        <div className="footer-wordmark" aria-hidden="true">AutoSystems, Inc.</div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} AutoSystems, Inc.</span><span><i className="status-dot" /> Built for what’s next.</span><a href="#main-content">{t.top}</a></div>
      </div>
    </footer>
  )
}

