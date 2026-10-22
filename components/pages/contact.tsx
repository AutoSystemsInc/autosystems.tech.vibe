import Link from 'next/link'
import { ArrowUpRight, Check, Plus, Sparkles } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import ContactSignal from '@/components/contact-signal'
import { localizedPath, type Locale } from '@/lib/i18n'
import styles from '@/app/contact/contact.module.css'

const japaneseQuestions = [
  { question: 'まだアイデアの段階でも相談できますか？', answer: 'もちろんです。仕様がまとまっていなくても、いま感じている課題や、実現してみたいことをお聞かせください。課題の整理から一緒に考えます。' },
  { question: '予算や時期はまだ決まっていません。', answer: '予算の選択は任意です。「未定」を選ぶこともできます。ご希望の時期も、いま分かる範囲でメッセージに添えていただければ大丈夫です。' },
  { question: '既存システムの改善や連携も相談できますか？', answer: 'はい。新規開発のほか、既存システムの改善、業務の自動化、API・IoT連携についてもご相談いただけます。現在の運用や、お困りの点をお聞かせください。' },
]

export default function ContactPage({ locale = 'ja' }: { locale?: Locale }) {
  const english = locale === 'en'
  const chinese = locale === 'zh'
  const questions = chinese ? [
    { question: '想法还在构思阶段，也可以咨询吗？', answer: '当然可以。无需准备完整的需求说明，欢迎告诉我们您目前遇到的问题或希望实现的目标。我们会与您一起梳理需求，探索下一步。' },
    { question: '预算和时间还没有确定，可以吗？', answer: '预算为选填项，您也可以选择“尚未确定”。关于期望的时间安排，在留言中填写目前已知的信息即可。' },
    { question: '可以咨询现有系统的改进或集成吗？', answer: '可以。除了新系统开发，我们也提供现有系统改进、业务自动化以及 API 和 IoT 集成服务。欢迎介绍您目前的工作流程和希望解决的问题。' },
  ] : english ? [
    { question: 'Can we talk while my idea is still taking shape?', answer: 'Absolutely. You do not need a finished specification. Tell us about the challenge you are facing or what you would like to achieve, and we will help you explore the next step.' },
    { question: 'What if my budget and timeline are not decided?', answer: 'The budget field is optional, and you can also select “Not decided yet.” Share whatever you know about your preferred timing in your message.' },
    { question: 'Can you improve or connect an existing system?', answer: 'Yes. Alongside new development, we help improve existing systems, automate business processes, and connect APIs and IoT devices. Tell us how you work today and what you would like to change.' },
  ] : japaneseQuestions
  const nextSteps = chinese ? [
    ['01', '了解您的需求', '我们的团队会认真阅读您分享的问题或想法。'],
    ['02', '展开深入沟通', '进一步了解您的背景，以及希望实现的目标。'],
    ['03', '共同探索下一步', '结合您的需求，寻找合适的方案和切实可行的第一步。'],
  ] : english ? [
    ['01', 'We read your message', 'Our team reviews the challenge or idea you share with us.'],
    ['02', 'We start a conversation', 'We learn more about your background and what you want to achieve.'],
    ['03', 'We explore a way forward', 'Together, we consider the right approach and a practical first step.'],
  ] : [
    ['01', '内容を確認', 'お寄せいただいた課題やアイデアを、担当者が確認します。'],
    ['02', '対話で深める', '背景や目指す姿について、お話を伺います。'],
    ['03', '一緒に考える', 'ご希望に合う進め方と、実現への一歩を考えます。'],
  ]
  return (
    <div className={styles.page}>
      <Header activeSection="contact" locale={locale} />
      <main id="main-content">
        <div className={styles.ambient} aria-hidden="true" />
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label={chinese ? '面包屑导航' : english ? 'Breadcrumb' : 'パンくずリスト'}><Link href={localizedPath('/', locale)}>{chinese ? '首页' : 'Home'}</Link><span>/</span><span>{chinese ? '联系我们' : english ? 'Contact' : 'お問い合わせ'}</span></nav>
          <section className={styles.workspace} aria-labelledby="contact-title">
            <div className={styles.intro}>
              <p className={styles.eyebrow}><span /> {chinese ? 'CONTACT / 联系我们' : english ? 'CONTACT / START A CONVERSATION' : 'CONTACT / お問い合わせ'}</p>
              <h1 id="contact-title">{chinese ? '下一种可能，' : english ? 'Your next possibility' : '次の可能性を、'}<br /><span>{chinese ? '从这里开始。' : english ? 'starts here.' : 'ここから。'}</span></h1>
              <p className={styles.lead}>{chinese ? '“这样的想法，能实现吗？”' : english ? '“Could we make this work?”' : '「こんなこと、できる？」が、'}<br />{chinese ? '每个新项目，都始于一个问题。' : english ? 'Every project starts with a question.' : '新しいプロジェクトのはじまり。'}</p>
              <p className={styles.description}>{chinese ? '无论是系统开发，还是业务自动化，' : english ? 'From software development to automation,' : 'システム開発も、業務の自動化も。'}<br />{chinese ? '即使只是一个尚未成形的想法，' : english ? 'from early ideas to practical solutions,' : 'まだ輪郭のないアイデアから、'}<br />{chinese ? '我们也愿与您一起迈出下一步。' : english ? 'we will help you take the next step.' : 'あなたの次の一歩を一緒につくります。'}</p>
              <ContactSignal locale={locale} />
              <div className={styles.reassurance}><span><Check size={14} aria-hidden="true" />{chinese ? '构思阶段即可咨询' : english ? 'Start with an early idea' : '構想段階からご相談いただけます'}</span><span><Check size={14} aria-hidden="true" />{chinese ? '预算和具体需求尚未确定也没关系' : english ? 'No fixed budget or specification needed' : '予算や仕様が未定でも大丈夫です'}</span></div>
              <div className={styles.introFooter}><span>{chinese ? '让想法成为现实。' : 'LET’S MAKE IT WORK.'}</span><ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" /></div>
            </div>
            <div id="contact-form-area" className={styles.composer}>
              <ContactForm locale={locale} />
            </div>
          </section>
          <section className={styles.followUp} aria-labelledby="follow-up-title">
            <div className={styles.followHeading}><p className={styles.eyebrow}><Sparkles size={12} aria-hidden="true" /> {chinese ? '留言之后' : 'AFTER YOUR MESSAGE'}</p><h2 id="follow-up-title">{chinese ? '发送之后，接下来会怎样？' : english ? 'What happens next.' : '送信した、その先へ。'}</h2></div>
            <ol className={styles.nextSteps}>{nextSteps.map(([number, title, text]) => <li key={number}><span className={styles.stepNumber}>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={17} aria-hidden="true" /></li>)}</ol>
          </section>
          <section className={styles.faqSection} aria-labelledby="faq-title">
            <div className={styles.faqHeading}><p className={styles.eyebrow}>{chinese ? '开始之前' : 'BEFORE WE START'}</p><h2 id="faq-title">{chinese ? '还有疑问？' : english ? 'A few questions,' : '気になること、'}<br />{chinese ? '我们为您解答。' : english ? 'answered.' : 'ありませんか。'}</h2><p>{chinese ? '让第一步，迈得更轻松。' : english ? 'Make your first step a little easier.' : 'はじめの一歩を、少し気軽に。'}</p><Link href={localizedPath('/services', locale)}>{chinese ? '了解我们的服务' : english ? 'Explore our services' : 'サービスについて知る'} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
            <div className={styles.questions}>{questions.map(({ question, answer }, index) => <details className={styles.question} key={question}><summary><span className={styles.questionNumber}>0{index + 1}</span><span>{question}</span><Plus size={18} strokeWidth={1.5} aria-hidden="true" /></summary><div className={styles.answer}><p>{answer}</p></div></details>)}</div>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  )
}
