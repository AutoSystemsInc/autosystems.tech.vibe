import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, BarChart3, Users, CheckCircle, ArrowRight, Brain, Lightbulb, TrendingUp, Database, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ConsultingPage() {
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
            <Badge variant="outline" className="border-amber-400 text-amber-400 bg-amber-400/10 mb-6">
              Technical Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">技術コンサルティング</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              技術顧問として、データ活用・DX推進をサポート。
              企業の技術戦略を継続的に支援し、競争優位性を創出します。
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">技術顧問としてのサポート</h2>
              <p className="text-slate-300 mb-6">
                技術顧問として、企業のデータ活用やDX推進を支援します。
                単なる技術提案ではなく、ビジネス戦略と技術戦略を統合し、
                継続的な価値創造を実現するパートナーシップを提供します。
              </p>
              <div className="space-y-4">
                {[
                  "技術戦略の立案・実行",
                  "データ活用方針の策定",
                  "MVPを通じた効果検証", 
                  "月額制での継続的サポート",
                  "組織の技術力向上支援",
                  "最新技術トレンドの提供",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-3" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <Target className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                MVPファーストアプローチ
              </h3>
              <p className="text-slate-300 text-center">
                大きな投資の前に、まずMVPで効果を検証。
                リスクを最小化しながら、確実な価値創造を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">サポート領域</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "データ活用戦略",
                description: "データを競争優位につなげる戦略立案と実行支援",
                details: ["データ戦略策定", "分析基盤構築", "BI・レポート設計"],
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: Brain,
                title: "AI・機械学習導入",
                description: "業務に最適化されたAI・機械学習ソリューション",
                details: ["予測モデル構築", "自動化システム", "推奨エンジン"],
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "DX推進支援",
                description: "デジタル変革を成功に導く包括的サポート",
                details: ["DX戦略立案", "システム現代化", "プロセス改革"],
                color: "from-green-400 to-teal-500",
              },
              {
                icon: Database,
                title: "データ基盤構築",
                description: "スケーラブルで効率的なデータ基盤の設計・構築",
                details: ["データパイプライン", "クラウド移行", "セキュリティ対策"],
                color: "from-indigo-400 to-violet-500",
              },
              {
                icon: Lightbulb,
                title: "技術戦略コンサル",
                description: "中長期的な技術ロードマップの策定と実行",
                details: ["技術選定支援", "アーキテクチャ設計", "開発体制構築"],
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Users,
                title: "組織・人材開発",
                description: "技術組織の成長と人材育成をサポート",
                details: ["技術研修", "採用支援", "組織設計"],
                color: "from-red-400 to-orange-500",
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
                        <div className="w-1 h-1 bg-amber-400 rounded-full mr-2"></div>
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

      {/* Service Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">サービスプロセス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              体系的なアプローチで、確実に成果につながるサポートを提供します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "現状分析",
                description: "技術・データ活用の現状を詳細に分析",
                details: ["技術資産棚卸", "課題特定", "ゴール設定"]
              },
              {
                step: "02", 
                title: "戦略策定",
                description: "ビジネス目標に最適化された技術戦略を策定",
                details: ["ロードマップ作成", "優先順位決定", "ROI算定"]
              },
              {
                step: "03",
                title: "MVP開発",
                description: "最小限の投資で効果を検証するMVPを開発",
                details: ["プロトタイプ作成", "効果測定", "改善案検討"]
              },
              {
                step: "04",
                title: "継続改善",
                description: "月額制で継続的にサポート・改善を実施",
                details: ["定期レビュー", "機能拡張", "最適化"]
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">{process.step}</span>
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
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">活用シーン・期待される成果</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "小売業でのデータ活用",
                company: "中堅小売チェーン",
                challenge: "売上予測精度の向上と在庫最適化",
                solution: "データ分析基盤構築とAI予測モデル導入",
                results: ["売上予測精度: 65% → 85%", "在庫コスト削減: 年間3,000万円", "欠品率: 15% → 3%"],
                icon: TrendingUp,
              },
              {
                title: "製造業でのDX推進",
                company: "部品製造業",
                challenge: "生産効率向上と品質管理の自動化",
                solution: "IoT導入と品質管理システム構築",
                results: ["生産効率: 20%向上", "品質不良率: 50%削減", "人的ミス: 80%削減"],
                icon: BarChart3,
              },
              {
                title: "金融業でのAI活用",
                company: "地方銀行",
                challenge: "リスク評価の精度向上と業務効率化",
                solution: "機械学習による信用評価モデル構築",
                results: ["審査時間: 50%短縮", "貸倒率: 30%改善", "顧客満足度: 25%向上"],
                icon: Brain,
              },
              {
                title: "サービス業での業務自動化",
                company: "人材サービス会社",
                challenge: "マッチング精度向上と業務効率化",
                solution: "AI推奨システムと業務自動化ツール導入",
                results: ["マッチング成功率: 40%向上", "業務時間: 60%削減", "売上: 35%増加"],
                icon: Users,
              },
            ].map((useCase, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <useCase.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                      <p className="text-amber-400 text-sm">{useCase.company}</p>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">料金体系</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">¥0</div>
                <p className="text-white font-semibold mb-1">初回相談・MVP開発</p>
                <p className="text-slate-300 text-sm">現状分析とMVP開発は無料で実施</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">月額制</div>
                <p className="text-white font-semibold mb-1">継続サポート</p>
                <p className="text-slate-300 text-sm">企業規模・内容に応じて柔軟に設定</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">成果保証</div>
                <p className="text-white font-semibold mb-1">効果が出るまでサポート</p>
                <p className="text-slate-300 text-sm">目標達成まで追加料金なし</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">技術顧問サービスを始めませんか？</h2>
          <p className="text-xl text-slate-300 mb-8">
            データ活用やDX推進でお困りの企業様、まずは無料相談からお気軽にお問い合わせください。
            現状分析とMVP開発を通じて、具体的な価値創造をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                無料相談を申し込む
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