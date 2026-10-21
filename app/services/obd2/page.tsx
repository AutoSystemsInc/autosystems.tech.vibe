import type { Metadata } from "next"
import { ServiceDetail, type ServiceDetailData } from "@/components/inner-pages"
import { proprietaryServices } from "@/lib/proprietary-services"

export const metadata: Metadata = {
  title: "リモートOBD2トラッカー",
  description: "OBD2から車両状態と運転データをリモートで取得・監視。4G/LTE通信、GPS位置追跡、故障診断通知で車両管理と予防整備を支援します。",
}

const data: ServiceDetailData = {
  number: "03",
  englishTitle: "Remote OBD2 Tracker",
  title: "リモートOBD2トラッカー",
  statement: "車両の鼓動を、クラウドへ。",
  description: "OBD2ポートにつないで、車両の状態と運転データをリモートで把握。フリート管理から予防整備、安全運転支援まで、データで車両管理を支えます。",
  variant: "obd2",
  flow: ["VEHICLE", "4G / LTE", "CLOUD"],
  overviewTitle: "離れていても、車両の状態がわかる。",
  overview: "車両のOBD2ポートから各種センサー情報を取得し、4G/LTE通信でクラウドに送信。位置情報や運転履歴と合わせて管理することで、車両の状態から運転行動まで、ひとつの仕組みで把握できます。",
  highlights: ["車両センサー情報のリアルタイム取得", "4G/LTE通信によるクラウド連携", "故障コード（DTC）の検知・通知", "GPSによる位置情報と運転履歴の記録", "予防整備のタイミング通知", "スマートフォンからの確認・管理"],
  featureTitle: "一台の状態から、全体の管理まで。",
  features: [
    { title: "リアルタイムデータ取得", description: "各種センサー情報を取得し、車両のコンディションを把握します。", tags: ["エンジン回転数", "車速", "冷却水温度", "燃料消費量"] },
    { title: "4G / LTE通信", description: "取得したデータをクラウドに送信。データの暗号化を考慮したリモート管理を行います。", tags: ["クラウド送信", "データ暗号化", "リモート監視"] },
    { title: "故障診断・通知", description: "DTCコードを検知し、管理画面やスマートフォンへの通知で車両の異常を知らせます。", tags: ["故障コード検出", "スマホ通知", "管理画面"] },
    { title: "GPS位置追跡", description: "車両の現在地と走行ルートを記録。位置情報と運転履歴を合わせて管理します。", tags: ["リアルタイム追跡", "ルート履歴", "ジオフェンス"] },
    { title: "車両のセキュリティ", description: "不正な移動を検知してアラートで通知。遠隔エンジン停止などの対応は、車両や導入条件に応じてご相談ください。", tags: ["移動検知", "緊急通知", "盗難対策"] },
    { title: "モバイルアプリ", description: "スマートフォンから車両状態を確認し、通知の受信やレポートの閲覧を行えます。", tags: ["状態確認", "通知受信", "レポート閲覧"] },
  ],
  useCases: [
    { title: "フリート管理", label: "LOGISTICS", description: "複数の配送車両の位置と稼働状況を把握。運行の見直しや予防整備に役立つデータを集約します。" },
    { title: "レンタカー管理", label: "CAR RENTAL", description: "車両の位置、状態、メンテナンス情報を管理。盗難対策と日々の車両運用を支援します。" },
    { title: "企業車両管理", label: "BUSINESS FLEET", description: "現場で使う車両の運転状況や整備タイミングを把握し、安全運転の管理と予防整備を支えます。" },
    { title: "個人車両管理", label: "PERSONAL VEHICLE", description: "愛車のコンディションをスマートフォンで確認。異常の早期把握や盗難対策に役立てます。" },
  ],
  process: [
    { title: "要件ヒアリング", description: "管理台数、必要な機能、車両の条件、運用体制を確認します。" },
    { title: "デバイス設置", description: "OBD2ポートへ接続し、通信設定と動作確認を行います。" },
    { title: "システム構築", description: "アカウント、管理ダッシュボード、アプリ、通知を設定します。" },
    { title: "運用開始", description: "操作や運用方法をご案内し、メンテナンスと継続的なサポートを行います。" },
  ],
  pricing: [
    { title: "デバイス・設置", label: "INITIAL COST", description: "デバイス代金と設置作業にかかる初期費用。" },
    { title: "通信・管理", label: "MONTHLY FEE", description: "管理する車両台数に応じた月額料金。" },
    { title: "監視・保守", label: "SUPPORT", description: "システム監視と技術サポート。必要な内容をご相談ください。" },
  ],
  externalUrl: proprietaryServices.find((service) => service.url.includes("remote-obd2"))?.url,
}

export default function OBD2Page() { return <ServiceDetail data={data} /> }
