import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Brain, Cloud, Cog, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { InquiryCTA, SectionHeading, SystemsGraphic } from "@/components/inner-pages"
import { proprietaryServices } from "@/lib/proprietary-services"
import styles from "@/components/inner-pages.module.css"

export const metadata: Metadata = {
  title: "サービス",
  description: "自社クラウドサービス、ソフトウェア開発、IoTデバイス開発、リモートOBD2トラッカー。AutoSystemsがビジネスの課題解決と自動化を支援します。",
}

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

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <Header activeSection="services" />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav aria-label="パンくずリスト" className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><span>Services</span></nav>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}><span>WHAT WE DO</span>サービス</p>
                <h1 className={styles.heroTitle}>Build better.<span>Work smarter.</span></h1>
                <p className={styles.japaneseLead}>アイデアを、動く仕組みへ。</p>
                <p className={styles.heroDescription}>すぐに使えるクラウドサービスも、<br />課題に合わせたオーダーメイド開発も。<br />自動化の技術で、ビジネスの次の一歩を支えます。</p>
              </div>
              <SystemsGraphic labels={["PRODUCT", "DEVELOPMENT", "OPERATION"]} />
            </div>
            <div className={styles.heroBottom}><a href="#products">EXPLORE OUR SERVICES<ArrowDown size={15} aria-hidden="true" /></a><span>PRODUCTS × ENGINEERING × AUTOMATION</span></div>
          </div>
        </section>

        <section id="products" className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="01" label="OUR PRODUCTS" title="日々を変える、プロダクト。" description="AutoSystemsが開発・運営する自社サービス。機能の詳細は、各サービスサイトをご覧ください。導入やカスタマイズ、API連携のご相談にも対応します。" />
            <div className={styles.productGrid}>{proprietaryServices.map((service, index) => <article className={styles.product} key={service.url}>
              <div className={styles.productTop}><span>PRODUCT / 0{index + 1}</span><ArrowUpRight size={17} strokeWidth={1.2} aria-hidden="true" /></div>
              <div className={styles.productLogo}>{service.logoSrc ? <Image src={service.logoSrc} alt="" width={240} height={64} /> : <span className={styles.productLetter}>{service.iconLetter}</span>}</div>
              <h3>{service.name}</h3><p className={styles.productTagline}>{service.tagline}</p><p>{service.description}</p>
              <a href={service.url} target="_blank" rel="noopener noreferrer"><span>サービスサイトを見る<span className={styles.visuallyHidden}>：{service.name}（新しいタブで開く）</span></span><ArrowUpRight size={17} aria-hidden="true" /></a>
            </article>)}</div>
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading index="02" label="OUR EXPERTISE" title="その課題に、最適な仕組みを。" description="ソフトウェアからハードウェア、そして運用まで。必要な技術を組み合わせて、お客様の構想を形にします。" />
            <div className={styles.serviceRows}>{expertise.map((service, index) => <Link key={service.href} href={service.href} className={styles.serviceRow}><span className={styles.serviceRowNumber}>0{index + 1}</span><div className={styles.serviceRowTitle}><h3>{service.title.split("\n").map((line, lineIndex) => <span key={line}>{lineIndex ? <br /> : null}{line}</span>)}</h3><span>{service.japanese}</span></div><p>{service.text}</p><ArrowUpRight strokeWidth={1} aria-hidden="true" /></Link>)}</div>
          </div>
        </section>

        <section className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="03" label="BEYOND DEVELOPMENT" title="つくった、その先まで。" description="導入の前も、運用が始まってからも。システムのライフサイクルを通じて、ビジネスを支えます。" />
            <div className={styles.supportGrid}>{support.map((item) => <article className={styles.supportItem} key={item.title}><item.icon size={28} strokeWidth={1.2} aria-hidden="true" /><h3><Link href="/contact">{item.title}</Link></h3><p>{item.description}</p></article>)}</div>
          </div>
        </section>
        <InquiryCTA />
      </main>
      <Footer />
    </div>
  )
}
