import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Target, Award, Globe, Calendar } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
                <Link href="/#about" className="text-amber-400 px-3 py-2 text-sm font-medium">
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
                <Link
                  href="/#contact"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
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
              About AutoSystems
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">私たちについて</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AutoSystems, Inc.は2015年に設立され、システム自動化のパイオニアとして
              世界中の企業や個人に革新的なソリューションを提供し続けています。
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">企業概要</h2>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-amber-400 mr-3" />
                  <span>
                    <strong>設立年:</strong> 2015年
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-amber-400 mr-3" />
                  <span>
                    <strong>従業員数:</strong> 150名
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-amber-400 mr-3" />
                  <span>
                    <strong>拠点:</strong> 東京、大阪、シンガポール
                  </span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-amber-400 mr-3" />
                  <span>
                    <strong>事業領域:</strong> システム自動化、AI開発、クラウドソリューション、IoTデバイス開発
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">ミッション</h3>
                  <p className="text-slate-300">
                    世界中のシステムを自動化し、すべての人がアクセスできる 使いやすいソリューションを提供することで、
                    人々の生活と仕事をより豊かにする。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">ビジョン</h3>
                  <p className="text-slate-300">
                    技術の力で世界をつなぎ、 誰もが平等にテクノロジーの恩恵を受けられる 持続可能な社会の実現を目指す。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">私たちの価値観</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">革新性</h3>
                <p className="text-slate-300">
                  常に最新技術を追求し、従来の枠組みを超えた 革新的なソリューションを創造します。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">協働</h3>
                <p className="text-slate-300">
                  チーム一丸となって取り組み、 お客様との密接な連携を通じて最高の成果を生み出します。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">品質</h3>
                <p className="text-slate-300">
                  妥協のない品質へのこだわりを持ち、 お客様の期待を上回るサービスを提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">沿革</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2015",
                title: "会社設立",
                description: "東京にてAutoSystems, Inc.を設立。創業メンバー5名でスタート。",
              },
              {
                year: "2017",
                title: "初の大型プロジェクト受注",
                description: "大手製造業向けの工場自動化システムを開発・導入。",
              },
              {
                year: "2019",
                title: "AI部門設立",
                description: "機械学習・AI技術に特化した専門部門を新設。",
              },
              {
                year: "2021",
                title: "海外展開開始",
                description: "シンガポールオフィスを開設し、東南アジア市場に進出。",
              },
              {
                year: "2023",
                title: "従業員数100名突破",
                description: "急速な事業拡大により、従業員数が100名を超える。",
              },
              {
                year: "2024",
                title: "新技術研究所設立",
                description: "次世代技術の研究開発に特化した研究所を大阪に設立。",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">経営陣</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "田中 太郎",
                position: "代表取締役CEO",
                description: "東京大学工学部卒業後、大手IT企業で10年間システム開発に従事。2015年にAutoSystemsを設立。",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "佐藤 花子",
                position: "取締役CTO",
                description: "スタンフォード大学でAIを専攻。シリコンバレーでの経験を活かし、技術戦略を統括。",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "鈴木 次郎",
                position: "取締役CFO",
                description: "公認会計士として大手監査法人で経験を積み、2018年にAutoSystemsに参画。",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-slate-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-amber-400 mb-4">{member.position}</p>
                  <p className="text-slate-300 text-sm">{member.description}</p>
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
