import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Cpu, Wifi, Database, Cloud, Shield, Zap, CheckCircle, ArrowRight, Monitor, Smartphone, Cog } from "lucide-react"
import Link from "next/link"

export default function IoTDevicePage() {
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
                <Link href="/services" className="text-amber-400 px-3 py-2 text-sm font-medium">
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
            <Link href="/services">
              <Button variant="ghost" className="text-slate-300 hover:text-white mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                サービス一覧に戻る
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge variant="outline" className="border-indigo-400 text-indigo-400 bg-indigo-400/10 mb-6">
              IoT Device Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">IoTデバイス開発</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              センサーからクラウドまで、包括的なIoTソリューションを開発し、
              リアルタイムデータ収集と分析で新たな価値を創造します。
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">IoTソリューションの全体像</h2>
              <p className="text-slate-300 mb-6">
                私たちのIoTデバイス開発サービスは、ハードウェア設計からクラウドインフラまで、
                IoTエコシステム全体をカバーします。業界の専門知識と最新技術を組み合わせて、
                お客様のビジネス課題を解決する革新的なソリューションを提供します。
              </p>
              <div className="space-y-4">
                {[
                  "カスタムハードウェア設計・開発",
                  "センサー統合とデータ収集",
                  "無線通信プロトコルの実装",
                  "クラウドプラットフォーム構築",
                  "リアルタイムデータ分析",
                  "モバイル・Webアプリケーション",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-400 mr-3" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <Cpu className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                エンドツーエンドソリューション
              </h3>
              <p className="text-slate-300 text-center">
                デバイス設計からデータ活用まで、IoTプロジェクトの全工程をワンストップで提供
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">主な特徴</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-violet-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "マルチプロトコル対応",
                description: "WiFi、Bluetooth、LoRaWAN、Zigbee等、多様な通信プロトコルに対応",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: Database,
                title: "ビッグデータ処理",
                description: "大量のセンサーデータを効率的に収集・処理・蓄積するシステム",
                color: "from-green-400 to-teal-500",
              },
              {
                icon: Cloud,
                title: "クラウド統合",
                description: "AWS、Azure、GCPなど主要クラウドプラットフォームとの統合",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: Shield,
                title: "セキュリティ重視",
                description: "エンドツーエンドの暗号化とセキュアな通信プロトコル",
                color: "from-red-400 to-orange-500",
              },
              {
                icon: Zap,
                title: "リアルタイム処理",
                description: "エッジコンピューティングによる低遅延データ処理",
                color: "from-amber-400 to-yellow-500",
              },
              {
                icon: Monitor,
                title: "可視化ダッシュボード",
                description: "直感的なWebダッシュボードとモバイルアプリ",
                color: "from-indigo-400 to-violet-500",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">開発プロセス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-violet-500 mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              綿密な計画と段階的な開発により、高品質なIoTソリューションを提供します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "要件分析",
                description: "ビジネス要件とテクニカル要件の詳細分析",
                details: ["ユースケース定義", "技術要件整理", "制約条件確認"]
              },
              {
                step: "02",
                title: "システム設計",
                description: "ハードウェア・ソフトウェア・インフラの包括設計",
                details: ["アーキテクチャ設計", "プロトタイプ作成", "技術検証"]
              },
              {
                step: "03",
                title: "開発・製造",
                description: "並行開発によるスピーディーな実装",
                details: ["ハードウェア開発", "ファームウェア開発", "クラウド開発"]
              },
              {
                step: "04",
                title: "テスト・導入",
                description: "徹底的なテストと本番環境への導入",
                details: ["統合テスト", "性能テスト", "本番導入"]
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">活用事例</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-violet-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "スマートファクトリー",
                description: "製造業向け生産ライン監視システム",
                details: "センサーによる設備監視、予知保全、品質管理の自動化により、生産効率を35%向上させました。",
                metrics: ["稼働率向上: +35%", "メンテナンス費用削減: -40%", "品質不良率: -60%"],
                icon: Cog,
              },
              {
                title: "スマートビルディング",
                description: "オフィスビル向け統合管理システム",
                details: "照明、空調、セキュリティを一元管理し、エネルギー消費を最適化。年間光熱費を30%削減しました。",
                metrics: ["エネルギー削減: -30%", "運用コスト削減: -25%", "居住快適性向上: +20%"],
                icon: Monitor,
              },
              {
                title: "農業IoT",
                description: "精密農業向け環境監視システム",
                details: "土壌、気象、作物の状態をリアルタイム監視し、最適な栽培環境を自動制御します。",
                metrics: ["収穫量向上: +25%", "水使用量削減: -30%", "人件費削減: -40%"],
                icon: Database,
              },
              {
                title: "ヘルスケアIoT",
                description: "医療機器向けリモートモニタリング",
                details: "患者のバイタルデータを24時間監視し、緊急時の迅速な対応を実現します。",
                metrics: ["早期発見率: +50%", "医療費削減: -20%", "患者満足度: +30%"],
                icon: Smartphone,
              },
            ].map((useCase, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                      <p className="text-indigo-400 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{useCase.details}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">主な成果:</h4>
                    <ul className="space-y-1">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                          {metric}
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

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">技術スタック</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-violet-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "ハードウェア",
                technologies: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Nordic nRF", "カスタムPCB"],
              },
              {
                category: "通信プロトコル",
                technologies: ["WiFi", "Bluetooth LE", "LoRaWAN", "Zigbee", "NB-IoT", "5G"],
              },
              {
                category: "クラウド",
                technologies: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "CoAP", "Time Series DB"],
              },
              {
                category: "開発ツール",
                technologies: ["Embedded C/C++", "Python", "Node.js", "React", "Docker", "Kubernetes"],
              },
            ].map((stack, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="text-slate-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">IoTプロジェクトを始めませんか？</h2>
          <p className="text-xl text-slate-300 mb-8">
            お客様のビジネス課題を解決する最適なIoTソリューションを提案いたします。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8">
                無料相談を申し込む
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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