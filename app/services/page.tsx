import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Zap, Cloud, Brain, Shield, Cog, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
                <Link href="/#services" className="text-amber-400 px-3 py-2 text-sm font-medium">
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">サービス一覧</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AutoSystemsが提供する包括的なソリューションで、 お客様のビジネスを次のレベルへと導きます。
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white">システム自動化コンサルティング</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300">
                  既存のビジネスプロセスを詳細に分析し、最適な自動化戦略を提案します。
                  ROIを最大化する効率的なソリューションを設計・実装します。
                </p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">主な特徴:</h4>
                  <ul className="space-y-2">
                    {[
                      "現状分析とプロセス最適化",
                      "ROI計算と効果測定",
                      "段階的導入計画の策定",
                      "継続的な改善サポート",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">導入事例</h4>
                  <p className="text-slate-300 text-sm">
                    製造業A社では、生産ライン自動化により生産性が40%向上し、 年間コスト削減額は2億円を達成しました。
                  </p>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">カスタムソフトウェア開発</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300">
                  お客様の特定のニーズに合わせたオーダーメイドのソフトウェアソリューションを開発します。
                  スケーラブルで保守性の高いシステムを構築します。
                </p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">開発領域:</h4>
                  <ul className="space-y-2">
                    {[
                      "Webアプリケーション開発",
                      "モバイルアプリ開発",
                      "デスクトップアプリケーション",
                      "API・マイクロサービス",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">技術スタック</h4>
                  <p className="text-slate-300 text-sm">
                    React, Next.js, Node.js, Python, AWS, Docker, Kubernetes等、 最新技術を活用した開発を行います。
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">その他のサービス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cloud,
                title: "クラウド移行",
                description: "オンプレミスからクラウドへの安全で効率的な移行をサポート",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: Brain,
                title: "AI・機械学習",
                description: "データを活用したAIソリューションの開発と導入",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: Shield,
                title: "セキュリティ強化",
                description: "包括的なセキュリティ監査と対策の実装",
                color: "from-red-400 to-orange-500",
              },
              {
                icon: Cog,
                title: "システム保守",
                description: "24/7の監視体制による安定したシステム運用",
                color: "from-green-400 to-teal-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">開発プロセス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              お客様との密接な連携により、確実で効率的なプロジェクト進行を実現します。
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "要件定義", description: "お客様のニーズを詳細にヒアリング" },
              { step: "02", title: "設計", description: "最適なアーキテクチャを設計" },
              { step: "03", title: "開発", description: "アジャイル手法による効率的な開発" },
              { step: "04", title: "テスト", description: "品質保証のための徹底的なテスト" },
              { step: "05", title: "運用", description: "継続的なサポートと改善" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-slate-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">プロジェクトを始めませんか？</h2>
          <p className="text-xl text-slate-300 mb-8">
            お客様のビジネス課題を解決する最適なソリューションを提案いたします。 まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                無料相談を申し込む
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-700 bg-transparent px-8"
            >
              資料をダウンロード
            </Button>
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
