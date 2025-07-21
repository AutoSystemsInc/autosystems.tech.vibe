'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from '@/lib/actions'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage(null)

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'お問い合わせを送信しました' })
        // フォームをリセット
        const form = document.getElementById('contact-form') as HTMLFormElement
        form?.reset()
      } else {
        setMessage({ type: 'error', text: result.error || 'エラーが発生しました' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'エラーが発生しました。もう一度お試しください。' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-slate-700/50 border-slate-600">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <MessageSquare className="h-6 w-6 text-amber-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">お問い合わせフォーム</h2>
        </div>

        {message && (
          <div className={`p-4 rounded-lg mb-6 flex items-center ${
            message.type === 'success' 
              ? 'bg-green-900/50 border border-green-600 text-green-300'
              : 'bg-red-900/50 border border-red-600 text-red-300'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            {message.text}
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">お名前 *</label>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="山田太郎"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">会社名</label>
              <input
                name="company"
                type="text"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="株式会社サンプル"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">メールアドレス *</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">電話番号</label>
              <input
                name="phone"
                type="tel"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="03-1234-5678"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">お問い合わせ種別 *</label>
            <select
              name="inquiryType"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
              required
            >
              <option value="">選択してください</option>
              <option value="サービスに関するご相談">サービスに関するご相談</option>
              <option value="お見積もり依頼">お見積もり依頼</option>
              <option value="技術サポート">技術サポート</option>
              <option value="パートナーシップ">パートナーシップ</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">予算規模</label>
            <select
              name="budget"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
            >
              <option value="">選択してください</option>
              <option value="100万円未満">100万円未満</option>
              <option value="100万円〜500万円">100万円〜500万円</option>
              <option value="500万円〜1,000万円">500万円〜1,000万円</option>
              <option value="1,000万円以上">1,000万円以上</option>
              <option value="未定">未定</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">メッセージ *</label>
            <textarea
              name="message"
              rows={6}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
              placeholder="プロジェクトの詳細、ご要望、ご質問などをお聞かせください"
              required
            ></textarea>
          </div>

          {/*<div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 w-4 h-4 text-amber-400 bg-slate-800 border-slate-600 rounded focus:ring-amber-400"
              required
            />
            <label htmlFor="privacy" className="text-slate-300 text-sm">
              <a href="#" className="text-amber-400 hover:underline">
                プライバシーポリシー
              </a>
              に同意します *
            </label>
          </div>*/}

          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                送信中...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                送信する
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 