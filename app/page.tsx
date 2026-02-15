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
  Globe,
  Zap,
  FileSpreadsheet,
  Copy,
  UserCog,
  Cpu,
  CheckCircle2,
  MessageCircle,
  Play,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FixedCTA from "@/components/fixed-cta"

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
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50 px-4 py-1">
              MVPファースト開発
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span>可能性を、</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">形に。</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              車両管理・業務効率化・IoTデータ収集など、まず無料でMVPを作成。
              価値を実感してから月額制で本格導入。初期費用ゼロ、リスクゼロで始められます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  無料相談・デモ依頼
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

      {/* 課題提示：よくある悩み */}
      <section id="problems" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              こんな悩み、ありませんか？
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Excel管理・二重入力・属人化など、多くの企業が抱える業務効率化の課題。
              私たちはその解決を専門としています。
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
                  特定の人にしか分からないExcelや手順。担当者がいないと業務が回らない。引き継ぎも大変で、リスクが高い。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-amber-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                  <FileSpreadsheet className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Excelの限界を感じている
                </h3>
                <p className="text-slate-300">
                  データ量が増えると重くなる、複数人での共有が難しい、ミスが起きやすい。Excelではもう限界だと感じている。
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
                課題解決の相談は無料です
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
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Excel → 専用システム
                </h3>
                <p className="text-slate-300">
                  データ量に強い、共有しやすい、ミスを防ぐ。業務に特化したシステムでExcelの限界を超えます。
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
                <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
                <p className="text-white font-medium">全プロジェクトで無料MVP提供</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">月額制</div>
                <p className="text-white font-medium">初期費用ゼロで低リスク導入</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">定額制</div>
                <p className="text-white font-medium">月額定額で改善・改修し放題</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">透明性</div>
                <p className="text-white font-medium">進捗・課題をオープンに共有</p>
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
                <Zap className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  業務システム開発
                </h3>
                <p className="text-slate-300 text-sm">
                  オーダーメイドのソフトウェア。スケーラブルで保守性の高いシステムを構築。
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
                デモ・事例のご相談
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* プラン：無料MVPの範囲・上限 */}
      <section id="plan" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              無料MVPの範囲・上限
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              ご納得いただけるまで、リスクゼロでお試しいただけます
            </p>
          </div>

          <div className="bg-slate-700/30 rounded-2xl p-8 md:p-12 border border-slate-600 max-w-4xl mx-auto">
            <div className="space-y-6 text-slate-200">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">無料で提供するもの</p>
                  <p className="text-slate-300">
                    ヒアリング後、実用最小限の機能を持つMVP（Minimum Viable Product）を1つ作成。実際に使える形でお渡しします。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">無料の範囲・上限</p>
                  <p className="text-slate-300">
                    MVPは1プロジェクトあたり1回まで無料。複雑さによっては簡易版となる場合があります。詳細はヒアリング時にご説明します。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">本格導入時</p>
                  <p className="text-slate-300">
                    MVPをご評価いただき、ご納得いただけましたら月額制で本格運用開始。初期費用を抑えた導入が可能です。
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
                  無料MVPの詳細を相談する
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
              MVPファーストの開発プロセス
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">ヒアリング</h3>
              <p className="text-slate-300 text-sm mb-4">
                課題・要望を詳細にお伺いし、最適なソリューションを検討
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：要件定義書</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">MVP作成</h3>
              <p className="text-slate-300 text-sm mb-4">
                実用最小限の機能を持つMVPを作成し、価値を体験いただく
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：動作するMVP</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">評価・導入</h3>
              <p className="text-slate-300 text-sm mb-4">
                MVPを評価いただき、ご納得いただけたら月額制で本格運用
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：本番環境・運用開始</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">継続改善</h3>
              <p className="text-slate-300 text-sm mb-4">
                改善・改修を追加料金なしで継続実施
              </p>
              <p className="text-amber-400 text-sm font-medium">納品物：継続的な機能追加</p>
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
                      Excelで車両管理。担当者しか更新できず、共有も大変。データの整合性も不安だった。
                    </p>
                  </div>
                  <div className="flex-1 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <p className="text-green-400 font-semibold text-sm mb-2">After</p>
                    <p className="text-slate-300 text-sm">
                      専用システムで一元管理。誰でも更新・参照可能。OBD2連携で車両データも自動取得に。
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm italic">
                  — 車両管理システム導入事例（イメージ）
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
                無料MVPの範囲はどこまでですか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                1プロジェクトあたり、実用最小限の機能を持つMVPを1つ無料で作成します。複雑な要件の場合は簡易版となる場合があります。詳細はヒアリング時にご説明します。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                保守・サポートはどうなりますか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                本格導入後は月額制に含まれる形で、継続的な改善・改修を追加料金なしで実施します。問題発生時も迅速に対応いたします。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
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
              value="faq-4"
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 data-[state=open]:border-amber-500/50"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-6">
                MVPで満足できなかった場合は？
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                MVPは無料でお渡ししているため、本格導入されない場合でも費用は発生しません。お気軽にご検討いただけます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-5"
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
              まずは無料相談から
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              課題のヒアリング、デモのご依頼、お見積もりまで。お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  無料相談・お問い合わせ
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
