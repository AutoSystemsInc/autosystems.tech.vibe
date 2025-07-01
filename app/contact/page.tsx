import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">AutoSystems, Inc.</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/#about"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  ABOUT
                </Link>
                <Link
                  href="/#skills"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  SKILL
                </Link>
                <Link
                  href="/#services"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  SERVICES
                </Link>
                <Link href="/#contact" className="text-amber-400 px-3 py-2 text-sm font-medium">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-white mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                戻る
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge variant="outline" className="border-amber-400 text-amber-400 bg-amber-400/10 mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">お問い合わせ</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              プロジェクトのご相談、サービスに関するご質問など、
              お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-amber-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">お問い合わせフォーム</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">お名前 *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                        placeholder="山田太郎"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">会社名</label>
                      <input
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
                        type="email"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">電話番号</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                        placeholder="03-1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">お問い合わせ種別 *</label>
                    <select
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="consultation">サービスに関するご相談</option>
                      <option value="quote">お見積もり依頼</option>
                      <option value="support">技術サポート</option>
                      <option value="partnership">パートナーシップ</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">予算規模</label>
                    <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors">
                      <option value="">選択してください</option>
                      <option value="under-1m">100万円未満</option>
                      <option value="1m-5m">100万円〜500万円</option>
                      <option value="5m-10m">500万円〜1,000万円</option>
                      <option value="over-10m">1,000万円以上</option>
                      <option value="undecided">未定</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">メッセージ *</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      placeholder="プロジェクトの詳細、ご要望、ご質問などをお聞かせください"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
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
                  </div>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">お問い合わせ先</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">メール</h3>
                        <p className="text-slate-300">contact@autosystems.tech</p>
                        <p className="text-slate-400 text-sm">営業時間内に返信いたします</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">電話</h3>
                        <p className="text-slate-300">03-1234-5678</p>
                        <p className="text-slate-400 text-sm">平日 9:00-18:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">本社</h3>
                        <p className="text-slate-300">〒150-0013</p>
                        <p className="text-slate-300">東京都渋谷区恵比寿1-1-1</p>
                        <p className="text-slate-300">恵比寿ガーデンプレイス 20F</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">営業時間</h3>
                        <p className="text-slate-300">平日 9:00-18:00</p>
                        <p className="text-slate-400 text-sm">土日祝日は休業</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">よくあるご質問</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Q. 相談は無料ですか？</h4>
                      <p className="text-slate-300 text-sm">
                        A. はい、初回相談は無料です。お気軽にお問い合わせください。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Q. 小規模なプロジェクトでも対応可能ですか？</h4>
                      <p className="text-slate-300 text-sm">A. 規模に関わらず対応いたします。まずはご相談ください。</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Q. 見積もりにはどのくらい時間がかかりますか？</h4>
                      <p className="text-slate-300 text-sm">A. 通常1-2営業日でお見積もりをご提示いたします。</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">オフィス所在地</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "東京本社",
                address: "〒150-0013\n東京都渋谷区恵比寿1-1-1\n恵比寿ガーデンプレイス 20F",
                phone: "03-1234-5678",
                access: "JR恵比寿駅 徒歩5分",
              },
              {
                name: "大阪支社",
                address: "〒530-0001\n大阪府大阪市北区梅田2-2-2\n梅田スカイビル 15F",
                phone: "06-1234-5678",
                access: "JR大阪駅 徒歩10分",
              },
              {
                name: "シンガポール支社",
                address: "1 Raffles Place\n#20-61 One Raffles Place\nSingapore 048616",
                phone: "+65-1234-5678",
                access: "Raffles Place MRT Station",
              },
            ].map((office, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-300 whitespace-pre-line">{office.address}</p>
                    </div>
                    <div>
                      <p className="text-slate-300">TEL: {office.phone}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{office.access}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">AutoSystems, Inc.</h3>
            <p className="text-slate-400">© 2024 AutoSystems, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
