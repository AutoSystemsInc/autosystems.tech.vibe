import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, Monitor, Smartphone, Cpu, Server, Cloud, CheckCircle, ArrowRight, Code, Layers, Database, Globe, Cog, Users } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header activeSection="services" />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-slate-300 hover:text-white mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                サービス一覧に戻る
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10 mb-6">
              Software Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">ソフトウェア開発</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              お客様の特定のニーズに合わせたオーダーメイドのソフトウェアソリューションを開発します。
              MVPで要件を具体化し、月額制で継続的に機能を拡張していきます。
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">オーダーメイド開発の特徴</h2>
              <p className="text-slate-300 mb-6">
                お客様のビジネス要件に完全に最適化されたソフトウェアを開発します。
                MVPで要件を具体化し、実際に操作いただいて仕様を確定。
                運用開始後も月額制で継続的に機能を拡張し、ビジネス成長をサポートします。
              </p>
              <div className="space-y-4">
                {[
                  "MVPによる要件具体化",
                  "ユーザー参加型の仕様確定",
                  "月額制での継続的機能拡張", 
                  "スケーラブルなアーキテクチャ",
                  "保守性の高いコード品質",
                  "最新技術スタックの活用",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <Zap className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                MVPファースト開発
              </h3>
              <p className="text-slate-300 text-center">
                大規模な開発に入る前に、まずMVPで核となる機能を実装。
                実際の使用感を確認してから本格開発に進みます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Areas */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">開発領域</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Webアプリケーション",
                description: "レスポンシブでモダンなWebアプリケーション",
                details: ["フロントエンド開発", "バックエンドAPI", "管理画面", "ダッシュボード"],
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: Smartphone,
                title: "モバイルアプリ開発",
                description: "iOS・Android対応のネイティブ・クロスプラットフォームアプリ",
                details: ["React Native", "Flutter", "ネイティブ開発", "PWA"],
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: Cpu,
                title: "デスクトップアプリ",
                description: "Windows・Mac・Linux対応のデスクトップアプリケーション",
                details: ["Electron", ".NET", "WPF", "クロスプラットフォーム"],
                color: "from-green-400 to-teal-500",
              },
              {
                icon: Server,
                title: "API・マイクロサービス",
                description: "スケーラブルなAPI・マイクロサービスアーキテクチャ",
                details: ["RESTful API", "GraphQL", "マイクロサービス", "コンテナ化"],
                color: "from-orange-400 to-red-500",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 text-center">{service.description}</p>
                  <ul className="space-y-1">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-slate-400 text-xs flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">技術スタック</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              最新かつ実績のある技術を組み合わせて、高品質なソフトウェアを開発します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "フロントエンド",
                icon: Globe,
                technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material-UI"],
                color: "from-cyan-400 to-blue-500",
              },
              {
                category: "バックエンド",
                icon: Server,
                technologies: ["Node.js", "Python", "Java", "C#", "Go", "PHP"],
                color: "from-green-400 to-teal-500",
              },
              {
                category: "データベース",
                icon: Database,
                technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"],
                color: "from-purple-400 to-pink-500",
              },
              {
                category: "クラウド・インフラ",
                icon: Cloud,
                technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
                color: "from-orange-400 to-red-500",
              },
              {
                category: "モバイル",
                icon: Smartphone,
                technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
                color: "from-indigo-400 to-violet-500",
              },
              {
                category: "開発ツール",
                icon: Cog,
                technologies: ["Git", "Jenkins", "GitHub Actions", "SonarQube", "Jest", "Cypress"],
                color: "from-amber-400 to-yellow-500",
              },
            ].map((stack, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stack.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-500 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">開発プロセス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              アジャイル手法により、柔軟かつ効率的な開発を実現します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "要件定義",
                description: "詳細なヒアリングとビジネス分析",
                details: ["課題整理", "目標設定", "要求仕様書作成"]
              },
              {
                step: "02", 
                title: "設計・企画",
                description: "UI/UX設計とシステムアーキテクチャ設計",
                details: ["ワイヤーフレーム", "UI/UXデザイン", "技術選定"]
              },
              {
                step: "03",
                title: "MVP開発",
                description: "最小限の機能でプロトタイプを開発",
                details: ["コア機能実装", "ユーザーテスト", "フィードバック収集"]
              },
              {
                step: "04",
                title: "本格開発",
                description: "スプリント単位での機能開発",
                details: ["アジャイル開発", "品質保証", "テスト自動化"]
              },
              {
                step: "05",
                title: "運用・保守",
                description: "継続的な機能拡張とサポート",
                details: ["月額制サポート", "機能追加", "パフォーマンス最適化"]
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{process.description}</p>
                <ul className="text-slate-400 text-xs space-y-1">
                  {process.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">開発事例</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ECサイト・マーケットプレイス",
                industry: "小売・EC業界",
                challenge: "独自の販売システムと在庫管理の統合",
                solution: "React + Node.js による高性能ECプラットフォーム",
                results: ["売上: 200%向上", "ページ速度: 60%改善", "管理効率: 80%向上"],
                icon: Globe,
              },
              {
                title: "業務管理システム",
                industry: "製造業",
                challenge: "複雑な生産工程の可視化と効率化",
                solution: "Vue.js + Python による生産管理システム",
                results: ["生産効率: 35%向上", "在庫コスト: 25%削減", "品質管理: 50%改善"],
                icon: Cog,
              },
              {
                title: "モバイルアプリ",
                industry: "ヘルスケア",
                challenge: "患者データの安全な管理とアクセス性向上",
                solution: "React Native による医療従事者向けアプリ",
                results: ["診療時間: 30%短縮", "データ精度: 95%向上", "患者満足度: 40%向上"],
                icon: Smartphone,
              },
              {
                title: "データ分析プラットフォーム",
                industry: "金融業",
                challenge: "リアルタイムデータ分析と可視化",
                solution: "React + Python + AWS によるBI プラットフォーム",
                results: ["分析速度: 10倍向上", "意思決定時間: 50%短縮", "ROI: 300%改善"],
                icon: Database,
              },
            ].map((useCase, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                      <p className="text-blue-400 text-sm">{useCase.industry}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2">課題</h4>
                    <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2">ソリューション</h4>
                    <p className="text-slate-300 text-sm">{useCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2">成果</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">料金体系</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Badge variant="outline" className="border-amber-400 text-amber-400 w-fit mx-auto mb-4">
                  MVP開発
                </Badge>
                <div className="text-3xl font-bold text-amber-400 mb-2">¥0</div>
                <p className="text-white font-semibold">初回MVP開発</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["要件定義・設計", "MVP開発", "ユーザーテスト", "フィードバック収集", "改善提案"].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-blue-400 border-2 hover:shadow-2xl transition-all duration-300 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white">
                人気
              </Badge>
              <CardHeader className="text-center">
                <Badge variant="outline" className="border-blue-400 text-blue-400 w-fit mx-auto mb-4">
                  本格開発
                </Badge>
                <div className="text-3xl font-bold text-blue-400 mb-2">要相談</div>
                <p className="text-white font-semibold">プロジェクトベース</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["完全オーダーメイド開発", "スケーラブル設計", "品質保証・テスト", "デプロイ・運用開始", "ドキュメント完備"].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Badge variant="outline" className="border-green-400 text-green-400 w-fit mx-auto mb-4">
                  継続サポート
                </Badge>
                <div className="text-3xl font-bold text-green-400 mb-2">月額制</div>
                <p className="text-white font-semibold">運用・機能拡張</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["継続的機能追加", "バグ修正・改善", "パフォーマンス最適化", "セキュリティ更新", "技術サポート"].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">ソフトウェア開発を始めませんか？</h2>
          <p className="text-xl text-slate-300 mb-8">
            お客様のビジネス課題を解決する最適なソフトウェアソリューションを提案いたします。
            まずは無料のMVP開発からお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8">
                無料MVP開発を申し込む
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}