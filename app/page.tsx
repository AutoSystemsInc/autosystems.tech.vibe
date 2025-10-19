import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Zap, Users, Target, Mail, Phone, MapPin, Github, Twitter, Linkedin, Cpu } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">AutoSystemsの使命は、</span>
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
              <Link href="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg">
                お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg bg-transparent"
                >
                  私たちについて
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </section>

      {/* Development Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">MVPファーストの開発プロセス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              最小限の機能で最大の価値を提供し、お客様のリスクを最小化する開発手法
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">ヒアリング</h3>
              <p className="text-slate-300 text-sm">
                お客様の課題やご要望を詳細にお伺いし、最適なソリューションを検討します
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">MVP作成</h3>
              <p className="text-slate-300 text-sm">
                実用最小限の機能を持つMVPを作成し、実際の価値を体験していただきます
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">評価・導入</h3>
              <p className="text-slate-300 text-sm">
                MVPを評価いただき、ご納得いただけましたら月額制でご利用開始
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">継続改善</h3>
              <p className="text-slate-300 text-sm">
                改善・改修を追加料金なしで継続的に実施し、価値を向上させます
              </p>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">¥0</div>
                <p className="text-white font-semibold mb-1">無料でお試し</p>
                <p className="text-slate-300 text-sm">すべてのプロジェクトでMVPを作成</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">月額制</div>
                <p className="text-white font-semibold mb-1">低リスク運用</p>
                <p className="text-slate-300 text-sm">初期費用を抑えた導入が可能</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">継続性</div>
                <p className="text-white font-semibold mb-1">積極的アップデート</p>
                <p className="text-slate-300 text-sm">継続的な機能改善に追加料金なし</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ABOUT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              MVPファーストのアプローチで、お客様のリスクを最小限に抑えながら、
              継続的な価値創造を実現する革新的な開発企業です。
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
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">MVPファースト</h3>
                <p className="text-slate-300">
                  ヒアリング後、まずMVPを作成。実用最小限の機能で価値を体験いただいてから本格導入を検討できます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">月額制運用</h3>
                <p className="text-slate-300">
                  高額な初期投資は不要。月額制により、お客様のリスクを最小限に抑えた導入が可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">継続改善</h3>
                <p className="text-slate-300">
                  導入後の改善・改修は追加料金なし。お客様と共に価値を継続的に向上させていきます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Promises Section */}
      <section id="promises" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">私たちの約束</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              お客様との信頼関係を大切にし、確実な価値提供をお約束します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "無料でMVPを提供", 
                description: "すべてのプロジェクトで実用最小限の機能を持つMVPを作成し、価値を実感いただきます",
                icon: "🎯",
                color: "from-amber-400 to-orange-500"
              },
              { 
                title: "月額制で低リスク", 
                description: "高額な初期投資は不要。月額制により導入リスクを最小限に抑えます",
                icon: "💰",
                color: "from-blue-400 to-purple-500"
              },
              { 
                title: "継続改善は無料", 
                description: "導入後の機能追加・改修は追加料金なしで継続的に実施します",
                icon: "🔄",
                color: "from-green-400 to-teal-500"
              },
              { 
                title: "透明性のある開発", 
                description: "開発プロセスは常にオープンに。進捗や課題を共有し一緒に解決します",
                icon: "👥",
                color: "from-purple-400 to-pink-500"
              },
              { 
                title: "24時間サポート", 
                description: "運用開始後も安心。問題発生時は迅速に対応いたします",
                icon: "🛠️",
                color: "from-red-400 to-orange-500"
              },
              { 
                title: "成果にコミット", 
                description: "単なるシステム提供ではなく、お客様のビジネス成果向上を追求します",
                icon: "📈",
                color: "from-indigo-400 to-violet-500"
              },
              { 
                title: "柔軟な対応力", 
                description: "仕様変更や追加要望にも柔軟に対応。お客様と共に最適解を見つけます",
                icon: "🤝",
                color: "from-cyan-400 to-blue-500"
              },
              { 
                title: "長期パートナー", 
                description: "一時的な関係ではなく、長期的なビジネスパートナーとして成長を支援します",
                icon: "🌟",
                color: "from-yellow-400 to-amber-500"
              },
            ].map((promise, index) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${promise.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{promise.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-3">{promise.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{promise.description}</p>
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
                <Cpu className="h-12 w-12 text-amber-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">リモートOBD2トラッカー</h3>
                <p className="text-slate-300 mb-6">
                  車両のOBD2ポートに接続し、車の状態や運転データをリモートで取得・監視。
                  フリート管理や予防整備、安全運転支援を実現します。
                </p>
                <Link href="/services/consulting">
                  <Button
                    variant="outline"
                    className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                  >
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">ソフトウェア開発</h3>
                <p className="text-slate-300 mb-6">
                  お客様の特定のニーズに合わせたオーダーメイドのソフトウェアソリューションを開発します。
                  スケーラブルで保守性の高いシステムを構築します。
                </p>
                <Link href="/services/software">
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    詳細を見る
                  </Button>
                </Link>
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
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/*<div className="flex items-center space-x-4">
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
              </div>*/}

              {/*<div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-slate-300">東京都千代田区外神田2-10-6宮本ビル3-A</p>
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
              </div>*/}
            </div>

            {/*<Card className="bg-slate-700/50 border-slate-600">
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
            </Card>*/}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
