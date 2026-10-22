import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Asterisk, Radio } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import OpeningFilm from '@/components/opening-film'
import { getProprietaryServices } from '@/lib/proprietary-services'
import { localizedPath, type Locale } from '@/lib/i18n'

const capabilities = [
  { number: '01', name: 'Software', japanese: 'ソフトウェア開発', description: 'その業務に、そのチームに合う仕組みを。Webアプリから業務システムまで、構想を使えるプロダクトへ。', href: '/services/software', tags: 'WEB APPLICATION / BUSINESS SYSTEM' },
  { number: '02', name: 'IoT solutions', japanese: 'IoTソリューション', description: '現場とデジタルを、シームレスにつなぐ。センサーからクラウドまで、一貫した仕組みを設計します。', href: '/services/iot', tags: 'DEVICE / CONNECTIVITY / CLOUD' },
  { number: '03', name: 'Mobility', japanese: '車両データ・OBD2', description: '車両の状態を、判断につながる情報に。リモートでのデータ取得・可視化で、車両管理を支えます。', href: '/services/obd2', tags: 'VEHICLE DATA / REMOTE MONITORING' },
]

const englishCapabilities = [
  { number: '01', name: 'Software', japanese: 'Custom software development', description: 'Systems that fit your work and your team. From web apps to business systems, we turn ideas into usable products.', href: '/services/software', tags: 'WEB APPLICATION / BUSINESS SYSTEM' },
  { number: '02', name: 'IoT solutions', japanese: 'Connected devices and cloud', description: 'Connect the physical world with digital tools. We design complete systems, from sensors to the cloud.', href: '/services/iot', tags: 'DEVICE / CONNECTIVITY / CLOUD' },
  { number: '03', name: 'Mobility', japanese: 'Vehicle data & OBD2', description: 'Turn vehicle conditions into information you can act on. Remote data collection and visualization support fleet management.', href: '/services/obd2', tags: 'VEHICLE DATA / REMOTE MONITORING' },
]

const japaneseProcess = [
  { number: '01', english: 'Discover', title: '知る・整理する', text: '現場の課題や、実現したいことを対話から整理。目指すゴールを共有します。' },
  { number: '02', english: 'Design & build', title: '設計する・つくる', text: 'プロトタイプで認識を揃えながら、使う人に合ったシステムを開発します。' },
  { number: '03', english: 'Grow together', title: '届ける・育てる', text: '導入してからが、新しいスタート。日々の運用に寄り添い、改善を重ねます。' },
]

const englishProcess = [
  { number: '01', english: 'Discover', title: 'Understand & define', text: 'We talk through the challenges you face and what you want to achieve, then agree on a shared goal.' },
  { number: '02', english: 'Design & build', title: 'Prototype & develop', text: 'We use prototypes to build a shared understanding and develop systems around the people who use them.' },
  { number: '03', english: 'Grow together', title: 'Launch & improve', text: 'Launch is a new beginning. We support everyday operation and keep improving the system with you.' },
]

const chineseCapabilities = [
  { number: '01', name: '软件开发', japanese: '量身定制的软件开发', description: '为您的业务与团队打造合适的系统。从 Web 应用到业务系统，将构想转化为实用的产品。', href: '/services/software', tags: 'WEB 应用 / 业务系统' },
  { number: '02', name: '物联网方案', japanese: '连接设备与云端', description: '让现场与数字世界无缝连接。从传感器到云端，我们设计完整、一体化的系统。', href: '/services/iot', tags: '设备 / 连接 / 云端' },
  { number: '03', name: '智慧出行', japanese: '车辆数据与 OBD2', description: '将车辆状态转化为有助于决策的信息。通过远程数据采集与可视化，为车辆管理提供支持。', href: '/services/obd2', tags: '车辆数据 / 远程监控' },
]

const chineseProcess = [
  { number: '01', english: '了解需求', title: '沟通与梳理', text: '通过对话梳理现场的问题和希望实现的目标，建立共同的方向。' },
  { number: '02', english: '设计与开发', title: '从原型到系统', text: '借助原型统一理解，围绕使用者的实际需求开发系统。' },
  { number: '03', english: '共同成长', title: '交付与持续改进', text: '上线是新的起点。我们贴近日常运营，与您一起持续优化系统。' },
]

export default function HomePage({ locale = 'ja' }: { locale?: Locale } = {}) {
  const en = locale === 'en'
  const zh = locale === 'zh'
  const products = getProprietaryServices(locale)
  const localizedCapabilities = zh ? chineseCapabilities : en ? englishCapabilities : capabilities
  const process = zh ? chineseProcess : en ? englishProcess : japaneseProcess
  return (
    <div className="home-page">
      <Header locale={locale} />
      <main id="main-content">
        <OpeningFilm locale={locale} />

        <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0, 1].map((item) => <span key={item}>{zh ? '让构想成为系统' : 'IDEAS INTO SYSTEMS'} <Asterisk /> {zh ? '让系统创造可能' : 'SYSTEMS INTO POSSIBILITIES'} <Asterisk /> {zh ? '让科技惠及每个人' : 'TECHNOLOGY FOR EVERYONE'} <Asterisk /> </span>)}</div></div>

        <section id="philosophy" className="philosophy-section paper-section">
          <div className="site-container">
            <p className="section-label"><span>{zh ? '01 / 我们的理念' : '01 / OUR PHILOSOPHY'}</span><span>{zh ? '我们的初心' : en ? 'What drives us' : '私たちの想い'}</span></p>
            <div className="philosophy-grid">
              <h2>{zh ? <>化繁为简，<br />创造更好的<br /><span className="muted-ink">日常。</span></> : en ? <>Untangle complexity.<br />Create a better<br /><span className="muted-ink">everyday.</span></> : <>複雑をほどき、<br />新しい日常を<br /><span className="muted-ink">つくっていく。</span></>}</h2>
              <div className="philosophy-copy"><span className="large-asterisk" aria-hidden="true">✳</span><p>{zh ? <>实现全球系统的自动化，<br />让世界各地的人们都能访问和使用这些系统。</> : en ? <>Automate systems around the world<br />and make them accessible and usable by everyone.</> : <>世界中のシステムを自動化し、<br />世界中の人がアクセスできて、使えるようにする。</>}</p><p>{zh ? <>这就是 AutoSystems 的使命。<br />通过自主产品与面向每位客户的定制开发，<br />我们以两种方式，将新的可能变为现实。</> : en ? <>That is the mission of AutoSystems.<br />Through our own products and custom development<br />for each client, we turn new possibilities into reality.</> : <>それが、AutoSystemsの使命です。<br />自社プロダクトの開発と、一社一社に向き合う受託開発。<br />ふたつのアプローチで、まだ見ぬ可能性を形にします。</>}</p><Link href={localizedPath('/about', locale)} className="line-link">{zh ? '关于 AutoSystems' : en ? 'About AutoSystems' : 'AutoSystemsについて'} <ArrowUpRight size={22} aria-hidden="true" /></Link></div>
            </div>
          </div>
        </section>

        <section id="products" className="products-section paper-section">
          <div className="site-container">
            <p className="section-label"><span>{zh ? '02 / 自主产品' : '02 / OUR PRODUCTS'}</span><span>{zh ? '由 AutoSystems 打造' : en ? 'Built by AutoSystems' : '自社プロダクト'}</span></p>
            <div className="section-heading-row"><h2>{zh ? '探索日常之外的可能。' : en ? 'Beyond the everyday.' : '日常の、その先を。'}</h2><p>{zh ? <>无论是经营、购物，还是出行。<br />从身边的问题出发，打造实用的技术。</> : en ? <>Business, shopping, and mobility.<br />Practical technology for everyday challenges.</> : <>経営も、買い物も、モビリティも。<br />身近な課題から、使えるテクノロジーを。</>}</p></div>
            <div className="product-grid">
              {products.map((service, index) => (
                <a className={`product-card product-${index + 1}`} key={service.url} href={service.url} target="_blank" rel="noopener noreferrer" aria-label={zh ? `${service.name} 服务网站（在新标签页中打开）` : en ? `${service.name} website (opens in a new tab)` : `${service.name} サービスサイト（新しいタブで開く）`}>
                  <div className="product-art" aria-hidden="true">
                    <span className="product-art-label">{zh ? 'AUTOSYSTEMS 产品' : 'AUTOSYSTEMS PRODUCT'} / 0{index + 1}</span>
                    {index === 0 ? <div className="art-dashboard"><div><span>{zh ? '经营概览' : 'Business overview'}</span><span>↗</span></div><strong>{zh ? '让每一次决策更清晰。' : 'Clarity in every decision.'}</strong><div className="dashboard-bars">{[35, 52, 42, 68, 59, 85, 73, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="dashboard-baseline"><span>{zh ? '数据' : 'DATA'}</span><span>{zh ? '洞察' : 'INSIGHT'}</span><span>{zh ? '行动 ↗' : 'ACTION ↗'}</span></div></div> : index === 1 ? <div className="art-market"><div className="market-orbit orbit-one" /><div className="market-orbit orbit-two" /><span className="market-o">o<span>m</span></span><span className="market-tag">{zh ? '发现您的可能。↗' : 'Find your possibility. ↗'}</span></div> : <div className="art-mobility"><div className="mobility-ring ring-one" /><div className="mobility-ring ring-two" /><div className="mobility-ring ring-three" /><div className="mobility-core"><Radio strokeWidth={1.2} size={45} /></div><span className="telemetry telemetry-one">{zh ? '已连接' : 'CONNECTED'} <i /></span><span className="telemetry telemetry-two">{zh ? '车辆 → 云端' : 'VEHICLE → CLOUD'}</span></div>}
                  </div>
                  <div className="product-info"><div className="product-title-row"><h3>{service.name}</h3><ArrowUpRight size={24} aria-hidden="true" /></div><p className="product-tagline">{service.tagline}</p><p className="product-description">{service.description}</p><span className="product-view">{zh ? '探索产品' : 'EXPLORE PRODUCT'} <ArrowUpRight size={14} aria-hidden="true" /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="capabilities-section">
          <div className="site-container">
            <p className="section-label"><span>{zh ? '03 / 我们的服务' : '03 / WHAT WE DO'}</span><span>{zh ? '我们的能力' : en ? 'Our capabilities' : '私たちにできること'}</span></p>
            <div className="section-heading-row"><h2>{zh ? <>让您的构想，<br />拥有实现的力量。</> : en ? <>Bring your vision<br />to life.</> : <>あなたの構想に、<br />実現する力を。</>}</h2><div><p>{zh ? <>您需要的，是适合自己的系统。<br />从问题梳理到设计、开发与运营，我们与您同行。</> : en ? <>The system you need is one that fits you.<br />From defining the problem to design, development, and operation.</> : <>必要なのは、あなたに合う仕組み。<br />課題の整理から設計・開発・運用まで、一緒に。</>}</p><Link href={localizedPath('/services', locale)} className="text-link">{zh ? '查看全部服务' : en ? 'Explore all services' : 'すべてのサービス'} <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
            <div className="capability-list">{localizedCapabilities.map((item) => <Link href={localizedPath(item.href, locale)} className="capability-row" key={item.number}><span className="capability-number">/{item.number}</span><div className="capability-name"><h3>{item.name}</h3><span>{item.japanese}</span></div><div className="capability-description"><p>{item.description}</p><span>{item.tags}</span></div><span className="capability-arrow"><ArrowUpRight size={27} strokeWidth={1.3} aria-hidden="true" /></span></Link>)}</div>
          </div>
        </section>

        <section id="process" className="process-section paper-section">
          <div className="site-container">
            <p className="section-label"><span>{zh ? '04 / 合作流程' : '04 / HOW WE WORK'}</span><span>{zh ? '项目推进方式' : en ? 'Our process' : 'プロジェクトの進め方'}</span></p>
            <div className="section-heading-row"><h2>{zh ? <>从一次对话，<br />走向新的日常。</> : en ? <>From a conversation<br />to what comes next.</> : <>対話から、<br />次のあたりまえへ。</>}</h2><p>{zh ? <>从“这样的想法能实现吗？”开始。<br />小步尝试、持续验证，稳步将构想变为现实。</> : en ? <>Start with “Could we make this possible?”<br />We test small ideas, learn, and steadily bring them to life.</> : <>「こんなこと、できる？」から始めましょう。<br />小さく試し、確かめながら、着実に形にします。</>}</p></div>
            <div className="process-grid">{process.map((step) => <div className="process-step" key={step.number}><div className="process-top"><span>{step.number}</span><ArrowRight size={24} strokeWidth={1} aria-hidden="true" /></div><h3>{step.english}</h3><h4>{step.title}</h4><p>{step.text}</p></div>)}</div>
          </div>
        </section>

        <section id="contact" className="home-contact">
          <div className="site-container"><p className="eyebrow"><i className="status-dot" /> {zh ? '您的新篇章，从这里开始' : 'YOUR NEXT CHAPTER STARTS HERE'}</p><Link href={localizedPath('/contact', locale)} className="giant-contact-link"><span>{zh ? '联系我们' : en ? 'Contact us' : 'お問い合わせ'}</span><span className="giant-contact-arrow"><ArrowUpRight strokeWidth={1} aria-hidden="true" /></span></Link><div className="home-contact-bottom"><h2>{zh ? '即使想法尚未成形，也可以从这里开始。' : en ? 'Every idea can begin here, even before it takes shape.' : 'まだ輪郭のないアイデアも、ここから。'}</h2><span>{zh ? '业务咨询与项目洽谈' : en ? 'Inquiries & project consultations' : 'お問い合わせ・プロジェクトのご相談'} <ArrowUpRight size={17} aria-hidden="true" /></span></div></div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  )
}

