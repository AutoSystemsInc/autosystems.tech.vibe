import type { Metadata } from "next"
import { ServiceDetail, type ServiceDetailData } from "@/components/inner-pages"

export const metadata: Metadata = {
  title: "IoTデバイス開発",
  description: "センサーからクラウドまで、IoTの仕組みを一貫して開発。カスタムハードウェア、通信、リアルタイムデータ収集・分析、ダッシュボードを構築します。",
}

const data: ServiceDetailData = {
  number: "02",
  englishTitle: "IoT Device Development",
  title: "IoTデバイス開発",
  statement: "現場のデータを、次のアクションに。",
  description: "センサーからクラウドまで、IoTの仕組みを一貫して開発。リアルタイムのデータ収集と分析で、現場の見える化と自動化を支えます。",
  variant: "iot",
  flow: ["SENSE", "CONNECT", "ACT"],
  overviewTitle: "デバイスとデータを、ひとつの仕組みに。",
  overview: "ハードウェア設計、ファームウェア、通信、クラウド、そして使う人の画面まで。IoTエコシステム全体を見渡し、現場の制約とビジネスの目的に合わせて設計します。個々の機器をつなぐだけでなく、集めたデータを活かせる環境をつくります。",
  highlights: ["カスタムハードウェアの設計・開発", "センサー統合とデータ収集", "無線通信プロトコルの実装", "クラウドプラットフォーム構築", "リアルタイムデータ分析と可視化", "モバイル・Webアプリとの連携"],
  featureTitle: "つなぐ、集める、活かす。",
  features: [
    { title: "マルチプロトコル対応", description: "距離、消費電力、設置環境を考慮し、多様な無線通信から用途に合う方法を選びます。", tags: ["WiFi", "Bluetooth", "LoRaWAN", "Zigbee"] },
    { title: "データ収集・処理", description: "大量のセンサーデータを効率的に収集・蓄積。データの活用まで見据えた処理の流れを設計します。", tags: ["センサー統合", "時系列データ", "データ分析"] },
    { title: "クラウド統合", description: "AWS、Azure、GCPなどのクラウドを組み合わせ、デバイス管理とデータ活用の基盤を構築します。", tags: ["AWS", "Azure", "GCP", "MQTT"] },
    { title: "セキュアな通信", description: "デバイスからクラウドまで、通信の暗号化とセキュアなプロトコルを考慮した構成を設計します。", tags: ["暗号化", "通信保護", "デバイス管理"] },
    { title: "リアルタイム処理", description: "エッジコンピューティングを活用し、現場に近い場所でデータを処理。低遅延が求められる用途を支えます。", tags: ["エッジ処理", "リアルタイム分析", "自動制御"] },
    { title: "可視化ダッシュボード", description: "Webダッシュボードやモバイルアプリで、現場の状態を把握。データを、判断しやすい画面にまとめます。", tags: ["Webダッシュボード", "モバイルアプリ", "監視画面"] },
  ],
  technologies: [
    { label: "ハードウェア", items: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Nordic nRF", "カスタムPCB"] },
    { label: "通信プロトコル", items: ["WiFi", "Bluetooth LE", "LoRaWAN", "Zigbee", "NB-IoT", "5G"] },
    { label: "クラウド・データ連携", items: ["AWS IoT", "Azure IoT", "GCP", "MQTT", "CoAP", "Time Series DB"] },
    { label: "ソフトウェア", items: ["Embedded C/C++", "Python", "Node.js", "React", "Docker", "Kubernetes"] },
  ],
  useCases: [
    { title: "スマートファクトリー", label: "MANUFACTURING", description: "設備の状態や生産ラインをセンサーで監視。予知保全や品質管理を支える情報を、現場から収集します。" },
    { title: "スマートビルディング", label: "BUILDING MANAGEMENT", description: "照明、空調、セキュリティをつなぎ、建物の運用状況とエネルギー利用を一元的に把握します。" },
    { title: "農業IoT", label: "AGRICULTURE", description: "土壌、気象、作物の状態を継続的に観測。データをもとに栽培環境の監視や制御を支援します。" },
    { title: "ヘルスケアIoT", label: "HEALTHCARE", description: "機器のデータをリモートで確認する仕組みを検討。用途や運用要件に合わせたモニタリングを設計します。" },
  ],
  process: [
    { title: "要件分析", description: "ユースケース、技術要件、現場の制約条件を整理します。" },
    { title: "システム設計", description: "ハードウェアとソフトウェアを包括的に設計し、試作と技術検証を行います。" },
    { title: "開発・製造", description: "デバイス、ファームウェア、クラウドを連携させながら開発します。" },
    { title: "テスト・導入", description: "統合・性能テストを通じて確認し、本番環境に導入します。" },
  ],
}

export default function IoTPage() { return <ServiceDetail data={data} /> }
