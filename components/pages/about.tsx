import Link from "next/link"
import { ArrowDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { InquiryCTA, SectionHeading, SystemsGraphic } from "@/components/inner-pages"
import styles from "@/components/inner-pages.module.css"
import { localizedPath, type Locale } from "@/lib/i18n"

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

const englishValues = [
  { english: "Innovation", title: "Explore what comes next", text: "We keep exploring new technologies and creating solutions beyond familiar boundaries. We turn change into new possibilities." },
  { english: "Collaboration", title: "Find answers together", text: "We value dialogue with our clients and approach challenges as a team. By sharing knowledge and perspectives, we build answers together." },
  { english: "Quality", title: "Care in every detail", text: "We consider the people who use our systems and pay attention to every detail. From introduction to everyday operation, we pursue systems people can rely on." },
]

const englishProfile = [
  ["Company name", "AutoSystems, Inc. (AutoSystems株式会社)"],
  ["Established", "April 12, 2023"],
  ["Representative Director", "原 匠一郎"],
  ["Address", "Miyamoto Building 3-A, 2-10-6 Sotokanda, Chiyoda-ku, Tokyo 101-0021, Japan"],
  ["Capital", "JPY 1,500,000"],
  ["Business areas", "System automation, AI development, cloud solutions, and IoT device development"],
]

const chineseValues = [
  { english: "创新", title: "探索新的可能", text: "不断探索新技术，创造超越既有框架的解决方案，将变化转化为新的可能。" },
  { english: "协作", title: "共同寻找答案", text: "重视与客户的沟通，以团队协作应对挑战。汇聚彼此的知识与视角，共同创造答案。" },
  { english: "品质", title: "用心打磨每个细节", text: "从使用者的角度出发，认真打磨每个细节。从系统引入到日常运营，始终追求值得信赖的系统。" },
]

const chineseProfile = [
  ["公司名称", "AutoSystems, Inc.（AutoSystems株式会社）"],
  ["成立日期", "2023年4月12日"],
  ["代表董事", "原 匠一郎"],
  ["地址", "日本东京都千代田区外神田2-10-6 宫本大厦3-A，邮编101-0021"],
  ["注册资本", "1,500,000日元"],
  ["业务领域", "系统自动化、AI 开发、云解决方案、物联网设备开发"],
]

export default function AboutPage({ locale = "ja" }: { locale?: Locale } = {}) {
  const en = locale === "en"
  const zh = locale === "zh"
  const localizedValues = zh ? chineseValues : en ? englishValues : values
  const localizedProfile = zh ? chineseProfile : en ? englishProfile : profile
  return (
    <div className={styles.page}>
      <Header activeSection="about" locale={locale} />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav aria-label={zh ? "面包屑导航" : en ? "Breadcrumb" : "パンくずリスト"} className={styles.breadcrumb}><Link href={localizedPath("/", locale)}>{zh ? "首页" : "Home"}</Link><span>/</span><span>{zh ? "关于我们" : "About us"}</span></nav>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}><span>{zh ? "关于我们" : "ABOUT US"}</span>{zh ? "认识 AutoSystems" : en ? "Who we are" : "私たちについて"}</p>
                <h1 className={styles.heroTitle}>{zh ? "减少重复。" : "Less routine."}<span>{zh ? "释放更多可能。" : "More possibility."}</span></h1>
                <p className={styles.japaneseLead}>{zh ? <>以自动化，<br />释放人的无限潜能。</> : en ? <>Automation that sets<br />human potential free.</> : <>自動化で、人の可能性を<br />もっと自由に。</>}</p>
                <p className={styles.heroDescription}>{zh ? <>技术不应只属于少数人。<br />AutoSystems 通过系统自动化，<br />致力于实现人人都能使用技术的未来。</> : en ? <>Technology should be accessible to everyone.<br />Through system automation, AutoSystems works toward<br />a future where everyone can use technology.</> : <>技術を、限られた誰かのものにしない。<br />AutoSystemsは、システムの自動化を通じて、<br />誰もがテクノロジーを使える未来を目指しています。</>}</p>
              </div>
              <SystemsGraphic labels={zh ? ["人", "科技", "可能"] : ["PEOPLE", "TECHNOLOGY", "POSSIBILITY"]} />
            </div>
            <div className={styles.heroBottom}><a href="#mission">{zh ? "了解 AUTOSYSTEMS" : "DISCOVER AUTOSYSTEMS"}<ArrowDown size={15} aria-hidden="true" /></a><span>{zh ? "立足东京，放眼未来。" : "BASED IN TOKYO. THINKING BEYOND."}</span></div>
          </div>
        </section>

        <section id="mission" className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="01" label={zh ? "我们的使命" : "OUR PURPOSE"} title={zh ? "系统改变，未来前行。" : en ? "Change the system. Move the future." : "仕組みが変わると、未来が動く。"} />
            {/* Canonical mission statement: preserve the exact wording, particles, and punctuation. Only layout and emphasis may change. */}
            {zh ? <p className={styles.mission}>AutoSystems的使命是，<br />实现全球系统的<em>自动化</em>，<br />让世界各地的人们都能<em>访问和使用</em><br />这些系统。</p> : en ? <p className={styles.mission}>AutoSystems’ mission is to<br /><em>automate</em> systems around the world<br />and make them accessible<br />and <em>usable by everyone.</em></p> : (
            <p className={styles.mission}>AutoSystemsの使命は、<br />世界中のシステムを<em>自動化</em>し、<br />世界中の人がアクセスできて、<br /><em>使えるようにすることです。</em></p>
            )}
            <div className={styles.missionFoot}>
              <div><h3>{zh ? "使命" : "MISSION"}</h3><p>{zh ? "将经营理念落实到每一次开发中。让自动化技术更加触手可及，打造真正回应使用者需求的系统。" : en ? "We put our philosophy into practice, one implementation at a time. We make automation more accessible and build systems that address the needs of the people who use them." : "経営理念を、一つひとつの実装へ。自動化の技術を身近にし、使う人の課題に応えるシステムをつくります。"}</p></div>
              <div><h3>{zh ? "愿景" : "VISION"}</h3><p>{zh ? "以技术连接世界，努力构建可持续发展的社会，让每个人都能平等享受科技带来的益处。" : en ? "We aim to connect the world through technology and help create a sustainable society where everyone can benefit from it equally." : "技術の力で世界をつなぎ、誰もが平等にテクノロジーの恩恵を受けられる、持続可能な社会の実現を目指します。"}</p></div>
            </div>
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading index="02" label={zh ? "我们的价值观" : "OUR VALUES"} title={zh ? "始终珍视的信念。" : en ? "The values that guide us." : "変わらない、大切なこと。"} />
            <div className={styles.valueGrid}>{localizedValues.map((value, index) => <article className={styles.valueItem} key={value.english}><span>0{index + 1} /</span><h3>{value.english}<span>{value.title}</span></h3><p>{value.text}</p></article>)}</div>
          </div>
        </section>

        <section className={styles.paperSection}>
          <div className={styles.container}>
            <SectionHeading index="03" label={zh ? "公司概况" : "COMPANY PROFILE"} title={zh ? "关于 AutoSystems。" : en ? "Meet AutoSystems." : "AutoSystemsについて。"} />
            <div className={styles.companyGrid}>
              <div className={styles.companyAside}><p>{zh ? "创立于东京" : "ESTABLISHED IN TOKYO"}</p><strong>2023.</strong><span>{zh ? <>4月12日，AutoSystems, Inc.<br />在东京成立。</> : en ? <>AutoSystems, Inc. was established<br />in Tokyo on April 12.</> : <>4月12日、東京にて<br />AutoSystems株式会社を設立。</>}</span></div>
              <dl className={styles.companyTable}>{localizedProfile.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </div>
          </div>
        </section>
        <InquiryCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
