import type { Metadata } from "next"
import { ServiceDetail, type ServiceDetailData } from "@/components/inner-pages"

export const metadata: Metadata = {
  title: "ソフトウェア開発",
  description: "Web・モバイル・デスクトップアプリ、APIをオーダーメイドで開発。要件整理と試作から本格開発、継続的な運用保守まで支援します。",
}

const data: ServiceDetailData = {
  number: "01",
  englishTitle: "Software Development",
  title: "ソフトウェア開発",
  statement: "ビジネスに、ちょうどいい仕組みを。",
  description: "業務や顧客体験に合わせたオーダーメイド開発。対話と試作で要件を確かめ、核となる機能から段階的に実装し、運用しながら育てます。",
  variant: "software",
  flow: ["IDEA", "DEVELOP", "DELIVER"],
  overviewTitle: "業務を知ることが、開発の第一歩。",
  overview: "システムに業務を合わせるのではなく、業務に合うシステムを。ヒアリングとプロトタイプを通じて、使う人と同じイメージを共有しながら仕様を固めます。運用開始後も、ご契約に応じて機能追加・保守を継続できます。",
  highlights: ["ヒアリングと試作による要件の具体化", "ユーザー参加型の仕様検討", "優先順位を付けた段階的な開発", "拡張性と保守性を考えた設計", "運用フィードバックを活かす継続改善"],
  featureTitle: "使う場所に合わせて、最適な形に。",
  features: [
    { title: "Webアプリケーション", description: "顧客向けのサービスから社内の管理画面まで、ブラウザで使えるアプリケーションを開発します。", tags: ["フロントエンド", "バックエンドAPI", "管理画面", "ダッシュボード"] },
    { title: "モバイルアプリ", description: "iOS・Androidを対象に、利用シーンに合ったネイティブ・クロスプラットフォームアプリを設計します。", tags: ["React Native", "Flutter", "ネイティブ開発", "PWA"] },
    { title: "デスクトップアプリ", description: "Windows・Mac・Linuxでの利用を想定した、業務に密着するデスクトップアプリケーション。", tags: ["Electron", ".NET", "WPF", "クロスプラットフォーム"] },
    { title: "API・マイクロサービス", description: "複数のシステムをつなぐAPIと、拡張や連携を考えたサービスアーキテクチャを構築します。", tags: ["RESTful API", "GraphQL", "マイクロサービス", "コンテナ化"] },
    { title: "UI / UX設計", description: "業務フローを整理し、ワイヤーフレームと試作で検証。迷わず使える画面と、使い続けられる体験を考えます。", tags: ["業務フロー整理", "ワイヤーフレーム", "ユーザーテスト"] },
    { title: "継続的な運用・改善", description: "運用中の課題やフィードバックをもとに、機能追加、性能の最適化、セキュリティ更新を行います。", tags: ["機能拡張", "品質保証", "技術サポート"] },
  ],
  technologies: [
    { label: "フロントエンド", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material-UI"] },
    { label: "バックエンド", items: ["Node.js", "Python", "Java", "C#", "Go", "PHP"] },
    { label: "データベース", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
    { label: "クラウド・インフラ", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
    { label: "モバイル", items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"] },
    { label: "開発・品質管理", items: ["Jenkins", "SonarQube", "Jest", "Cypress"] },
  ],
  useCases: [
    { title: "EC・マーケットプレイス", label: "COMMERCE", description: "独自の販売フローと在庫管理をつなぎ、商品を届けるまでの業務を一つのプラットフォームに。" },
    { title: "業務管理システム", label: "BUSINESS OPERATIONS", description: "予約管理、業務基幹、生産管理など、複雑な業務フローを整理し、現場で使える仕組みを設計。" },
    { title: "顧客向け・業務用アプリ", label: "MOBILE EXPERIENCE", description: "必要な情報に必要な場所からアクセスできる、利用者の行動や業務に合うモバイルアプリ。" },
    { title: "データ分析プラットフォーム", label: "DATA & INSIGHT", description: "分散したデータを集めて可視化。ダッシュボードと分析の仕組みで、日々の意思決定を支援。" },
  ],
  process: [
    { title: "要件定義", description: "業務と課題をヒアリングし、目標、優先順位、要求仕様を整理します。" },
    { title: "設計・企画", description: "UI/UX、システム構成、技術選定を行い、開発の方向性を共有します。" },
    { title: "試作・コア開発", description: "核となる機能を試作し、ユーザーテストとフィードバックで検証します。" },
    { title: "本実装・拡張", description: "スプリント単位で開発とテストを重ね、段階的に機能を実装します。" },
    { title: "運用・保守", description: "運用状況を確認しながら、機能追加やパフォーマンス改善を継続します。" },
  ],
  pricing: [
    { title: "要件整理・試作", label: "DISCOVERY / 要相談", description: "課題整理、PoC、仕様ドラフト、概算見積もり、導入ロードマップ。" },
    { title: "本格開発", label: "DEVELOPMENT / 要相談", description: "オーダーメイド開発、品質保証、導入、ドキュメント整備。" },
    { title: "継続サポート", label: "SUPPORT / 月額制", description: "機能追加、バグ修正、性能改善、セキュリティ更新と技術サポート。" },
  ],
}

export default function SoftwarePage() { return <ServiceDetail data={data} /> }
