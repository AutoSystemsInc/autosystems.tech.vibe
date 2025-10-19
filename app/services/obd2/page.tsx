import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Car, Wifi, MapPin, CheckCircle, ArrowRight, AlertTriangle, BarChart3, Shield, Smartphone, Cloud, Truck } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OBD2TrackerPage() {
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
              Remote OBD2 Tracker
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">リモートOBD2トラッカー</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              車両のOBD2ポートに接続し、車の状態や運転データをリモートで取得・監視。
              フリート管理や車両の予防整備、安全運転支援を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">リモートOBD2トラッカーとは</h2>
              <p className="text-slate-300 mb-6">
                車両のOBD2ポートに接続することで、車の状態や運転データをリモートで取得・監視できるデバイスです。
                4G/LTE通信機能を搭載し、リアルタイムでデータをクラウドに送信。
                車両管理の効率化と安全性向上を実現します。
              </p>
              <div className="space-y-4">
                {[
                  "車両センサー情報のリアルタイム取得",
                  "4G/LTE通信によるクラウド連携",
                  "故障コード（DTC）の即座な通知",
                  "GPS連動による位置情報追跡",
                  "運転履歴の詳細記録",
                  "予防整備のタイミング通知",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-3" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <Car className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                包括的な車両管理ソリューション
              </h3>
              <p className="text-slate-300 text-center">
                単なるトラッキングデバイスではなく、
                車両の健康状態から運転行動まで、
                総合的な車両管理を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">主な機能</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "リアルタイムデータ取得",
                description: "車両の各種センサー情報をリアルタイムで監視",
                details: ["エンジン回転数", "車速", "冷却水温度", "燃料消費量"],
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: Wifi,
                title: "4G/LTE通信",
                description: "取得したデータをクラウド上に即座に送信",
                details: ["リアルタイム送信", "安定した通信", "データ暗号化"],
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: AlertTriangle,
                title: "故障診断・通知",
                description: "DTCコードを検知し即座に管理者へ通知",
                details: ["故障コード検出", "スマホ通知", "管理画面表示"],
                color: "from-red-400 to-orange-500",
              },
              {
                icon: MapPin,
                title: "GPS位置追跡",
                description: "車両の位置情報と運転履歴を記録・管理",
                details: ["リアルタイム追跡", "ルート履歴", "ジオフェンス"],
                color: "from-green-400 to-teal-500",
              },
              {
                icon: Shield,
                title: "盗難防止機能",
                description: "不正な車両移動を検知し即座にアラート",
                details: ["移動検知", "緊急通知", "遠隔エンジン停止"],
                color: "from-indigo-400 to-violet-500",
              },
              {
                icon: Smartphone,
                title: "モバイルアプリ",
                description: "スマートフォンから車両状態を確認・管理",
                details: ["リアルタイム監視", "通知受信", "レポート閲覧"],
                color: "from-amber-400 to-yellow-500",
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

      {/* Implementation Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">導入プロセス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              簡単な導入プロセスで、迅速に車両管理システムを開始できます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "要件ヒアリング",
                description: "車両管理のニーズと要件を詳細にお伺い",
                details: ["管理台数確認", "必要機能選定", "運用体制検討"]
              },
              {
                step: "02", 
                title: "デバイス設置",
                description: "OBD2ポートにトラッカーを接続・設定",
                details: ["デバイス取付", "通信設定", "動作確認"]
              },
              {
                step: "03",
                title: "システム構築",
                description: "管理画面とモバイルアプリの環境構築",
                details: ["アカウント作成", "ダッシュボード設定", "通知設定"]
              },
              {
                step: "04",
                title: "運用開始",
                description: "本格運用開始と継続的なサポート提供",
                details: ["運用トレーニング", "定期メンテナンス", "機能追加"]
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
            <h2 className="text-3xl font-bold text-white mb-4">利用シーン・導入効果</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "フリート管理",
                company: "物流会社",
                challenge: "多数の配送車両の効率的な管理と運行状況の把握",
                solution: "全車両にOBD2トラッカーを設置し、一元管理システムを構築",
                results: ["運行効率: 25%向上", "燃料コスト: 15%削減", "車両故障: 60%減少"],
                icon: Truck,
              },
              {
                title: "レンタカー管理",
                company: "レンタカー事業者",
                challenge: "車両の位置把握と盗難防止、メンテナンス管理",
                solution: "GPS追跡機能付きOBD2トラッカーで車両状態を監視",
                results: ["盗難事件: 0件達成", "メンテナンス効率: 40%向上", "顧客満足度: 30%向上"],
                icon: Car,
              },
              {
                title: "企業車両管理",
                company: "建設会社",
                challenge: "現場車両の安全運転管理と予防整備の実施",
                solution: "運転行動分析とメンテナンス通知システムを導入",
                results: ["事故件数: 70%削減", "整備コスト: 20%削減", "車両稼働率: 35%向上"],
                icon: Shield,
              },
              {
                title: "個人車両管理",
                company: "一般ユーザー",
                challenge: "愛車の健康状態把握と盗難対策の強化",
                solution: "スマートフォンアプリと連動した個人向けトラッカー",
                results: ["故障予防: 早期発見率90%", "盗難防止: 即座通知", "燃費改善: 平均12%向上"],
                icon: Smartphone,
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
                <div className="text-3xl font-bold text-amber-400 mb-2">初期費用</div>
                <p className="text-white font-semibold mb-1">デバイス・設置</p>
                <p className="text-slate-300 text-sm">デバイス代金と設置作業費用</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">月額制</div>
                <p className="text-white font-semibold mb-1">通信・管理費用</p>
                <p className="text-slate-300 text-sm">車両台数に応じた月額料金</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">サポート</div>
                <p className="text-white font-semibold mb-1">24時間監視・保守</p>
                <p className="text-slate-300 text-sm">システム監視と技術サポート込み</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-300 text-sm">
                ※ 詳細な料金については、管理台数や必要機能に応じてお見積もりいたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">リモートOBD2トラッカーを導入しませんか？</h2>
          <p className="text-xl text-slate-300 mb-8">
            車両管理の効率化や安全性向上をお考えの企業様、まずはお気軽にご相談ください。
            お客様のニーズに合わせた最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                お問い合わせ・お見積もり
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