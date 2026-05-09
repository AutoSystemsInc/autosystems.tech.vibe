import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Zap,
  CalendarCheck,
  Copy,
  UserCog,
  Cpu,
  CheckCircle2,
  MessageCircle,
  Play,
  ExternalLink,
  Sparkles,
  FileSignature,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FixedCTA from "@/components/fixed-cta"
import { proprietaryServices } from "@/lib/proprietary-services"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <FixedCTA />

      {/* 1st View: 具体キャッチ＋CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span>可能性を、</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">形に。</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AutoSystemsの使命は、世界中のシステムを自動化し、<br/>世界中の人がアクセスできて使えるようにすることです。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  サービス一覧
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 自社サービス */}
      <section id="products" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/5 text-amber-300 border-white/10 mb-4">
              <Sparkles className="inline h-3.5 w-3.5 mr-1.5 align-text-bottom" />
              Proprietary Services
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">製品・サービス</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              システムの自動化で、業務効率化 & 生活をより便利に、より快適に。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {proprietaryServices.map((svc) => (
              <div
                key={svc.url}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/30 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:shadow-amber-500/10"
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${svc.glow} opacity-80`}
                />
                <div className="mb-6 flex items-start gap-4">
                  {svc.logoSrc ? (
                    <div className="inline-flex w-fit max-w-[min(100%,12rem)] shrink-0 rounded-2xl bg-white/95 p-2 shadow-lg ring-1 ring-white/25">
                      <Image
                        src={svc.logoSrc}
                        alt=""
                        width={260}
                        height={56}
                        className="block h-12 w-auto max-w-full object-contain object-left"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${svc.gradient} text-lg font-bold text-white shadow-lg`}
                    >
                      {svc.iconLetter}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 pr-2">{svc.name}</h3>
                    <p
                      className={`text-base font-medium text-transparent bg-clip-text bg-gradient-to-r ${svc.taglineGradient}`}
                    >
                      {svc.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed grow mb-8">{svc.description}</p>
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

          <div className="text-center mt-14">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 課題提示：よくある悩み */}
      <section id="problems" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              こんな悩み、ありませんか？
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              施設予約・社内申請・属人化など、多くの企業が抱える業務効率化の課題。
              オーダーメイドのシステム構築でその解決を専門としています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover:border-amber-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                  <UserCog className="h-7 w-7 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  属人化で業務が止まる
                </h3>
                <p className="text-slate-300">
                  特定の人にしか分からない手順や運用ルール。担当者が不在だと業務が回らず、引き継ぎも大変で、リスクが高い。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-amber-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                  <CalendarCheck className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  施設予約・社内申請が煩雑
                </h3>
                <p className="text-slate-300">
                  決裁書・予約申請書など、社内独自の複雑な手続きが必要な施設予約。汎用ツールでは対応しきれず、紙やメールでの運用に逆戻り…。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-amber-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <Copy className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  二重入力・手作業が発生
                </h3>
                <p className="text-slate-300">
                  複数のシステムに同じデータを入力、紙とデジタルの両方で管理。人的ミスや工数増加に悩んでいる。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 解決：提供価値 */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AutoSystemsが提供する価値
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              課題を「何をどう変えるか」で具体的に解決します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  属人化 → システム化
                </h3>
                <p className="text-slate-300">
                  手順やノウハウをシステムに組み込み。誰でも同じ品質で業務を実行できる体制に変えます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileSignature className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  複雑な申請業務 → オーダーメイド構築
                </h3>
                <p className="text-slate-300">
                  決裁書・予約申請書など、社内独自の承認フローもそのままシステム化。施設予約システムを1から構築した実績で、貴社業務に完全フィットさせます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  二重入力 → 一元管理・自動連携
                </h3>
                <p className="text-slate-300">
                  API連携や自動取り込みで、一度入力すれば複数システムに反映。手作業を削減しミスをゼロに近づけます。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
              >
                具体的な解決策を相談する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 証拠（Proof） */}
      <section id="proof" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              実績・体制・開発手法
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              お客様のリスクを最小化する開発体制と実績
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-400 mb-2">自社</div>
                <p className="text-white font-medium">複数のクラウドプロダクトを運用・改善</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">受託</div>
                <p className="text-white font-medium">Web・業務システム・アプリのオーダーメイド</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">IoT</div>
                <p className="text-white font-medium">車両・センサーからクラウドまで一気通貫</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">伴走</div>
                <p className="text-white font-medium">リリース後の運用・改善も継続サポート</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <Cpu className="h-12 w-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  車両・フリート管理
                </h3>
                <p className="text-slate-300 text-sm">
                  OBD2トラッカーで車両状態・運転データをリモート取得。予防整備・安全運転支援を実現。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <CalendarCheck className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  施設予約・業務システム
                </h3>
                <p className="text-slate-300 text-sm">
                  決裁書・予約申請書など社内独自の承認フローを伴う施設予約システムを1から構築した実績あり。受付・在庫・基幹連携も含めオーダーメイドで対応します。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <Cpu className="h-12 w-12 text-indigo-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  IoTデータ収集
                </h3>
                <p className="text-slate-300 text-sm">
                  センサーからクラウドまで。リアルタイムデータ収集と分析で新たな価値を創造。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 進め方：自社プロダクト or 開発 */}
      <section id="model" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ご相談の進め方
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              課題に合わせて、既存プロダクトの活用からフルオーダーの開発まで柔軟にご提案します
            </p>
          </div>

          <div className="bg-slate-700/30 rounded-2xl p-8 md:p-12 border border-slate-600 max-w-4xl mx-auto">
            <div className="space-y-6 text-slate-200">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">自社サービスでできること</p>
                  <p className="text-slate-300">
                    経営・販売・車両データなど、当社クラウドでカバーできる領域はまずプロダクトをご紹介。カスタムやAPI連携も含めて設計します。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">受託・オーダーメイド</p>
                  <p className="text-slate-300">
                    決裁書・予約申請書など社内独自の複雑な手続きを伴う施設予約システムを1から構築した実績があります。顧客ポータル、在庫・シフトなど、汎用ツールでは賄えない業務要件もヒアリングのうえ要件定義から運用まで一気通貫で対応します。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">お見積もり・契約後</p>
                  <p className="text-slate-300">
                    スコープと体制を明示したうえでお見積もり。リリース後は保守・機能追加など、運用フェーズでも継続して伴走できます。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-600 text-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8"
                >
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 流れ：開発プロセス＋納品物 */}
      <section id="process" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              開発の流れと納品物
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              プロダクト活用からフル開発まで、一貫した進行
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">ヒアリング</h3>
              <p className="text-slate-300 text-sm mb-4">
                課題・既存運用・制約を整理し、プロダクト適合か開発かを査定
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：要件整理・方針案</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">設計・試作</h3>
              <p className="text-slate-300 text-sm mb-4">
                UI・API連携・アーキテクチャを設計し、早期に動くもので認識合わせ
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：設計資料・試作環境</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">実装・リリース</h3>
              <p className="text-slate-300 text-sm mb-4">
                本番品質での実装、テスト、デプロイ。セキュリティと運用性を確保
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：本番環境・ドキュメント</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">運用・改善</h3>
              <p className="text-slate-300 text-sm mb-4">
                モニタリング、問い合わせ対応、機能追加など継続的に改善
              </p>
              <p className="text-amber-400 text-sm font-medium">ご契約に応じたサポート</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
              >
                開発の流れを詳しく相談する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* お客様の声：Before→After */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              お客様の声（Before → After）
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              導入前後の変化を具体的に
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <p className="text-red-400 font-semibold text-sm mb-2">Before</p>
                    <p className="text-slate-300 text-sm">
                      施設予約は紙の予約申請書と決裁書を回覧。承認まで数日かかり、ダブルブッキングも発生していた。
                    </p>
                  </div>
                  <div className="flex-1 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <p className="text-green-400 font-semibold text-sm mb-2">After</p>
                    <p className="text-slate-300 text-sm">
                      申請から決裁までシステム上で完結。社内独自の承認フローもそのまま再現し、ダブルブッキングもゼロに。
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm italic">
                  — 施設予約システムを1から構築した事例（イメージ）
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <p className="text-red-400 font-semibold text-sm mb-2">Before</p>
                    <p className="text-slate-300 text-sm">
                      複数システムに同じデータを二重入力。ミスが多く、工数もかかっていた。
                    </p>
                  </div>
                  <div className="flex-1 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <p className="text-green-400 font-semibold text-sm mb-2">After</p>
                    <p className="text-slate-300 text-sm">
                      一元入力で自動連携。入力工数70%削減。ミスも激減し、業務効率が大幅に向上。
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm italic">
                  — 業務効率化システム導入事例（イメージ）
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                自社の課題を相談する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              よくあるご質問
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-300">
              不安を解消。お気軽にご相談ください。
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="faq-1"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                自社サービスと受託開発はどう使い分けますか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                まずヒアリングで課題を整理し、既存プロダクトで十分か、カスタムや単体開発がよいかをご提案します。併用（プロダクト＋個別開発）も可能です。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                施設予約システムなど、業務特化の開発は依頼できますか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                はい。決裁書・予約申請書など社内独自の複雑な手続きを伴う施設予約システムを1から構築した実績があります。予約枠・承認フロー・顧客管理・決済連携・在庫・外部カレンダー連携など、貴社の業務フローに沿った設計から実装までオーダーメイドで対応します。お問い合わせにて要件を伺います。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                保守・サポートはどうなりますか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                リリース後の監視、不具合対応、機能追加などは、ご契約の形態（月額保守・スポット対応など）に合わせて設計します。範囲はお見積もり時に明確化します。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-4"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                セキュリティは大丈夫ですか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                データの暗号化、アクセス制御、定期的なセキュリティアップデートなど、業界標準の対策を実施しています。ご要望に応じて追加のセキュリティ対策もご相談可能です。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-5"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                お見積もり前に契約や費用はかかりますか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                ヒアリングと概算お見積もりの段階で費用が発生することはありません。内容・スケジュールにご納得いただいたうえで正式にお見積もり・契約となります。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-6"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                相談・ヒアリングは無料ですか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                はい、相談・ヒアリングは無料です。お気軽にお問い合わせください。
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                その他のご質問はお問い合わせへ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 最後のCTA */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              お問い合わせ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              自社サービスの導入、予約システムなどの開発、その他の課題整理やお見積もりまで。お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
