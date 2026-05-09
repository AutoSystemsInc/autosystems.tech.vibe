import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, Cloud, Brain, Shield, Cog, CheckCircle, ArrowRight, Cpu, ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { proprietaryServices } from "@/lib/proprietary-services"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header activeSection="services" />

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
              自社で運営するクラウドサービスと、オーダーメイドの受託開発の両輪で
              課題解決まで伴走します。予約・業務システム・IoT連携にも対応します。
            </p>
          </div>
        </div>
      </section>

      {/* 自社サービス */}
      <section className="py-12 bg-slate-800/40 border-y border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="outline" className="border-amber-400/50 text-amber-300 bg-amber-400/10 mb-3">
              <Sparkles className="inline h-3.5 w-3.5 mr-1 align-text-bottom" />
              AutoSystems SaaS
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">自社サービス（プロダクト）</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
              サービスサイトで機能・資料を確認いただけます。導入・カスタム・API連携はお問い合わせよりご相談ください。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {proprietaryServices.map((svc) => (
              <div
                key={svc.url}
                className="relative rounded-xl border border-slate-600/80 bg-slate-900/50 p-6 transition-all hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5"
              >
                <div
                  className={`absolute -top-px left-8 right-8 h-px bg-gradient-to-r ${svc.gradient} opacity-70`}
                />
                <div className="mb-4 flex items-start gap-3">
                  {svc.logoSrc ? (
                    <div className="inline-flex w-fit max-w-[min(100%,10rem)] shrink-0 rounded-lg bg-white/95 p-1.5 shadow-inner ring-1 ring-white/15">
                      <Image
                        src={svc.logoSrc}
                        alt=""
                        width={220}
                        height={48}
                        className="block h-11 w-auto max-w-full object-contain object-left"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${svc.gradient} text-sm font-bold text-white shadow-md ring-1 ring-white/10`}
                    >
                      {svc.iconLetter}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white leading-snug pr-2 mb-1">{svc.name}</h3>
                    <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${svc.taglineGradient} mb-2`}>
                      {svc.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{svc.description}</p>
                <a
                  href={svc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center text-amber-400 text-sm font-semibold hover:text-amber-300"
                >
                  サービスサイトを見る
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
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
                    <Cpu className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white">リモートOBD2トラッカー</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300">
                  車両のOBD2ポートに接続し、車の状態や運転データをリモートで取得・監視。
                  フリート管理や予防整備、安全運転支援を実現します。
                </p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">主な機能:</h4>
                  <ul className="space-y-2">
                    {[
                      "リアルタイムデータ取得",
                      "4G/LTE通信によるクラウド連携",
                      "故障コード（DTC）の即座通知",
                      "GPS連動による位置情報追跡",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">導入効果</h4>
                  <p className="text-slate-300 text-sm">
                    物流会社では運行効率25%向上、燃料コスト15%削減、
                    車両故障60%減少を実現。総合的な車両管理を支援します。
                  </p>
                </div>

                <Link href="/services/obd2">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">ソフトウェア開発</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300">
                  要件を整理し、試作やプロトタイプで早期に認識を揃えたうえで本実装へ。
                  リリース後も改善サイクルで継続的に機能を拡張できます。
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

                <Link href="/services/software">
                  <Button
                    variant="outline"
                    className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
              {
                icon: Cpu,
                title: "IoTデバイス開発",
                description: "センサーからクラウドまで、包括的なIoTソリューションの開発",
                color: "from-indigo-400 to-violet-500",
              },
            ].map((service, index) => (
              <Link href={service.title === "IoTデバイス開発" ? "/services/iot" : "#"} key={index}>
                <Card
                  className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group cursor-pointer"
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
              </Link>
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
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
