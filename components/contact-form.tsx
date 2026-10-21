"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import Script from "next/script"
import { AlertCircle, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp, Handshake, LifeBuoy, MessageSquare, Pencil, Send, ShieldCheck, Sparkles } from "lucide-react"
import { submitContactForm } from "@/lib/actions"
import styles from "./contact-form.module.css"

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      render: (container: HTMLElement, parameters: { sitekey: string; theme?: "dark" | "light" }) => number
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
    }
  }
}

const inquiryOptions = [
  { value: "サービスに関するご相談", title: "サービスのご相談", description: "アイデアを、具体的な一歩へ。", icon: Sparkles },
  { value: "お見積もり依頼", title: "お見積もり", description: "規模や費用を、まず知りたい。", icon: MessageSquare },
  { value: "技術サポート", title: "技術サポート", description: "技術的なお困りごとの解決に。", icon: LifeBuoy },
  { value: "パートナーシップ", title: "パートナーシップ", description: "ともに、新しい可能性を。", icon: Handshake },
  { value: "その他", title: "その他のご相談", description: "どんなことでも、お聞かせください。", icon: CircleHelp },
] as const
const budgetOptions = ["100万円未満", "100万円〜500万円", "500万円〜1,000万円", "1,000万円以上", "未定"]
const steps = ["ご相談の種類", "ご相談の内容", "連絡先・確認"]
const initialValues = { inquiryType: "", budget: "", message: "", name: "", company: "", email: "", phone: "" }
type FormValues = typeof initialValues
type FieldName = keyof FormValues
type FieldErrors = Partial<Record<FieldName, string>>
type FormMessage = { type: "success" | "error"; text: string }

function validateStep(values: FormValues, step: number): FieldErrors {
  if (step === 0) return values.inquiryType ? {} : { inquiryType: "ご相談の種類を選択してください。" }
  if (step === 1) return values.message.trim() ? {} : { message: "ご相談の内容を入力してください。" }
  const errors: FieldErrors = {}
  if (!values.name.trim()) errors.name = "お名前を入力してください。"
  if (!values.email.trim()) errors.email = "メールアドレスを入力してください。"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "メールアドレスの形式をご確認ください。"
  return errors
}

export default function ContactForm() {
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
        captchaIdRef.current = window.grecaptcha.render(captchaRef.current, { sitekey: siteKey, theme: "dark" })
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
        const nextErrors = validateStep(values, index)
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
      const nextErrors = validateStep(values, index)
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
        setMessage({ type: "error", text: "認証を読み込めませんでした。通信環境をご確認のうえ、ページを再読み込みしてください。" })
        return
      }
      const token = window.grecaptcha.getResponse(captchaIdRef.current)
      if (!token) {
        setMessage({ type: "error", text: "送信の前に「私はロボットではありません」にチェックを入れてください。" })
        return
      }
      formData.set("recaptchaToken", token)
    }
    submitLockRef.current = true
    startTransition(async () => {
      try {
        const result = await submitContactForm(formData)
        if (result.success) {
          setMessage({ type: "success", text: result.message || "お問い合わせを送信しました。" })
          setIsSubmitted(true)
          setValues(initialValues)
        } else setMessage({ type: "error", text: result.error || "送信できませんでした。もう一度お試しください。" })
      } catch {
        setMessage({ type: "error", text: "送信できませんでした。通信環境をご確認のうえ、もう一度お試しください。" })
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
      {siteKey ? <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="lazyOnload" onReady={initializeCaptcha} onError={() => setCaptchaState("error")} /> : null}
      {isSubmitted ? (
        <div ref={successRef} className={styles.successPanel} role="status" tabIndex={-1}>
          <span className={styles.successIcon}><Check size={32} strokeWidth={1.5} aria-hidden="true" /></span>
          <span className={styles.eyebrow}>A NEW CONVERSATION BEGINS</span>
          <h3>メッセージを、<br />受け取りました。</h3>
          <p>{message?.text}</p><p>内容を確認のうえ、担当者よりご連絡いたします。<br />最初の一歩を、ありがとうございます。</p>
          <button className={styles.newMessage} type="button" onClick={startNewInquiry}>別のお問い合わせを送る <ArrowUpRight size={18} aria-hidden="true" /></button>
        </div>
      ) : null}
      <div hidden={isSubmitted}>
        <div className={styles.composerHeader}>
          <span className={styles.eyebrow}><span className={styles.smallMark} aria-hidden="true" /> YOUR NEXT CHAPTER</span>
          <span className={styles.stepCounter}><strong>0{step + 1}</strong><span>/ 03</span></span>
        </div>
        <nav aria-label="お問い合わせの入力ステップ" className={styles.stepNavigation}>
          <ol>{steps.map((label, index) => (
            <li key={label} className={index === step ? styles.currentStep : index < step ? styles.completedStep : ""}>
              <button type="button" disabled={index > furthestStep || isPending} aria-current={index === step ? "step" : undefined} onClick={() => navigateToStep(index)}><span className={styles.stepNumber}>{index < step ? <Check size={12} aria-hidden="true" /> : `0${index + 1}`}</span><span>{label}</span></button>
              <span className={styles.stepTrack} aria-hidden="true" />
            </li>
          ))}</ol>
        </nav>
        <form ref={formRef} id="contact-form" className={styles.form} noValidate aria-busy={isPending} onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
          <fieldset className={styles.fieldset} disabled={isPending}>
            <legend className={styles.srOnly}>お問い合わせ内容を3つのステップで入力</legend>
            <section className={styles.stepPanel} hidden={step !== 0} aria-labelledby="contact-step-title-0">
              <div className={styles.stageHeading}><h3 id="contact-step-title-0" tabIndex={-1}>まずは、どんなご相談ですか。</h3><p>いちばん近いものを、お選びください。<span className={styles.required}>必須</span></p></div>
              <fieldset className={styles.choiceFieldset} aria-describedby={errors.inquiryType ? "contact-inquiry-error" : undefined}>
                <legend className={styles.srOnly}>ご相談の種類（必須）</legend>
                <div className={styles.inquiryGrid}>{inquiryOptions.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <label key={option.value} className={`${styles.inquiryCard} ${values.inquiryType === option.value ? styles.selectedCard : ""}`}>
                      <input id={`contact-inquiry-${index}`} type="radio" name="inquiryType" value={option.value} checked={values.inquiryType === option.value} onChange={(event) => updateField("inquiryType", event.target.value)} required aria-invalid={Boolean(errors.inquiryType)} aria-describedby={errors.inquiryType ? "contact-inquiry-error" : undefined} />
                      <span className={styles.cardIcon}><Icon size={20} strokeWidth={1.4} aria-hidden="true" /></span>
                      <span className={styles.cardCopy}><strong>{option.title}</strong><small>{option.description}</small></span>
                      <span className={styles.cardCheck} aria-hidden="true">{values.inquiryType === option.value ? <Check size={11} strokeWidth={2.5} /> : null}</span>
                    </label>
                  )
                })}</div>
                {errors.inquiryType ? <p id="contact-inquiry-error" className={styles.fieldError}><AlertCircle size={14} aria-hidden="true" />{errors.inquiryType}</p> : null}
              </fieldset>
              <fieldset className={styles.budgetFieldset}>
                <legend>ご予算の目安 <small>任意</small></legend><p className={styles.budgetHint}>まだ決まっていなくても、大丈夫です。</p>
                <div className={styles.budgetChips}>
                  <label className={`${styles.budgetChip} ${!values.budget ? styles.selectedChip : ""}`}><input type="radio" name="budget" value="" checked={!values.budget} onChange={() => updateField("budget", "")} /><span>指定しない</span></label>
                  {budgetOptions.map((budget) => <label key={budget} className={`${styles.budgetChip} ${values.budget === budget ? styles.selectedChip : ""}`}><input type="radio" name="budget" value={budget} checked={values.budget === budget} onChange={(event) => updateField("budget", event.target.value)} /><span>{budget}</span></label>)}
                </div>
              </fieldset>
            </section>
            <section className={styles.stepPanel} hidden={step !== 1} aria-labelledby="contact-step-title-1">
              <div className={styles.stageHeading}><h3 id="contact-step-title-1" tabIndex={-1}>思い描くことを、お聞かせください。</h3><p>アイデアの段階でも、お気軽にどうぞ。</p></div>
              <div className={styles.contextPill}><MessageSquare size={13} aria-hidden="true" /><span>{values.inquiryType || "ご相談の内容"}</span><button type="button" onClick={() => navigateToStep(0)} aria-label="ご相談の種類を変更"><Pencil size={13} aria-hidden="true" /></button></div>
              <div className={styles.field}>
                <label htmlFor="contact-message">ご相談の内容 <span className={styles.required}>必須</span></label>
                <div className={`${styles.editor} ${errors.message ? styles.invalidEditor : ""}`}>
                  <div className={styles.editorTopline}><span><Pencil size={12} aria-hidden="true" /> MESSAGE</span><span>自由な言葉で。</span></div>
                  <textarea id="contact-message" name="message" value={values.message} onChange={(event) => updateField("message", event.target.value)} rows={9} maxLength={3000} placeholder={"実現したいこと、解決したいことを教えてください。\n\nたとえば…\n・新しいサービスの開発を相談したい\n・今使っているシステムを改善したい\n・IoTを活用したアイデアを形にしたい"} required aria-invalid={Boolean(errors.message)} aria-describedby={`contact-message-hint${errors.message ? " contact-message-error" : ""}`} />
                  <div className={styles.editorFooter}><span>詳しい仕様がなくても大丈夫です。</span><span><strong>{values.message.length.toLocaleString()}</strong> / 3,000</span></div>
                </div>
                {errors.message ? <p id="contact-message-error" className={styles.fieldError}><AlertCircle size={14} aria-hidden="true" />{errors.message}</p> : null}
                <p id="contact-message-hint" className={styles.fieldHint}>ご希望の時期や現在の状況など、決まっている範囲でご記入ください。</p>
              </div>
              <div className={styles.messageNote}><span className={styles.noteLine} aria-hidden="true" /><p>まだ、うまく言葉にならなくても。<br /><strong>そこから一緒に考えます。</strong></p></div>
            </section>
            <section className={styles.stepPanel} hidden={step !== 2} aria-labelledby="contact-step-title-2">
              <div className={styles.stageHeading}><h3 id="contact-step-title-2" tabIndex={-1}>最後に、ご連絡先を。</h3><p>内容を確認のうえ、お問い合わせを送信してください。</p></div>
              <div className={styles.fieldsRow}>
                <div className={styles.field}><label htmlFor="contact-name">お名前 <span className={styles.required}>必須</span></label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="山田 太郎" value={values.name} onChange={(event) => updateField("name", event.target.value)} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name ? <p id="contact-name-error" className={styles.fieldError}>{errors.name}</p> : null}</div>
                <div className={styles.field}><label htmlFor="contact-company">会社名 <small>任意</small></label><input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="株式会社サンプル" value={values.company} onChange={(event) => updateField("company", event.target.value)} /></div>
              </div>
              <div className={styles.field}><label htmlFor="contact-email">メールアドレス <span className={styles.required}>必須</span></label><input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="hello@example.com" value={values.email} onChange={(event) => updateField("email", event.target.value)} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : "contact-email-hint"} />{errors.email ? <p id="contact-email-error" className={styles.fieldError}>{errors.email}</p> : <p id="contact-email-hint" className={styles.fieldHint}>こちらのアドレスに、担当者よりご連絡いたします。</p>}</div>
              <div className={styles.field}><label htmlFor="contact-phone">電話番号 <small>任意</small></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="03-1234-5678" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} /></div>
              <details className={styles.review}>
                <summary><span><Check size={15} aria-hidden="true" />入力したご相談の内容</span><ChevronDown size={15} aria-hidden="true" /></summary>
                <div className={styles.reviewBody}>
                  <div className={styles.reviewLabel}><span>ご相談の種類</span><button type="button" onClick={() => navigateToStep(0)}>変更 <Pencil size={11} aria-hidden="true" /></button></div><p>{values.inquiryType}</p>
                  <div className={styles.reviewLabel}><span>ご予算の目安</span></div><p>{values.budget || "指定なし"}</p>
                  <div className={styles.reviewLabel}><span>ご相談の内容</span><button type="button" onClick={() => navigateToStep(1)}>変更 <Pencil size={11} aria-hidden="true" /></button></div><p className={styles.reviewMessage}>{values.message}</p>
                </div>
              </details>
              {siteKey ? <div className={styles.recaptcha}><div ref={captchaRef} />{captchaState === "error" ? <p className={styles.fieldError}>認証を読み込めませんでした。ページを再読み込みしてください。</p> : null}</div> : null}
              <p className={styles.privacyNote}><ShieldCheck size={15} aria-hidden="true" /><span>ご入力いただいた情報は、お問い合わせへの対応に使用します。</span></p>
            </section>
          </fieldset>
          {message?.type === "error" ? <div ref={messageRef} className={styles.errorMessage} role="alert" tabIndex={-1}><AlertCircle size={18} aria-hidden="true" /><p>{message.text}</p></div> : null}
          <div className={styles.formFooter}>
            {step > 0 ? <button type="button" className={styles.backButton} onClick={() => navigateToStep(step - 1)} disabled={isPending}><ArrowLeft size={16} aria-hidden="true" /> 戻る</button> : <span className={styles.footerHint}>あなたの構想が、ここから動き出す。</span>}
            <button type="submit" className={`${styles.nextButton} ${step === 2 ? styles.sendButton : ""}`} disabled={isPending}><span>{isPending ? "送信しています…" : step === 0 ? "ご相談の内容へ" : step === 1 ? "連絡先の入力へ" : "お問い合わせを送信"}</span><span className={styles.buttonIcon}>{step === 2 ? <Send size={16} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}</span></button>
          </div>
          <span className={styles.srOnly} role="status" aria-live="polite">{isPending ? "お問い合わせを送信しています。" : ""}</span>
        </form>
      </div>
    </div>
  )
}
