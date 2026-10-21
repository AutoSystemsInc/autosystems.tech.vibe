import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { InquiryCTA, SectionHeading, SystemsGraphic } from "@/components/inner-pages"
import styles from "@/components/inner-pages.module.css"

export const metadata: Metadata = {
  title: "私たちについて",
  description: "世界中のシステムを自動化し、誰もが使えるように。AutoSystems株式会社の経営理念、価値観、会社概要をご紹介します。",
}

const values = [
  { english: "Innovation", title: "革新性", text: "常に新しい技術を探求し、従来の枠組みを超えたソリューションを創造する。変化を、次の可能性へつなげます。" },
  { english: "Collaboration", title: "協働", text: "お客様との対話を大切に、チームで課題に向き合う。互いの知識と視点を重ねて、一緒に答えをつくります。" },
  { english: "Quality", title: "品質", text: "使う人の立場で考え、細部まで丁寧に仕上げる。導入から日々の運用まで、信頼できる仕組みを追求します。" },
]

const profile = [
  ["会社名", "AutoSystems株式会社"],
  ["設立", "2023年4月12日"],
  ["代表取締役", "原 匠一郎"],
  ["所在地", "〒101-0021 東京都千代田区外神田2-10-6 宮本ビル3-A"],
  ["資本金", "1,500,000円"],
  ["事業領域", "システム自動化、AI開発、クラウドソリューション、IoTデバイス開発"],
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header activeSection="about" />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav aria-label="パンくずリスト" className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><span>About us</span></nav>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}><span>ABOUT US</span>私たちについて</p>
                <h1 className={styles.heroTitle}>Less routine.<span>More possibility.</span></h1>
                <p className={styles.japaneseLead}>自動化で、人の可能性を<br />もっと自由に。</p>
                <p className={styles.heroDescription}>技術を、限られた誰かのものにしない。<br />AutoSystemsは、システムの自動化を通じて、<br />誰もがテクノロジーを使える未来を目指しています。</p>
              </div>
              <SystemsGraphic labels={["PEOPLE", "TECHNOLOGY", "POSSIBILITY"]} />
            </div>
            <div className={styles.heroBottom}><a href="#mission">DISCOVER AUTOSYSTEMS<ArrowDown size={15} aria-hidden="true" /></a><span>BASED IN TOKYO. THINKING BEYOND.</span></div>
          </div>
        </section>

        <section id="mission" className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="01" label="OUR PURPOSE" title="仕組みが変わると、未来が動く。" />
            <p className={styles.mission}>世界中のシステムを<em>自動化</em>し、<br />世界中の人がアクセスできて、<br /><em>使えるようにする。</em></p>
            <div className={styles.missionFoot}>
              <div><h3>MISSION</h3><p>経営理念を、一つひとつの実装へ。自動化の技術を身近にし、使う人の課題に応えるシステムをつくります。</p></div>
              <div><h3>VISION</h3><p>技術の力で世界をつなぎ、誰もが平等にテクノロジーの恩恵を受けられる、持続可能な社会の実現を目指します。</p></div>
            </div>
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading index="02" label="OUR VALUES" title="変わらない、大切なこと。" />
            <div className={styles.valueGrid}>{values.map((value, index) => <article className={styles.valueItem} key={value.english}><span>0{index + 1} /</span><h3>{value.english}<span>{value.title}</span></h3><p>{value.text}</p></article>)}</div>
          </div>
        </section>

        <section className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="03" label="COMPANY PROFILE" title="AutoSystemsについて。" />
            <div className={styles.companyGrid}>
              <div className={styles.companyAside}><p>ESTABLISHED IN TOKYO</p><strong>2023.</strong><span>4月12日、東京にて<br />AutoSystems株式会社を設立。</span></div>
              <dl className={styles.companyTable}>{profile.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </div>
          </div>
        </section>
        <InquiryCTA />
      </main>
      <Footer />
    </div>
  )
}
