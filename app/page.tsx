import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Asterisk, Radio } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import OpeningFilm from '@/components/opening-film'
import { proprietaryServices } from '@/lib/proprietary-services'

export const metadata: Metadata = {
  title: { absolute: 'AutoSystems | 可能性を、動く仕組みに。' },
}

const capabilities = [
  { number: '01', name: 'Software', japanese: 'ソフトウェア開発', description: 'その業務に、そのチームに合う仕組みを。Webアプリから業務システムまで、構想を使えるプロダクトへ。', href: '/services/software', tags: 'WEB APPLICATION / BUSINESS SYSTEM' },
  { number: '02', name: 'IoT solutions', japanese: 'IoTソリューション', description: '現場とデジタルを、シームレスにつなぐ。センサーからクラウドまで、一貫した仕組みを設計します。', href: '/services/iot', tags: 'DEVICE / CONNECTIVITY / CLOUD' },
  { number: '03', name: 'Mobility', japanese: '車両データ・OBD2', description: '車両の状態を、判断につながる情報に。リモートでのデータ取得・可視化で、車両管理を支えます。', href: '/services/obd2', tags: 'VEHICLE DATA / REMOTE MONITORING' },
]

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main id="main-content">
        <OpeningFilm />

        <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0, 1].map((item) => <span key={item}>IDEAS INTO SYSTEMS <Asterisk /> SYSTEMS INTO POSSIBILITIES <Asterisk /> TECHNOLOGY FOR EVERYONE <Asterisk /> </span>)}</div></div>

        <section id="philosophy" className="philosophy-section paper-section">
          <div className="site-container">
            <p className="section-label"><span>01 / OUR PHILOSOPHY</span><span>私たちの想い</span></p>
            <div className="philosophy-grid">
              <h2>複雑をほどき、<br />新しい日常を<br /><span className="muted-ink">つくっていく。</span></h2>
              <div className="philosophy-copy"><span className="large-asterisk" aria-hidden="true">✳</span><p>世界中のシステムを自動化し、<br />世界中の人がアクセスできて、使えるようにする。</p><p>それが、AutoSystemsの使命です。<br />自社プロダクトの開発と、一社一社に向き合う受託開発。<br />ふたつのアプローチで、まだ見ぬ可能性を形にします。</p><Link href="/about" className="line-link">AutoSystemsについて <ArrowUpRight size={22} aria-hidden="true" /></Link></div>
            </div>
          </div>
        </section>

        <section id="products" className="products-section paper-section">
          <div className="site-container">
            <p className="section-label"><span>02 / OUR PRODUCTS</span><span>自社プロダクト</span></p>
            <div className="section-heading-row"><h2>日常の、その先を。</h2><p>経営も、買い物も、モビリティも。<br />身近な課題から、使えるテクノロジーを。</p></div>
            <div className="product-grid">
              {proprietaryServices.map((service, index) => (
                <a className={`product-card product-${index + 1}`} key={service.url} href={service.url} target="_blank" rel="noopener noreferrer" aria-label={`${service.name} サービスサイト（新しいタブで開く）`}>
                  <div className="product-art" aria-hidden="true">
                    <span className="product-art-label">AUTOSYSTEMS PRODUCT / 0{index + 1}</span>
                    {index === 0 ? <div className="art-dashboard"><div><span>Business overview</span><span>↗</span></div><strong>Clarity in every decision.</strong><div className="dashboard-bars">{[35, 52, 42, 68, 59, 85, 73, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="dashboard-baseline"><span>DATA</span><span>INSIGHT</span><span>ACTION ↗</span></div></div> : index === 1 ? <div className="art-market"><div className="market-orbit orbit-one" /><div className="market-orbit orbit-two" /><span className="market-o">o<span>m</span></span><span className="market-tag">Find your possibility. ↗</span></div> : <div className="art-mobility"><div className="mobility-ring ring-one" /><div className="mobility-ring ring-two" /><div className="mobility-ring ring-three" /><div className="mobility-core"><Radio strokeWidth={1.2} size={45} /></div><span className="telemetry telemetry-one">CONNECTED <i /></span><span className="telemetry telemetry-two">VEHICLE → CLOUD</span></div>}
                  </div>
                  <div className="product-info"><div className="product-title-row"><h3>{service.name}</h3><ArrowUpRight size={24} aria-hidden="true" /></div><p className="product-tagline">{service.tagline}</p><p className="product-description">{service.description}</p><span className="product-view">EXPLORE PRODUCT <ArrowUpRight size={14} aria-hidden="true" /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="capabilities-section">
          <div className="site-container">
            <p className="section-label"><span>03 / WHAT WE DO</span><span>私たちにできること</span></p>
            <div className="section-heading-row"><h2>あなたの構想に、<br />実現する力を。</h2><div><p>必要なのは、あなたに合う仕組み。<br />課題の整理から設計・開発・運用まで、一緒に。</p><Link href="/services" className="text-link">すべてのサービス <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
            <div className="capability-list">{capabilities.map((item) => <Link href={item.href} className="capability-row" key={item.number}><span className="capability-number">/{item.number}</span><div className="capability-name"><h3>{item.name}</h3><span>{item.japanese}</span></div><div className="capability-description"><p>{item.description}</p><span>{item.tags}</span></div><span className="capability-arrow"><ArrowUpRight size={27} strokeWidth={1.3} aria-hidden="true" /></span></Link>)}</div>
          </div>
        </section>

        <section id="process" className="process-section paper-section">
          <div className="site-container">
            <p className="section-label"><span>04 / HOW WE WORK</span><span>プロジェクトの進め方</span></p>
            <div className="section-heading-row"><h2>対話から、<br />次のあたりまえへ。</h2><p>「こんなこと、できる？」から始めましょう。<br />小さく試し、確かめながら、着実に形にします。</p></div>
            <div className="process-grid">{[{ number: '01', english: 'Discover', title: '知る・整理する', text: '現場の課題や、実現したいことを対話から整理。目指すゴールを共有します。' }, { number: '02', english: 'Design & build', title: '設計する・つくる', text: 'プロトタイプで認識を揃えながら、使う人に合ったシステムを開発します。' }, { number: '03', english: 'Grow together', title: '届ける・育てる', text: '導入してからが、新しいスタート。日々の運用に寄り添い、改善を重ねます。' }].map((step) => <div className="process-step" key={step.number}><div className="process-top"><span>{step.number}</span><ArrowRight size={24} strokeWidth={1} aria-hidden="true" /></div><h3>{step.english}</h3><h4>{step.title}</h4><p>{step.text}</p></div>)}</div>
          </div>
        </section>

        <section id="contact" className="home-contact">
          <div className="site-container"><p className="eyebrow"><i className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE</p><Link href="/contact" className="giant-contact-link"><span>お問い合わせ</span><span className="giant-contact-arrow"><ArrowUpRight strokeWidth={1} aria-hidden="true" /></span></Link><div className="home-contact-bottom"><h2>まだ輪郭のないアイデアも、ここから。</h2><span>お問い合わせ・プロジェクトのご相談 <ArrowUpRight size={17} aria-hidden="true" /></span></div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

