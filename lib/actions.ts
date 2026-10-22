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
    // v2: success で人間と判定（チェックボックス完了時）
    return json.success === true
  } catch {
    return false
  }
}

export async function submitContactForm(formData: FormData) {
  // Form data is untrusted: accept only exact supported locale values.
  const submittedLocale = formData.get('locale')
  const locale = submittedLocale === 'en' || submittedLocale === 'zh' ? submittedLocale : 'ja'
  const english = locale === 'en'
  const chinese = locale === 'zh'
  const responses = chinese ? {
    verificationMissing: '验证失败，请刷新页面后重试。',
    verificationFailed: '验证失败，请完成人机验证后重试。',
    required: '请填写所有必填项。',
    email: '请输入有效的电子邮箱。',
    development: '已收到您的咨询（开发模式）。',
    sent: '您的咨询已发送。',
    failed: '发送失败，请稍后重试。',
  } : english ? {
    verificationMissing: 'Verification failed. Reload the page and try again.',
    verificationFailed: 'Verification failed. Please complete the human verification and try again.',
    required: 'Please complete all required fields.',
    email: 'Please enter a valid email address.',
    development: 'Your inquiry was received (development mode).',
    sent: 'Your inquiry has been sent.',
    failed: 'Your inquiry could not be sent. Please wait a moment and try again.',
  } : {
    verificationMissing: '認証に失敗しました。ページを再読み込みしてお試しください。',
    verificationFailed: '認証に失敗しました。ボットの可能性があるため送信できません。',
    required: '必須項目を入力してください',
    email: '有効なメールアドレスを入力してください',
    development: 'お問い合わせを受け付けました（開発モード）',
    sent: 'お問い合わせを送信しました',
    failed: 'メール送信に失敗しました。しばらく経ってから再度お試しください。',
  }
  // reCAPTCHA 検証（ボット対策）
  const recaptchaToken = formData.get('recaptchaToken') as string | null
  if (process.env.RECAPTCHA_SECRET_KEY) {
    if (!recaptchaToken) {
      return { success: false, error: responses.verificationMissing }
    }
    const isValid = await verifyRecaptcha(recaptchaToken)
    if (!isValid) {
      return { success: false, error: responses.verificationFailed }
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
    return { success: false, error: responses.required }
  }

  // メールアドレスの簡単なバリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: responses.email }
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
      return { success: true, message: responses.development }
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
    const englishTopics: Record<string, string> = {
      'サービスに関するご相談': 'Project consultation',
      'お見積もり依頼': 'Request an estimate',
      '技術サポート': 'Technical support',
      'パートナーシップ': 'Partnerships',
      'その他': 'Something else',
    }
    const chineseTopics: Record<string, string> = {
      'サービスに関するご相談': '项目咨询',
      'お見積もり依頼': '获取报价',
      '技術サポート': '技术支持',
      'パートナーシップ': '合作洽谈',
      'その他': '其他咨询',
    }
    const customerMailOptions = {
      from: emailConfig.from || emailConfig.user,
      to: data.email,
      subject: chinese ? '感谢您联系 AutoSystems, Inc.' : english ? 'Thank you for contacting AutoSystems, Inc.' : 'お問い合わせありがとうございます - AutoSystems株式会社',
      html: chinese ? `
        <h2>${data.name}，您好：</h2>
        <p>感谢您联系 AutoSystems, Inc.。</p>
        <p>我们已收到您的咨询，具体内容如下。</p>
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <p><strong>姓名：</strong> ${data.name}</p>
          <p><strong>公司名称：</strong> ${data.company || '未指定'}</p>
          <p><strong>电子邮箱：</strong> ${data.email}</p>
          <p><strong>咨询类型：</strong> ${chineseTopics[data.inquiryType] || data.inquiryType}</p>
          <p><strong>咨询内容：</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr>
        <p>AutoSystems, Inc.<br>
        日本东京都千代田区外神田 2-10-6 宫本大厦 3-A，邮编 101-0021</p>
      ` : english ? `
        <h2>Hello ${data.name},</h2>
        <p>Thank you for contacting AutoSystems, Inc.</p>
        <p>We have received your inquiry with the details below.</p>
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company || 'Not specified'}</p>
          <p><strong>Email address:</strong> ${data.email}</p>
          <p><strong>Inquiry topic:</strong> ${englishTopics[data.inquiryType] || data.inquiryType}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr>
        <p>AutoSystems, Inc.<br>
        Miyamoto Building 3-A, 2-10-6 Sotokanda, Chiyoda-ku, Tokyo 101-0021, Japan</p>
      ` : `
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

    return { success: true, message: responses.sent }
  } catch (error) {
    console.error('メール送信エラー:', error)
    return { success: false, error: responses.failed }
  }
} 
