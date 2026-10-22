"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import Script from "next/script"
import { AlertCircle, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp, Handshake, LifeBuoy, MessageSquare, Pencil, Send, ShieldCheck, Sparkles } from "lucide-react"
import { submitContactForm } from "@/lib/actions"
import type { Locale } from "@/lib/i18n"
import styles from "./contact-form.module.css"

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      render: (container: HTMLElement, parameters: { sitekey: string; theme?: "dark" | "light"; hl?: string }) => number
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
    }
  }
}

const inquiryOptions = [
  { value: "サービスに関するご相談", title: { ja: "サービスのご相談", en: "Project consultation", zh: "项目咨询" }, description: { ja: "アイデアを、具体的な一歩へ。", en: "Turn an idea into a first step.", zh: "让想法迈出切实的第一步。" }, icon: Sparkles },
  { value: "お見積もり依頼", title: { ja: "お見積もり", en: "Request an estimate", zh: "获取报价" }, description: { ja: "規模や費用を、まず知りたい。", en: "Explore the scope and cost.", zh: "了解项目规模与所需费用。" }, icon: MessageSquare },
  { value: "技術サポート", title: { ja: "技術サポート", en: "Technical support", zh: "技术支持" }, description: { ja: "技術的なお困りごとの解決に。", en: "Find a way through a technical challenge.", zh: "一起解决您遇到的技术难题。" }, icon: LifeBuoy },
  { value: "パートナーシップ", title: { ja: "パートナーシップ", en: "Partnerships", zh: "合作洽谈" }, description: { ja: "ともに、新しい可能性を。", en: "Build new possibilities together.", zh: "携手创造新的可能。" }, icon: Handshake },
  { value: "その他", title: { ja: "その他のご相談", en: "Something else", zh: "其他咨询" }, description: { ja: "どんなことでも、お聞かせください。", en: "Tell us what you have in mind.", zh: "欢迎与我们分享您的想法。" }, icon: CircleHelp },
] as const
const budgetOptions = [
  { value: "100万円未満", en: "Under JPY 1 million", zh: "不足100万日元（JPY）" },
  { value: "100万円〜500万円", en: "JPY 1–5 million", zh: "100万–500万日元（JPY）" },
  { value: "500万円〜1,000万円", en: "JPY 5–10 million", zh: "500万–1,000万日元（JPY）" },
  { value: "1,000万円以上", en: "JPY 10 million or more", zh: "1,000万日元及以上（JPY）" },
  { value: "未定", en: "Not decided yet", zh: "尚未确定" },
]
const copy = {
  ja: {
    steps: ["ご相談の種類", "ご相談の内容", "連絡先・確認"], required: "必須", optional: "任意",
    inquiryRequired: "ご相談の種類を選択してください。", messageRequired: "ご相談の内容を入力してください。", nameRequired: "お名前を入力してください。", emailRequired: "メールアドレスを入力してください。", emailInvalid: "メールアドレスの形式をご確認ください。",
    captchaLoadError: "認証を読み込めませんでした。通信環境をご確認のうえ、ページを再読み込みしてください。", captchaRequired: "送信の前に「私はロボットではありません」にチェックを入れてください。", sent: "お問い合わせを送信しました。", sendError: "送信できませんでした。もう一度お試しください。", networkError: "送信できませんでした。通信環境をご確認のうえ、もう一度お試しください。",
    successTitle: ["メッセージを、", "受け取りました。"], successBody: ["内容を確認のうえ、担当者よりご連絡いたします。", "最初の一歩を、ありがとうございます。"], newInquiry: "別のお問い合わせを送る", navigation: "お問い合わせの入力ステップ", legend: "お問い合わせ内容を3つのステップで入力",
    topicTitle: "まずは、どんなご相談ですか。", topicHelp: "いちばん近いものを、お選びください。", topicLegend: "ご相談の種類（必須）", budget: "ご予算の目安", budgetHint: "まだ決まっていなくても、大丈夫です。", noPreference: "指定しない", unspecified: "指定なし",
    messageTitle: "思い描くことを、お聞かせください。", messageHelp: "アイデアの段階でも、お気軽にどうぞ。", messageLabel: "ご相談の内容", changeTopic: "ご相談の種類を変更", ownWords: "自由な言葉で。", messagePlaceholder: "実現したいこと、解決したいことを教えてください。\n\nたとえば…\n・新しいサービスの開発を相談したい\n・今使っているシステムを改善したい\n・IoTを活用したアイデアを形にしたい", noSpecs: "詳しい仕様がなくても大丈夫です。", messageHint: "ご希望の時期や現在の状況など、決まっている範囲でご記入ください。", messageNote: ["まだ、うまく言葉にならなくても。", "そこから一緒に考えます。"],
    detailsTitle: "最後に、ご連絡先を。", detailsHelp: "内容を確認のうえ、お問い合わせを送信してください。", name: "お名前", namePlaceholder: "山田 太郎", company: "会社名", companyPlaceholder: "株式会社サンプル", email: "メールアドレス", emailHint: "こちらのアドレスに、担当者よりご連絡いたします。", phone: "電話番号", phonePlaceholder: "03-1234-5678", review: "入力したご相談の内容", topic: "ご相談の種類", edit: "変更", privacy: "ご入力いただいた情報は、お問い合わせへの対応に使用します。", back: "戻る", footerHint: "あなたの構想が、ここから動き出す。", sending: "送信しています…", nextMessage: "ご相談の内容へ", nextDetails: "連絡先の入力へ", send: "お問い合わせを送信", sendingStatus: "お問い合わせを送信しています。",
  },
  en: {
    steps: ["Topic", "Your idea", "Details & review"], required: "Required", optional: "Optional",
    inquiryRequired: "Please choose a topic.", messageRequired: "Please tell us about your inquiry.", nameRequired: "Please enter your name.", emailRequired: "Please enter your email address.", emailInvalid: "Please check the format of your email address.",
    captchaLoadError: "Verification could not load. Check your connection and reload the page.", captchaRequired: "Please check “I’m not a robot” before sending your inquiry.", sent: "Your inquiry has been sent.", sendError: "Your inquiry could not be sent. Please try again.", networkError: "Your inquiry could not be sent. Check your connection and try again.",
    successTitle: ["Your message", "is with us."], successBody: ["Our team will review your inquiry and get in touch.", "Thank you for taking the first step."], newInquiry: "Send another inquiry", navigation: "Contact form steps", legend: "Complete your inquiry in three steps",
    topicTitle: "What would you like to explore?", topicHelp: "Choose the option that fits best.", topicLegend: "Inquiry topic (required)", budget: "Estimated budget", budgetHint: "It is fine if you have not decided yet.", noPreference: "No preference", unspecified: "Not specified",
    messageTitle: "Tell us what you have in mind.", messageHelp: "An early idea is a great place to start.", messageLabel: "Your message", changeTopic: "Change inquiry topic", ownWords: "In your own words.", messagePlaceholder: "Tell us what you would like to build or solve.\n\nFor example…\n• Develop a new digital service\n• Improve a system you already use\n• Bring an IoT idea to life", noSpecs: "You do not need a detailed specification.", messageHint: "Share any timeline, current situation, or other details you already know.", messageNote: ["Still finding the right words?", "We can work it out together."],
    detailsTitle: "How can we reach you?", detailsHelp: "Review your message, then send your inquiry.", name: "Name", namePlaceholder: "Alex Smith", company: "Company", companyPlaceholder: "Example, Inc.", email: "Email address", emailHint: "Our team will reply to this address.", phone: "Phone number", phonePlaceholder: "+81 3 1234 5678", review: "Review your inquiry", topic: "Inquiry topic", edit: "Edit", privacy: "We will use the information you provide to respond to your inquiry.", back: "Back", footerHint: "Your next idea starts here.", sending: "Sending…", nextMessage: "Describe your idea", nextDetails: "Contact details", send: "Send inquiry", sendingStatus: "Sending your inquiry.",
  },
  zh: {
    steps: ["咨询类型", "咨询内容", "联系方式与确认"], required: "必填", optional: "选填",
    inquiryRequired: "请选择咨询类型。", messageRequired: "请填写咨询内容。", nameRequired: "请填写您的姓名。", emailRequired: "请填写电子邮箱。", emailInvalid: "请检查电子邮箱的格式。",
    captchaLoadError: "无法加载验证。请检查网络连接并刷新页面。", captchaRequired: "发送前，请勾选“我不是机器人”。", sent: "您的咨询已发送。", sendError: "发送失败，请重试。", networkError: "发送失败，请检查网络连接后重试。",
    successTitle: ["您的留言，", "我们已收到。"], successBody: ["我们的团队会认真阅读您的咨询，并与您联系。", "感谢您迈出第一步。"], newInquiry: "发送另一条咨询", navigation: "咨询表单填写步骤", legend: "通过三个步骤填写咨询内容",
    topicTitle: "您想咨询哪些内容？", topicHelp: "请选择最符合您需求的选项。", topicLegend: "咨询类型（必填）", budget: "预计预算", budgetHint: "尚未确定预算也没关系。", noPreference: "暂不指定", unspecified: "未指定",
    messageTitle: "请与我们分享您的想法。", messageHelp: "即使还在构思阶段，也欢迎咨询。", messageLabel: "咨询内容", changeTopic: "修改咨询类型", ownWords: "用您自己的话描述即可。", messagePlaceholder: "请告诉我们您希望实现的目标或解决的问题。\n\n例如：\n• 咨询新服务的开发\n• 改进正在使用的系统\n• 将 IoT 创意变为现实", noSpecs: "无需准备详细的需求说明。", messageHint: "请填写目前已知的期望时间、当前状况等信息。", messageNote: ["还没有想好如何表达？", "我们可以一起梳理思路。"],
    detailsTitle: "最后，请留下联系方式。", detailsHelp: "确认填写内容后，即可发送咨询。", name: "姓名", namePlaceholder: "张三", company: "公司名称", companyPlaceholder: "示例科技有限公司", email: "电子邮箱", emailHint: "我们的团队将通过此邮箱与您联系。", phone: "电话号码", phonePlaceholder: "+81 3 1234 5678", review: "确认咨询内容", topic: "咨询类型", edit: "修改", privacy: "您提供的信息仅用于回复本次咨询。", back: "返回", footerHint: "让您的下一个想法，从这里启程。", sending: "正在发送…", nextMessage: "填写咨询内容", nextDetails: "填写联系方式", send: "发送咨询", sendingStatus: "正在发送您的咨询。",
  },
} as const
const initialValues = { inquiryType: "", budget: "", message: "", name: "", company: "", email: "", phone: "" }
type FormValues = typeof initialValues
type FieldName = keyof FormValues
type FieldErrors = Partial<Record<FieldName, string>>
type FormMessage = { type: "success" | "error"; text: string }

function validateStep(values: FormValues, step: number, locale: Locale): FieldErrors {
  const t = copy[locale]
  if (step === 0) return values.inquiryType ? {} : { inquiryType: t.inquiryRequired }
  if (step === 1) return values.message.trim() ? {} : { message: t.messageRequired }
  const errors: FieldErrors = {}
  if (!values.name.trim()) errors.name = t.nameRequired
  if (!values.email.trim()) errors.email = t.emailRequired
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = t.emailInvalid
  return errors
}

export default function ContactForm({ locale = "ja" }: { locale?: Locale }) {
  const t = copy[locale]
  const steps = t.steps
  const formRef = useRef<HTMLFormElement>(null)
  const captchaRef = useRef<HTMLDivElement>(null)
  const captchaIdRef = useRef<number | null>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const submitLockRef = useRef(false)
  const [values, setValues] = useState<FormValues>(initialValues)
  const [step, setStep] = useState(0)
  const [furthestStep, setFurthestStep] = useState(0)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [focusTarget, setFocusTarget] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState<FormMessage | null>(null)
  const [captchaState, setCaptchaState] = useState<"loading" | "ready" | "error">("loading")
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const captchaLanguage = locale === "zh" ? "zh-CN" : locale
  const inquiryLabel = inquiryOptions.find((option) => option.value === values.inquiryType)?.title[locale] || t.messageLabel
  const budgetLabel = budgetOptions.find((option) => option.value === values.budget)

  useEffect(() => { if (isSubmitted) successRef.current?.focus() }, [isSubmitted])
  useEffect(() => { if (message?.type === "error") messageRef.current?.focus() }, [message])
  useEffect(() => {
    if (!focusTarget || isSubmitted) return
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(focusTarget)
      target?.focus({ preventScroll: true })
      target?.scrollIntoView({ block: "nearest", behavior: "auto" })
      setFocusTarget(null)
    })
    return () => cancelAnimationFrame(frame)
  }, [focusTarget, step, isSubmitted])

  function initializeCaptcha() {
    if (!siteKey || !window.grecaptcha) return
    window.grecaptcha.ready(() => {
      if (!captchaRef.current || captchaIdRef.current !== null || !window.grecaptcha) return
      try {
        captchaIdRef.current = window.grecaptcha.render(captchaRef.current, { sitekey: siteKey, theme: "dark", hl: captchaLanguage })
        setCaptchaState("ready")
      } catch { setCaptchaState("error") }
    })
  }
  function resetCaptcha() {
    if (window.grecaptcha && captchaIdRef.current !== null) window.grecaptcha.reset(captchaIdRef.current)
  }
  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
    if (message?.type === "error") setMessage(null)
  }
  function navigateToStep(nextStep: number) {
    if (isPending || nextStep === step) return
    if (nextStep > step) {
      for (let index = 0; index < nextStep; index++) {
        const nextErrors = validateStep(values, index, locale)
        const firstError = Object.keys(nextErrors)[0] as FieldName | undefined
        if (firstError) {
          setErrors(nextErrors)
          setStep(index)
          setFocusTarget(firstError === "inquiryType" ? "contact-inquiry-0" : `contact-${firstError}`)
          return
        }
      }
    }
    setStep(nextStep)
    setFurthestStep((current) => Math.max(current, nextStep))
    setMessage(null)
    setFocusTarget(`contact-step-title-${nextStep}`)
  }
  function handleSubmit() {
    if (submitLockRef.current || isPending || isSubmitted) return
    if (step < 2) { navigateToStep(step + 1); return }
    for (let index = 0; index < steps.length; index++) {
      const nextErrors = validateStep(values, index, locale)
      const firstError = Object.keys(nextErrors)[0] as FieldName | undefined
      if (firstError) {
        setErrors(nextErrors)
        setStep(index)
        setFocusTarget(firstError === "inquiryType" ? "contact-inquiry-0" : `contact-${firstError}`)
        return
      }
    }
    setErrors({})
    setMessage(null)
    const formData = new FormData(formRef.current!)
    for (const field of ["name", "email", "message"] as const) formData.set(field, values[field].trim())
    if (siteKey) {
      if (!window.grecaptcha || captchaIdRef.current === null || captchaState === "error") {
        setMessage({ type: "error", text: t.captchaLoadError })
        return
      }
      const token = window.grecaptcha.getResponse(captchaIdRef.current)
      if (!token) {
        setMessage({ type: "error", text: t.captchaRequired })
        return
      }
      formData.set("recaptchaToken", token)
    }
    submitLockRef.current = true
    startTransition(async () => {
      try {
        const result = await submitContactForm(formData)
        if (result.success) {
          setMessage({ type: "success", text: result.message || t.sent })
          setIsSubmitted(true)
          setValues(initialValues)
        } else setMessage({ type: "error", text: result.error || t.sendError })
      } catch {
        setMessage({ type: "error", text: t.networkError })
      } finally {
        resetCaptcha()
        submitLockRef.current = false
      }
    })
  }
  function startNewInquiry() {
    setValues(initialValues)
    setErrors({})
    setMessage(null)
    setStep(0)
    setFurthestStep(0)
    setIsSubmitted(false)
    setFocusTarget("contact-step-title-0")
    resetCaptcha()
  }

  return (
    <div className={styles.formSurface}>
      {siteKey ? <Script src={`https://www.google.com/recaptcha/api.js?render=explicit&hl=${captchaLanguage}`} strategy="lazyOnload" onReady={initializeCaptcha} onError={() => setCaptchaState("error")} /> : null}
      {isSubmitted ? (
        <div ref={successRef} className={styles.successPanel} role="status" tabIndex={-1}>
          <span className={styles.successIcon}><Check size={32} strokeWidth={1.5} aria-hidden="true" /></span>
          <span className={styles.eyebrow}>{locale === "zh" ? "一段新的对话，由此开始" : "A NEW CONVERSATION BEGINS"}</span>
          <h3>{t.successTitle[0]}<br />{t.successTitle[1]}</h3>
          <p>{message?.text}</p><p>{t.successBody[0]}<br />{t.successBody[1]}</p>
          <button className={styles.newMessage} type="button" onClick={startNewInquiry}>{t.newInquiry} <ArrowUpRight size={18} aria-hidden="true" /></button>
        </div>
      ) : null}
      <div hidden={isSubmitted}>
        <div className={styles.composerHeader}>
          <span className={styles.eyebrow}><span className={styles.smallMark} aria-hidden="true" /> {locale === "zh" ? "开启您的新篇章" : "YOUR NEXT CHAPTER"}</span>
          <span className={styles.stepCounter}><strong>0{step + 1}</strong><span>/ 03</span></span>
        </div>
        <nav aria-label={t.navigation} className={styles.stepNavigation}>
          <ol>{steps.map((label, index) => (
            <li key={label} className={index === step ? styles.currentStep : index < step ? styles.completedStep : ""}>
              <button type="button" disabled={index > furthestStep || isPending} aria-current={index === step ? "step" : undefined} onClick={() => navigateToStep(index)}><span className={styles.stepNumber}>{index < step ? <Check size={12} aria-hidden="true" /> : `0${index + 1}`}</span><span>{label}</span></button>
              <span className={styles.stepTrack} aria-hidden="true" />
            </li>
          ))}</ol>
        </nav>
        <form ref={formRef} id="contact-form" className={styles.form} noValidate aria-busy={isPending} onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
          <input type="hidden" name="locale" value={locale} />
          <fieldset className={styles.fieldset} disabled={isPending}>
            <legend className={styles.srOnly}>{t.legend}</legend>
            <section className={styles.stepPanel} hidden={step !== 0} aria-labelledby="contact-step-title-0">
              <div className={styles.stageHeading}><h3 id="contact-step-title-0" tabIndex={-1}>{t.topicTitle}</h3><p>{t.topicHelp}<span className={styles.required}>{t.required}</span></p></div>
              <fieldset className={styles.choiceFieldset} aria-describedby={errors.inquiryType ? "contact-inquiry-error" : undefined}>
                <legend className={styles.srOnly}>{t.topicLegend}</legend>
                <div className={styles.inquiryGrid}>{inquiryOptions.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <label key={option.value} className={`${styles.inquiryCard} ${values.inquiryType === option.value ? styles.selectedCard : ""}`}>
                      <input id={`contact-inquiry-${index}`} type="radio" name="inquiryType" value={option.value} checked={values.inquiryType === option.value} onChange={(event) => updateField("inquiryType", event.target.value)} required aria-invalid={Boolean(errors.inquiryType)} aria-describedby={errors.inquiryType ? "contact-inquiry-error" : undefined} />
                      <span className={styles.cardIcon}><Icon size={20} strokeWidth={1.4} aria-hidden="true" /></span>
                      <span className={styles.cardCopy}><strong>{option.title[locale]}</strong><small>{option.description[locale]}</small></span>
                      <span className={styles.cardCheck} aria-hidden="true">{values.inquiryType === option.value ? <Check size={11} strokeWidth={2.5} /> : null}</span>
                    </label>
                  )
                })}</div>
                {errors.inquiryType ? <p id="contact-inquiry-error" className={styles.fieldError}><AlertCircle size={14} aria-hidden="true" />{errors.inquiryType}</p> : null}
              </fieldset>
              <fieldset className={styles.budgetFieldset}>
                <legend>{t.budget} <small>{t.optional}</small></legend><p className={styles.budgetHint}>{t.budgetHint}</p>
                <div className={styles.budgetChips}>
                  <label className={`${styles.budgetChip} ${!values.budget ? styles.selectedChip : ""}`}><input type="radio" name="budget" value="" checked={!values.budget} onChange={() => updateField("budget", "")} /><span>{t.noPreference}</span></label>
                  {budgetOptions.map((budget) => <label key={budget.value} className={`${styles.budgetChip} ${values.budget === budget.value ? styles.selectedChip : ""}`}><input type="radio" name="budget" value={budget.value} checked={values.budget === budget.value} onChange={(event) => updateField("budget", event.target.value)} /><span>{locale === "ja" ? budget.value : budget[locale]}</span></label>)}
                </div>
              </fieldset>
            </section>
            <section className={styles.stepPanel} hidden={step !== 1} aria-labelledby="contact-step-title-1">
              <div className={styles.stageHeading}><h3 id="contact-step-title-1" tabIndex={-1}>{t.messageTitle}</h3><p>{t.messageHelp}</p></div>
              <div className={styles.contextPill}><MessageSquare size={13} aria-hidden="true" /><span>{inquiryLabel}</span><button type="button" onClick={() => navigateToStep(0)} aria-label={t.changeTopic}><Pencil size={13} aria-hidden="true" /></button></div>
              <div className={styles.field}>
                <label htmlFor="contact-message">{t.messageLabel} <span className={styles.required}>{t.required}</span></label>
                <div className={`${styles.editor} ${errors.message ? styles.invalidEditor : ""}`}>
                  <div className={styles.editorTopline}><span><Pencil size={12} aria-hidden="true" /> {locale === "zh" ? "留言" : "MESSAGE"}</span><span>{t.ownWords}</span></div>
                  <textarea id="contact-message" name="message" value={values.message} onChange={(event) => updateField("message", event.target.value)} rows={9} maxLength={3000} placeholder={t.messagePlaceholder} required aria-invalid={Boolean(errors.message)} aria-describedby={`contact-message-hint${errors.message ? " contact-message-error" : ""}`} />
                  <div className={styles.editorFooter}><span>{t.noSpecs}</span><span><strong>{values.message.length.toLocaleString(locale)}</strong> / 3,000</span></div>
                </div>
                {errors.message ? <p id="contact-message-error" className={styles.fieldError}><AlertCircle size={14} aria-hidden="true" />{errors.message}</p> : null}
                <p id="contact-message-hint" className={styles.fieldHint}>{t.messageHint}</p>
              </div>
              <div className={styles.messageNote}><span className={styles.noteLine} aria-hidden="true" /><p>{t.messageNote[0]}<br /><strong>{t.messageNote[1]}</strong></p></div>
            </section>
            <section className={styles.stepPanel} hidden={step !== 2} aria-labelledby="contact-step-title-2">
              <div className={styles.stageHeading}><h3 id="contact-step-title-2" tabIndex={-1}>{t.detailsTitle}</h3><p>{t.detailsHelp}</p></div>
              <div className={styles.fieldsRow}>
                <div className={styles.field}><label htmlFor="contact-name">{t.name} <span className={styles.required}>{t.required}</span></label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} value={values.name} onChange={(event) => updateField("name", event.target.value)} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name ? <p id="contact-name-error" className={styles.fieldError}>{errors.name}</p> : null}</div>
                <div className={styles.field}><label htmlFor="contact-company">{t.company} <small>{t.optional}</small></label><input id="contact-company" name="company" type="text" autoComplete="organization" placeholder={t.companyPlaceholder} value={values.company} onChange={(event) => updateField("company", event.target.value)} /></div>
              </div>
              <div className={styles.field}><label htmlFor="contact-email">{t.email} <span className={styles.required}>{t.required}</span></label><input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="hello@example.com" value={values.email} onChange={(event) => updateField("email", event.target.value)} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : "contact-email-hint"} />{errors.email ? <p id="contact-email-error" className={styles.fieldError}>{errors.email}</p> : <p id="contact-email-hint" className={styles.fieldHint}>{t.emailHint}</p>}</div>
              <div className={styles.field}><label htmlFor="contact-phone">{t.phone} <small>{t.optional}</small></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={t.phonePlaceholder} value={values.phone} onChange={(event) => updateField("phone", event.target.value)} /></div>
              <details className={styles.review}>
                <summary><span><Check size={15} aria-hidden="true" />{t.review}</span><ChevronDown size={15} aria-hidden="true" /></summary>
                <div className={styles.reviewBody}>
                  <div className={styles.reviewLabel}><span>{t.topic}</span><button type="button" onClick={() => navigateToStep(0)}>{t.edit} <Pencil size={11} aria-hidden="true" /></button></div><p>{inquiryLabel}</p>
                  <div className={styles.reviewLabel}><span>{t.budget}</span></div><p>{budgetLabel ? (locale === "ja" ? budgetLabel.value : budgetLabel[locale]) : t.unspecified}</p>
                  <div className={styles.reviewLabel}><span>{t.messageLabel}</span><button type="button" onClick={() => navigateToStep(1)}>{t.edit} <Pencil size={11} aria-hidden="true" /></button></div><p className={styles.reviewMessage}>{values.message}</p>
                </div>
              </details>
              {siteKey ? <div className={styles.recaptcha}><div ref={captchaRef} />{captchaState === "error" ? <p className={styles.fieldError}>{t.captchaLoadError}</p> : null}</div> : null}
              <p className={styles.privacyNote}><ShieldCheck size={15} aria-hidden="true" /><span>{t.privacy}</span></p>
            </section>
          </fieldset>
          {message?.type === "error" ? <div ref={messageRef} className={styles.errorMessage} role="alert" tabIndex={-1}><AlertCircle size={18} aria-hidden="true" /><p>{message.text}</p></div> : null}
          <div className={styles.formFooter}>
            {step > 0 ? <button type="button" className={styles.backButton} onClick={() => navigateToStep(step - 1)} disabled={isPending}><ArrowLeft size={16} aria-hidden="true" /> {t.back}</button> : <span className={styles.footerHint}>{t.footerHint}</span>}
            <button type="submit" className={`${styles.nextButton} ${step === 2 ? styles.sendButton : ""}`} disabled={isPending}><span>{isPending ? t.sending : step === 0 ? t.nextMessage : step === 1 ? t.nextDetails : t.send}</span><span className={styles.buttonIcon}>{step === 2 ? <Send size={16} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}</span></button>
          </div>
          <span className={styles.srOnly} role="status" aria-live="polite">{isPending ? t.sendingStatus : ""}</span>
        </form>
      </div>
    </div>
  )
}
