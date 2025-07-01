import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Zap, Users, Target, Mail, Phone, MapPin, Github, Twitter, Linkedin, Cpu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">AutoSystems, Inc.</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  SKILL
                </a>
                <a
                  href="#services"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-amber-400 text-amber-400 bg-amber-400/10">
              Innovation in Automation
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">AutoSystemsの使命は</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                世界中のシステムを自動化し、
              </span>
              <span className="block">世界中の人がアクセスできて</span>
              <span className="block">使えるようにすることです。</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              私たちは最先端の技術を駆使して、複雑なシステムをシンプルで使いやすいソリューションに変革します。
              グローバルなアクセシビリティと革新的な自動化で、未来を創造します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg">
                お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg bg-transparent"
                >
                  サービス詳細
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ABOUT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AutoSystems, Inc.は、システム自動化のパイオニアとして、
              世界中の企業や個人に革新的なソリューションを提供しています。
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">グローバル展開</h3>
                <p className="text-slate-300">
                  世界中のクライアントに対応し、多様な文化や言語に配慮したソリューションを提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">革新的技術</h3>
                <p className="text-slate-300">
                  AI、機械学習、クラウド技術を活用した最先端の自動化ソリューションを開発しています。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">ユーザー中心</h3>
                <p className="text-slate-300">
                  使いやすさとアクセシビリティを重視し、すべての人が利用できるシステムを構築します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">SKILLS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AI & Machine Learning", level: 95 },
              { name: "Cloud Architecture", level: 90 },
              { name: "System Integration", level: 88 },
              { name: "Process Automation", level: 92 },
              { name: "Data Analytics", level: 85 },
              { name: "DevOps", level: 87 },
              { name: "Cybersecurity", level: 83 },
              { name: "UI/UX Design", level: 80 },
            ].map((skill, index) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-slate-300 text-sm mt-2 block">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">SERVICES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <div className="mt-8">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                >
                  全サービスを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-amber-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">システム自動化コンサルティング</h3>
                <p className="text-slate-300 mb-6">
                  既存のビジネスプロセスを分析し、最適な自動化戦略を提案します。
                  ROIを最大化する効率的なソリューションを設計・実装します。
                </p>
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                >
                  詳細を見る
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">カスタムソフトウェア開発</h3>
                <p className="text-slate-300 mb-6">
                  お客様の特定のニーズに合わせたオーダーメイドのソフトウェアソリューションを開発します。
                  スケーラブルで保守性の高いシステムを構築します。
                </p>
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                >
                  詳細を見る
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <Cpu className="h-12 w-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">IoTデバイス開発</h3>
                <p className="text-slate-300 mb-6">
                  センサーからクラウドまで、包括的なIoTソリューションを開発します。
                  リアルタイムデータ収集と分析で新たな価値を創造します。
                </p>
                <Link href="/services/iot">
                  <Button
                    variant="outline"
                    className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white bg-transparent"
                  >
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">CONTACT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300">プロジェクトについてお気軽にご相談ください</p>
            <div className="mt-8">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                >
                  詳細なお問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-slate-300">contact@autosystems.tech</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-slate-300">+81-3-1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-slate-300">東京都渋谷区恵比寿1-1-1</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-8">
                <Button size="icon" variant="outline" className="border-slate-600 hover:bg-slate-700 bg-transparent">
                  <Github className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="border-slate-600 hover:bg-slate-700 bg-transparent">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="border-slate-600 hover:bg-slate-700 bg-transparent">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">お名前</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">メールアドレス</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">メッセージ</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400"
                      placeholder="お問い合わせ内容をご記入ください"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3">
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
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
