import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <Link href="/" className="brand" aria-label="AutoSystems, Inc. ホーム">AutoSystems, Inc.</Link>
          <p>可能性を、動く仕組みに。<br /><span>Engineering a more accessible world.</span></p>
          <nav aria-label="フッターナビゲーション">
            <Link href="/services">Services <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href="/about">About us <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href="/contact">お問い合わせ <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </div>
        <div className="footer-wordmark" aria-hidden="true">AutoSystems, Inc.</div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} AutoSystems, Inc.</span><span><i className="status-dot" /> Built for what’s next.</span><a href="#main-content">Back to top ↑</a></div>
      </div>
    </footer>
  )
}

