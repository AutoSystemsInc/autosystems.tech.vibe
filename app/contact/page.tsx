import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Check, Plus, Sparkles } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import ContactSignal from '@/components/contact-signal'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'システム開発、業務の自動化、IoT、新しいプロジェクトのご相談。AutoSystemsと、次の可能性を一緒につくりませんか。',
}

const questions = [
  { question: 'まだアイデアの段階でも相談できますか？', answer: 'もちろんです。仕様がまとまっていなくても、いま感じている課題や、実現してみたいことをお聞かせください。課題の整理から一緒に考えます。' },
  { question: '予算や時期はまだ決まっていません。', answer: '予算の選択は任意です。「未定」を選ぶこともできます。ご希望の時期も、いま分かる範囲でメッセージに添えていただければ大丈夫です。' },
  { question: '既存システムの改善や連携も相談できますか？', answer: 'はい。新規開発のほか、既存システムの改善、業務の自動化、API・IoT連携についてもご相談いただけます。現在の運用や、お困りの点をお聞かせください。' },
]

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Header activeSection="contact" />
      <main id="main-content">
        <div className={styles.ambient} aria-hidden="true" />
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="パンくずリスト"><Link href="/">Home</Link><span>/</span><span>お問い合わせ</span></nav>
          <section className={styles.workspace} aria-labelledby="contact-title">
            <div className={styles.intro}>
              <p className={styles.eyebrow}><span /> CONTACT / お問い合わせ</p>
              <h1 id="contact-title">次の可能性を、<br /><span>ここから。</span></h1>
              <p className={styles.lead}>「こんなこと、できる？」が、<br />新しいプロジェクトのはじまり。</p>
              <p className={styles.description}>システム開発も、業務の自動化も。<br />まだ輪郭のないアイデアから、<br />あなたの次の一歩を一緒につくります。</p>
              <ContactSignal />
              <div className={styles.reassurance}><span><Check size={14} aria-hidden="true" />構想段階からご相談いただけます</span><span><Check size={14} aria-hidden="true" />予算や仕様が未定でも大丈夫です</span></div>
              <div className={styles.introFooter}><span>LET’S MAKE IT WORK.</span><ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" /></div>
            </div>
            <div id="contact-form-area" className={styles.composer}>
              <ContactForm />
            </div>
          </section>
          <section className={styles.followUp} aria-labelledby="follow-up-title">
            <div className={styles.followHeading}><p className={styles.eyebrow}><Sparkles size={12} aria-hidden="true" /> AFTER YOUR MESSAGE</p><h2 id="follow-up-title">送信した、その先へ。</h2></div>
            <ol className={styles.nextSteps}>{[
              ['01', '内容を確認', 'お寄せいただいた課題やアイデアを、担当者が確認します。'],
              ['02', '対話で深める', '背景や目指す姿について、お話を伺います。'],
              ['03', '一緒に考える', 'ご希望に合う進め方と、実現への一歩を考えます。'],
            ].map(([number, title, text]) => <li key={number}><span className={styles.stepNumber}>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={17} aria-hidden="true" /></li>)}</ol>
          </section>
          <section className={styles.faqSection} aria-labelledby="faq-title">
            <div className={styles.faqHeading}><p className={styles.eyebrow}>BEFORE WE START</p><h2 id="faq-title">気になること、<br />ありませんか。</h2><p>はじめの一歩を、少し気軽に。</p><Link href="/services">サービスについて知る <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
            <div className={styles.questions}>{questions.map(({ question, answer }, index) => <details className={styles.question} key={question}><summary><span className={styles.questionNumber}>0{index + 1}</span><span>{question}</span><Plus size={18} strokeWidth={1.5} aria-hidden="true" /></summary><div className={styles.answer}><p>{answer}</p></div></details>)}</div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
