import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { localizedPath, type Locale } from "@/lib/i18n"
import styles from "@/components/inner-pages.module.css"

export function SectionHeading({ index, label, title, description }: {
  index: string
  label: string
  title: string
  description?: string
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}><span>{index}</span>{label}</p>
      <div><h2>{title}</h2>{description ? <p className={styles.sectionDescription}>{description}</p> : null}</div>
    </div>
  )
}

export function InquiryCTA({ locale = "ja" }: { locale?: Locale }) {
  const english = locale === "en"
  const chinese = locale === "zh"
  return (
    <section className={styles.inquiry}>
      <div className={styles.container}>
        <p className={styles.eyebrow}><span className={styles.statusDot} />START A CONVERSATION</p>
        <Link href={localizedPath("/contact", locale)} className={styles.inquiryLink}>
          <span>{chinese ? <>下一种可能，<br />从这里开始。</> : english ? <>Your next possibility<br />starts here.</> : <>次の可能性を、<br />ここから。</>}<small>{chinese ? "让想法成为现实。" : "Let’s make it work."}</small></span>
          <span className={styles.inquiryArrow}><ArrowUpRight strokeWidth={1.25} aria-hidden="true" /></span>
        </Link>
        <p className={styles.inquiryNote}>{chinese ? "无论是初步构想，还是当前面临的挑战，都欢迎与我们聊聊。" : english ? "An early idea or a challenge you are facing today. Tell us what you have in mind." : "構想段階のアイデアも、いま抱えている課題も。まずはお話を聞かせてください。"}</p>
      </div>
    </section>
  )
}

export function SystemsGraphic({ variant = "network", labels = ["IDEA", "SYSTEM", "VALUE"] }: {
  variant?: "network" | "software" | "iot" | "obd2"
  labels?: string[]
}) {
  return (
    <div className={`${styles.systemGraphic} ${styles[variant]}`} aria-hidden="true">
      <div className={styles.graphicTop}><span>AUTOSYSTEMS / ENGINEERING</span><Plus size={16} strokeWidth={1} /></div>
      <div className={styles.orbit}>
        <div className={styles.orbitRing} /><div className={styles.orbitRingInner} />
        <span className={styles.orbitNode} /><span className={styles.orbitNodeTwo} />
        <svg className={styles.coreSymbol} viewBox="0 0 180 180" fill="none">
          <path d="M90 24 151 130H29L90 24Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M90 60 131 132H49L90 60Z" fill="currentColor" />
          <path d="M90 60v89M29 130l122-69M151 130 29 61" stroke="currentColor" strokeWidth=".5" opacity=".5" />
          <circle cx="90" cy="90" r="65" stroke="currentColor" strokeWidth=".5" opacity=".5" />
        </svg>
        <span className={styles.orbitCross}>+</span>
      </div>
      <div className={styles.graphicFlow}>{labels.map((label, index) => <span key={label}><i>0{index + 1}</i>{label}</span>)}</div>
      <div className={styles.graphicBottom}><span>CONNECTED BY DESIGN</span><span>TOKYO, JAPAN</span></div>
    </div>
  )
}

export type ServiceDetailData = {
  number: string
  englishTitle: string
  title: string
  statement: string
  description: string
  variant: "software" | "iot" | "obd2"
  flow: string[]
  overviewTitle: string
  overview: string
  highlights: string[]
  featureTitle: string
  features: { title: string; description: string; tags?: string[] }[]
  technologies?: { label: string; items: string[] }[]
  useCases: { title: string; label: string; description: string }[]
  process: { title: string; description: string }[]
  pricing?: { title: string; label: string; description: string }[]
  externalUrl?: string
}

export function ServiceDetail({ data, locale = "ja" }: { data: ServiceDetailData; locale?: Locale }) {
  const english = locale === "en"
  const chinese = locale === "zh"
  return (
    <div className={styles.page}>
      <Header activeSection="services" locale={locale} />
      <main id="main-content">
        <section className={styles.detailHero}>
          <div className={styles.container}>
            <nav aria-label={chinese ? "面包屑导航" : english ? "Breadcrumb" : "パンくずリスト"} className={styles.breadcrumb}><Link href={localizedPath("/", locale)}>{chinese ? "首页" : "Home"}</Link><span>/</span><Link href={localizedPath("/services", locale)}>{chinese ? "业务与服务" : "Services"}</Link><span>/</span><span>{chinese ? data.title : data.englishTitle}</span></nav>
            <div className={styles.detailHeroGrid}>
              <div>
                <p className={styles.eyebrow}><span>SERVICE {data.number}</span>{data.title}</p>
                <h1 className={styles.detailTitle}>{chinese ? data.title : data.englishTitle}<span>.</span></h1>
                <p className={styles.detailStatement}>{data.statement}</p>
                <p className={styles.heroDescription}>{data.description}</p>
                <Link href={localizedPath("/contact", locale)} className={styles.limeButton}>{chinese ? "咨询此项服务" : english ? "Discuss this service" : "このサービスを相談する"}<ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
              <SystemsGraphic variant={data.variant} labels={data.flow} />
            </div>
            <a href="#overview" className={styles.scrollLink}>{chinese ? "了解服务详情" : "EXPLORE THE SERVICE"}<ArrowDown size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <section id="overview" className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="01" label="OVERVIEW" title={data.overviewTitle} />
            <div className={styles.overviewGrid}>
              <p className={styles.largeBody}>{data.overview}</p>
              <ul className={styles.highlightList}>{data.highlights.map((item) => <li key={item}><Plus size={16} aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="02" label="CAPABILITIES" title={data.featureTitle} />
            <div className={styles.featureGrid}>{data.features.map((feature, index) => (
              <article key={feature.title} className={styles.featureCard}>
                <span className={styles.featureNumber}>/ 0{index + 1}</span>
                <h3>{feature.title}</h3><p>{feature.description}</p>
                {feature.tags ? <ul className={styles.tagList}>{feature.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> : null}
              </article>
            ))}</div>
            {data.technologies ? <div className={styles.technologyBlock}><p className={styles.eyebrow}>TECHNOLOGY STACK</p>{data.technologies.map((group) => <div className={styles.technologyRow} key={group.label}><h3>{group.label}</h3><p>{group.items.join(" / ")}</p></div>)}</div> : null}
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading index="03" label="POSSIBILITIES" title={chinese ? "将现场挑战，转化为可能。" : english ? "Turn challenges into possibilities." : "現場の課題を、可能性に。"} description={chinese ? "结合您的业务与运营环境，共同规划真正需要的系统。" : english ? "Together, we design the systems your business and operating environment need." : "ビジネスや運用環境に合わせて、必要な仕組みを一緒に考えます。"} />
            <div className={styles.useCaseGrid}>{data.useCases.map((useCase, index) => <article className={styles.useCase} key={useCase.title}><div><span className={styles.featureNumber}>0{index + 1}</span><ArrowUpRight size={22} strokeWidth={1} aria-hidden="true" /></div><p className={styles.useCaseLabel}>{useCase.label}</p><h3>{useCase.title}</h3><p>{useCase.description}</p></article>)}</div>
            {data.externalUrl ? <a href={data.externalUrl} target="_blank" rel="noopener noreferrer" className={styles.textLink}>{chinese ? "访问服务网站" : english ? "Visit the service website" : "サービスサイトを見る"}<ArrowUpRight size={18} aria-hidden="true" /><span className={styles.visuallyHidden}>{chinese ? "（在新标签页中打开）" : english ? " (opens in a new tab)" : "（新しいタブで開く）"}</span></a> : null}
          </div>
        </section>

        <section className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="04" label="OUR PROCESS" title={chinese ? "从交流开始，陪伴到运营。" : english ? "From conversation to operation." : "対話から始めて、運用まで。"} />
            <ol className={styles.processList}>{data.process.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p><ArrowRight size={20} strokeWidth={1} aria-hidden="true" /></li>)}</ol>
            {data.pricing ? <div className={styles.pricingBlock}><div className={styles.pricingIntro}><p className={styles.eyebrow}>ENGAGEMENT</p><h2>{chinese ? <>从实际需求出发，<br />灵活合作。</> : english ? <>Start with what<br />you need.</> : <>必要な範囲から、<br />柔軟に。</>}</h2><p>{chinese ? "了解项目内容、规模与运营条件后，为您提供适合的报价方案。" : english ? "We prepare a proposal based on your scope, scale, and operating requirements." : "内容・規模・運用条件を伺い、お見積もりをご提案します。"}</p></div><div className={styles.pricingOptions}>{data.pricing.map((plan) => <article key={plan.title}><p>{plan.label}</p><h3>{plan.title}</h3><span>{plan.description}</span></article>)}</div></div> : null}
          </div>
        </section>
        <InquiryCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
