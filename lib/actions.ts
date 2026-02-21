'use server'

import nodemailer from 'nodemailer'

export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  inquiryType: string
  budget?: string
  message: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) return true // 開発時は検証をスキップ

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    })
    const json = await res.json()
    // v3: success かつ score >= 0.5 で人間と判定（0.0=ボット, 1.0=人間）
    return json.success === true && (json.score ?? 1) >= 0.5
  } catch {
    return false
  }
}

export async function submitContactForm(formData: FormData) {
  // reCAPTCHA 検証（ボット対策）
  const recaptchaToken = formData.get('recaptchaToken') as string | null
  if (process.env.RECAPTCHA_SECRET_KEY) {
    if (!recaptchaToken) {
      return { success: false, error: '認証に失敗しました。ページを再読み込みしてお試しください。' }
    }
    const isValid = await verifyRecaptcha(recaptchaToken)
    if (!isValid) {
      return { success: false, error: '認証に失敗しました。ボットの可能性があるため送信できません。' }
    }
  }

  // フォームデータを取得
  const data: ContactFormData = {
    name: formData.get('name') as string,
    company: formData.get('company') as string || '',
    email: formData.get('email') as string,
    phone: formData.get('phone') as string || '',
    inquiryType: formData.get('inquiryType') as string,
    budget: formData.get('budget') as string || '',
    message: formData.get('message') as string,
  }

  // バリデーション
  if (!data.name || !data.email || !data.inquiryType || !data.message) {
    return { success: false, error: '必須項目を入力してください' }
  }

  // メールアドレスの簡単なバリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: '有効なメールアドレスを入力してください' }
  }

  try {
    // 環境変数をチェック
    const emailConfig = {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : 587,
      secure: process.env.MAIL_SECURE === 'true', // TLS使用
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: process.env.MAIL_TO
    }

    // 必要な環境変数が設定されていない場合は開発モードとして処理
    if (!emailConfig.user || !emailConfig.pass) {
      console.log('開発モード: メール送信をシミュレート');
      console.log('フォームデータ:', data);
      console.log('必要な環境変数: MAIL_USER, MAIL_PASSWORD');
      return { success: true, message: 'お問い合わせを受け付けました（開発モード）' }
    }

    // メール送信設定
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure, // true for 465, false for other ports
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
      // 追加のオプション
      tls: {
        rejectUnauthorized: false // 開発環境用（本番では true に設定）
      }
    })

    // 管理者向けメール内容
    const adminMailOptions = {
      from: emailConfig.from || emailConfig.user,
      to: emailConfig.to,
      subject: `【お問い合わせ】${data.inquiryType} - ${data.name}様より`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>お名前:</strong> ${data.name}</p>
        <p><strong>会社名:</strong> ${data.company || 'なし'}</p>
        <p><strong>メールアドレス:</strong> ${data.email}</p>
        <p><strong>電話番号:</strong> ${data.phone || 'なし'}</p>
        <p><strong>お問い合わせ種別:</strong> ${data.inquiryType}</p>
        <p><strong>予算規模:</strong> ${data.budget || 'なし'}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>送信日時: ${new Date().toLocaleString('ja-JP')}</small></p>
      `,
    }

    // お客様向け自動返信メール内容
    const customerMailOptions = {
      from: emailConfig.from || emailConfig.user,
      to: data.email,
      subject: 'お問い合わせありがとうございます - AutoSystems株式会社',
      html: `
        <h2>${data.name}様</h2>
        <p>この度は、AutoSystems株式会社にお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けいたしました。</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <p><strong>お名前:</strong> ${data.name}</p>
          <p><strong>会社名:</strong> ${data.company || 'なし'}</p>
          <p><strong>メールアドレス:</strong> ${data.email}</p>
          <p><strong>お問い合わせ種別:</strong> ${data.inquiryType}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <hr>
        <p>AutoSystems株式会社<br>
        〒101-0021 東京都千代田区外神田2-10-6宮本ビル3-A</p>
      `,
    }

    // メール送信
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(customerMailOptions)

    return { success: true, message: 'お問い合わせを送信しました' }
  } catch (error) {
    console.error('メール送信エラー:', error)
    return { success: false, error: 'メール送信に失敗しました。しばらく経ってから再度お試しください。' }
  }
} 