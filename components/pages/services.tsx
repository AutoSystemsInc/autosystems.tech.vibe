import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Brain, Cloud, Cog, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { InquiryCTA, SectionHeading, SystemsGraphic } from "@/components/inner-pages"
import { getProprietaryServices } from "@/lib/proprietary-services"
import { localizedPath, type Locale } from "@/lib/i18n"
import styles from "@/components/inner-pages.module.css"

const expertise = [
  { title: "Software\nDevelopment", japanese: "ソフトウェア開発", href: "/services/software", text: "業務システムからWeb・モバイルアプリまで。対話と試作を重ねて、ビジネスに合うソフトウェアをオーダーメイドで開発します。" },
  { title: "IoT Device\nDevelopment", japanese: "IoTデバイス開発", href: "/services/iot", text: "センサー、デバイス、通信、クラウドを一つの仕組みに。現場のデータを可視化し、日々の判断や業務の自動化につなげます。" },
  { title: "Remote\nOBD2 Tracker", japanese: "リモートOBD2トラッカー", href: "/services/obd2", text: "車両の状態と運転データをリモートで把握。位置情報、故障診断、運転履歴をつなぎ、フリート管理と予防整備を支援します。" },
]

const support = [
  { icon: Cloud, title: "クラウド移行", description: "既存環境を確認し、安全で効率的なクラウドへの移行を支援。" },
  { icon: Brain, title: "AI・機械学習", description: "データを活かすAIソリューションの開発から導入まで。" },
  { icon: Shield, title: "セキュリティ", description: "システムのセキュリティ監査と、課題に応じた対策の実装。" },
  { icon: Cog, title: "システム保守", description: "安定した運用に向けた監視、保守、継続的な機能改善。" },
]

const englishExpertise = [
  { title: "Software\nDevelopment", japanese: "Built around your business", href: "/services/software", text: "From business systems to web and mobile applications. Through dialogue and prototyping, we develop custom software that fits your business." },
  { title: "IoT Device\nDevelopment", japanese: "Connect the physical and digital", href: "/services/iot", text: "Sensors, devices, connectivity, and cloud in one system. Make field data visible and use it to inform daily decisions and automate operations." },
  { title: "Remote\nOBD2 Tracker", japanese: "Understand your fleet remotely", href: "/services/obd2", text: "Monitor vehicle conditions and driving data remotely. Bring location data, diagnostics, and driving history together to support fleet management and preventive maintenance." },
]

const englishSupport = [
  { icon: Cloud, title: "Cloud migration", description: "We assess your existing environment and support a secure, efficient move to the cloud." },
  { icon: Brain, title: "AI & machine learning", description: "From development to implementation, we build AI solutions that put your data to work." },
  { icon: Shield, title: "Security", description: "System security audits and measures designed to address the issues we identify." },
  { icon: Cog, title: "System maintenance", description: "Monitoring, maintenance, and continuous improvements for reliable operation." },
]

const chineseExpertise = [
  { title: "软件\n开发", japanese: "为您的业务量身打造", href: "/services/software", text: "从业务系统到 Web 与移动应用，通过反复沟通与原型验证，为您的业务定制合适的软件。" },
  { title: "物联网\n设备开发", japanese: "连接物理世界与数字世界", href: "/services/iot", text: "将传感器、设备、通信与云端整合为一个系统。让现场数据可视化，支持日常决策与业务自动化。" },
  { title: "远程 OBD2\n追踪器", japanese: "远程掌握车队状态", href: "/services/obd2", text: "远程掌握车辆状态与驾驶数据，整合位置信息、故障诊断和行驶记录，支持车队管理与预防性维护。" },
]

const chineseSupport = [
  { icon: Cloud, title: "云迁移", description: "评估现有环境，协助安全、高效地迁移至云端。" },
  { icon: Brain, title: "AI 与机器学习", description: "从开发到部署，打造让数据发挥价值的 AI 解决方案。" },
  { icon: Shield, title: "安全保障", description: "开展系统安全审计，并针对发现的问题实施相应措施。" },
  { icon: Cog, title: "系统维护", description: "通过监控、维护与持续功能改进，支持系统稳定运行。" },
]

export default function ServicesPage({ locale = "ja" }: { locale?: Locale } = {}) {
  const en = locale === "en"
  const zh = locale === "zh"
  const products = getProprietaryServices(locale)
  const localizedExpertise = zh ? chineseExpertise : en ? englishExpertise : expertise
  const localizedSupport = zh ? chineseSupport : en ? englishSupport : support
  return (
    <div className={styles.page}>
      <Header activeSection="services" locale={locale} />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav aria-label={zh ? "面包屑导航" : en ? "Breadcrumb" : "パンくずリスト"} className={styles.breadcrumb}><Link href={localizedPath("/", locale)}>{zh ? "首页" : "Home"}</Link><span>/</span><span>{zh ? "服务" : "Services"}</span></nav>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}><span>{zh ? "我们的服务" : "WHAT WE DO"}</span>{zh ? "服务" : en ? "Services" : "サービス"}</p>
                <h1 className={styles.heroTitle}>{zh ? "构建更好。" : "Build better."}<span>{zh ? "工作更高效。" : "Work smarter."}</span></h1>
                <p className={styles.japaneseLead}>{zh ? "将构想，转化为运转的系统。" : en ? "Turn ideas into working systems." : "アイデアを、動く仕組みへ。"}</p>
                <p className={styles.heroDescription}>{zh ? <>无论是即刻可用的云服务，<br />还是针对具体问题的定制开发。<br />我们以自动化技术，支持业务迈出下一步。</> : en ? <>Ready-to-use cloud services.<br />Custom development for your challenges.<br />Automation that supports your next step.</> : <>すぐに使えるクラウドサービスも、<br />課題に合わせたオーダーメイド開発も。<br />自動化の技術で、ビジネスの次の一歩を支えます。</>}</p>
              </div>
              <SystemsGraphic labels={zh ? ["产品", "开发", "运营"] : ["PRODUCT", "DEVELOPMENT", "OPERATION"]} />
            </div>
            <div className={styles.heroBottom}><a href="#products">{zh ? "探索我们的服务" : "EXPLORE OUR SERVICES"}<ArrowDown size={15} aria-hidden="true" /></a><span>{zh ? "产品 × 技术开发 × 自动化" : "PRODUCTS × ENGINEERING × AUTOMATION"}</span></div>
          </div>
        </section>

        <section id="products" className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="01" label={zh ? "自主产品" : "OUR PRODUCTS"} title={zh ? "改变日常的产品。" : en ? "Products for a better everyday." : "日々を変える、プロダクト。"} description={zh ? "由 AutoSystems 自主开发与运营的服务。详细功能请访问各产品网站。我们也欢迎有关引入、定制和 API 集成的咨询。" : en ? "Services developed and operated by AutoSystems. Visit each product’s website for details. We also welcome inquiries about implementation, customization, and API integration." : "AutoSystemsが開発・運営する自社サービス。機能の詳細は、各サービスサイトをご覧ください。導入やカスタマイズ、API連携のご相談にも対応します。"} />
            <div className={styles.productGrid}>{products.map((service, index) => <article className={styles.product} key={service.url}>
              <div className={styles.productTop}><span>{zh ? "产品" : "PRODUCT"} / 0{index + 1}</span><ArrowUpRight size={17} strokeWidth={1.2} aria-hidden="true" /></div>
              <div className={styles.productLogo}>{service.logoSrc ? <Image src={service.logoSrc} alt="" width={240} height={64} /> : <span className={styles.productLetter}>{service.iconLetter}</span>}</div>
              <h3>{service.name}</h3><p className={styles.productTagline}>{service.tagline}</p><p>{service.description}</p>
              <a href={service.url} target="_blank" rel="noopener noreferrer"><span>{zh ? "访问产品网站" : en ? "Visit product website" : "サービスサイトを見る"}<span className={styles.visuallyHidden}>: {service.name}{zh ? "（在新标签页中打开）" : en ? " (opens in a new tab)" : "（新しいタブで開く）"}</span></span><ArrowUpRight size={17} aria-hidden="true" /></a>
            </article>)}</div>
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading index="02" label={zh ? "专业能力" : "OUR EXPERTISE"} title={zh ? "为您的问题，找到合适的系统。" : en ? "The right system for your challenge." : "その課題に、最適な仕組みを。"} description={zh ? "从软件、硬件到系统运营，整合所需技术，将您的构想变为现实。" : en ? "From software and hardware to operation. We bring the right technologies together to turn your vision into reality." : "ソフトウェアからハードウェア、そして運用まで。必要な技術を組み合わせて、お客様の構想を形にします。"} />
            <div className={styles.serviceRows}>{localizedExpertise.map((service, index) => <Link key={service.href} href={localizedPath(service.href, locale)} className={styles.serviceRow}><span className={styles.serviceRowNumber}>0{index + 1}</span><div className={styles.serviceRowTitle}><h3>{service.title.split("\n").map((line, lineIndex) => <span key={line}>{lineIndex ? <br /> : null}{line}</span>)}</h3><span>{service.japanese}</span></div><p>{service.text}</p><ArrowUpRight strokeWidth={1} aria-hidden="true" /></Link>)}</div>
          </div>
        </section>

        <section className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="03" label={zh ? "开发之外" : "BEYOND DEVELOPMENT"} title={zh ? "交付之后，支持依然继续。" : en ? "Support beyond the build." : "つくった、その先まで。"} description={zh ? "从引入前的准备到上线后的运营，在系统的整个生命周期中，为您的业务提供支持。" : en ? "Before implementation and after launch. We support your business throughout your system’s lifecycle." : "導入の前も、運用が始まってからも。システムのライフサイクルを通じて、ビジネスを支えます。"} />
            <div className={styles.supportGrid}>{localizedSupport.map((item) => <article className={styles.supportItem} key={item.title}><item.icon size={28} strokeWidth={1.2} aria-hidden="true" /><h3><Link href={localizedPath("/contact", locale)}>{item.title}</Link></h3><p>{item.description}</p></article>)}</div>
          </div>
        </section>
        <InquiryCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
