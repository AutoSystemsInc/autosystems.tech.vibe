import { ServiceDetail, type ServiceDetailData } from "@/components/inner-pages"
import type { Locale } from "@/lib/i18n"

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

const englishData: ServiceDetailData = {
  ...data,
  title: "Software development",
  statement: "Systems that fit your business.",
  description: "Custom software built around your operations and customer experience. We clarify requirements through conversation and prototypes, deliver core features in stages, and improve the system as you use it.",
  overviewTitle: "Good software starts with understanding your work.",
  overview: "Your systems should fit the way you work. Through discovery and prototypes, we build a shared understanding with the people who will use them. After launch, feature development and maintenance can continue under an ongoing agreement.",
  highlights: ["Requirements clarified through discovery and prototypes", "Specifications shaped with users", "Phased delivery based on your priorities", "Design for maintainability and growth", "Continuous improvement informed by real use"],
  featureTitle: "The right experience for every environment.",
  features: [
    { title: "Web applications", description: "Browser-based applications, from customer-facing services to internal administration tools.", tags: ["Frontend", "Backend APIs", "Admin tools", "Dashboards"] },
    { title: "Mobile applications", description: "Native and cross-platform iOS and Android applications designed around how and where they are used.", tags: ["React Native", "Flutter", "Native development", "PWA"] },
    { title: "Desktop applications", description: "Purpose-built desktop software for everyday work on Windows, macOS, and Linux.", tags: ["Electron", ".NET", "WPF", "Cross-platform"] },
    { title: "APIs & microservices", description: "APIs that connect your systems, with service architectures designed for integration and growth.", tags: ["RESTful APIs", "GraphQL", "Microservices", "Containers"] },
    { title: "UI / UX design", description: "We map workflows and validate ideas with wireframes and prototypes to create clear interfaces and experiences people can keep using.", tags: ["Workflow mapping", "Wireframes", "User testing"] },
    { title: "Ongoing operation & improvement", description: "Feature development, performance optimization, and security updates informed by operational needs and user feedback.", tags: ["Feature development", "Quality assurance", "Technical support"] },
  ],
  technologies: [
    { label: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material-UI"] },
    { label: "Backend", items: ["Node.js", "Python", "Java", "C#", "Go", "PHP"] },
    { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
    { label: "Cloud & infrastructure", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
    { label: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"] },
    { label: "Development & quality", items: ["Jenkins", "SonarQube", "Jest", "Cypress"] },
  ],
  useCases: [
    { title: "E-commerce & marketplaces", label: "COMMERCE", description: "Connect your sales workflows and inventory management in a platform that supports the journey from order to delivery." },
    { title: "Business management systems", label: "BUSINESS OPERATIONS", description: "Make complex workflows manageable with systems for bookings, core business operations, production, and more." },
    { title: "Customer & workforce apps", label: "MOBILE EXPERIENCE", description: "Mobile applications that put the right information within reach, built around the needs of your customers and teams." },
    { title: "Data analytics platforms", label: "DATA & INSIGHT", description: "Bring scattered data together. Dashboards and analytics help your team make informed decisions every day." },
  ],
  process: [
    { title: "Discovery", description: "Understand your operations and challenges, then define goals, priorities, and requirements." },
    { title: "Planning & design", description: "Align on UI/UX, system architecture, and technology choices before development." },
    { title: "Prototypes & core features", description: "Build the essential functions and validate them through user testing and feedback." },
    { title: "Development & expansion", description: "Deliver features in stages through iterative development and testing." },
    { title: "Operation & maintenance", description: "Continue adding features and improving performance based on how the system is used." },
  ],
  pricing: [
    { title: "Discovery & prototyping", label: "DISCOVERY / CUSTOM QUOTE", description: "Problem discovery, proof of concept, draft specifications, initial estimates, and an implementation roadmap." },
    { title: "Full development", label: "DEVELOPMENT / CUSTOM QUOTE", description: "Custom software development, quality assurance, rollout, and documentation." },
    { title: "Ongoing support", label: "SUPPORT / MONTHLY", description: "Feature development, bug fixes, performance improvements, security updates, and technical support." },
  ],
}

const chineseData: ServiceDetailData = {
  ...data,
  title: "软件开发",
  statement: "为您的业务，打造恰到好处的系统。",
  description: "围绕业务流程与客户体验，提供定制软件开发。通过交流与原型验证需求，从核心功能开始分阶段交付，并在实际运营中持续完善。",
  overviewTitle: "理解业务，是开发的第一步。",
  overview: "让系统适应业务需求。通过访谈与原型，与实际使用者建立共同理解，逐步明确系统规格。上线后，也可根据合作协议持续提供功能扩展与维护服务。",
  highlights: ["通过访谈与原型明确需求", "邀请用户参与功能规格讨论", "按照优先级分阶段开发", "兼顾扩展性与可维护性", "根据运营反馈持续改进"],
  featureTitle: "适合每一种使用场景。",
  features: [
    { title: "Web 应用开发", description: "从面向客户的在线服务，到企业内部管理工具，开发可直接通过浏览器使用的应用。", tags: ["前端开发", "后端 API", "管理后台", "数据看板"] },
    { title: "移动应用开发", description: "面向 iOS 与 Android，结合实际使用场景，设计原生或跨平台应用。", tags: ["React Native", "Flutter", "原生开发", "PWA"] },
    { title: "桌面应用开发", description: "面向 Windows、macOS 与 Linux，打造紧密贴合日常工作的桌面应用。", tags: ["Electron", ".NET", "WPF", "跨平台"] },
    { title: "API 与微服务", description: "构建连接多个系统的 API，并设计便于扩展与集成的服务架构。", tags: ["RESTful API", "GraphQL", "微服务", "容器化"] },
    { title: "UI / UX 设计", description: "梳理业务流程，通过线框图与原型验证设计，打造清晰易用、适合长期使用的体验。", tags: ["业务流程梳理", "线框图", "用户测试"] },
    { title: "持续运营与改进", description: "根据运营问题与用户反馈，持续增加功能、优化性能，并进行安全更新。", tags: ["功能扩展", "质量保障", "技术支持"] },
  ],
  technologies: [
    { label: "前端", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material-UI"] },
    { label: "后端", items: ["Node.js", "Python", "Java", "C#", "Go", "PHP"] },
    { label: "数据库", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
    { label: "云平台与基础设施", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
    { label: "移动开发", items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"] },
    { label: "开发与质量管理", items: ["Jenkins", "SonarQube", "Jest", "Cypress"] },
  ],
  useCases: [
    { title: "电商与交易平台", label: "电子商务", description: "连接独特的销售流程与库存管理，将下单到交付的业务整合到同一个平台。" },
    { title: "业务管理系统", label: "业务运营", description: "梳理预约管理、核心业务、生产管理等复杂流程，设计适合实际工作使用的系统。" },
    { title: "客户与员工应用", label: "移动体验", description: "围绕用户行为与工作场景，让需要的信息随时随地触手可及。" },
    { title: "数据分析平台", label: "数据洞察", description: "汇集分散的数据并实现可视化，通过看板与分析工具，支持日常决策。" },
  ],
  process: [
    { title: "需求定义", description: "了解业务与挑战，明确目标、优先级与功能需求。" },
    { title: "规划与设计", description: "确定 UI/UX、系统架构与技术选型，共同明确开发方向。" },
    { title: "原型与核心开发", description: "试作核心功能，通过用户测试与反馈验证方案。" },
    { title: "正式开发与扩展", description: "通过迭代开发与测试，分阶段实现各项功能。" },
    { title: "运营与维护", description: "结合实际运行情况，持续增加功能并优化性能。" },
  ],
  pricing: [
    { title: "需求梳理与原型", label: "需求探索 / 按需报价", description: "问题梳理、概念验证、规格草案、初步估算与实施路线图。" },
    { title: "正式开发", label: "项目开发 / 按需报价", description: "定制开发、质量保障、系统上线与文档整理。" },
    { title: "持续支持", label: "运营支持 / 月度服务", description: "功能扩展、问题修复、性能优化、安全更新与技术支持。" },
  ],
}

export default function SoftwarePage({ locale = "ja" }: { locale?: Locale }) { return <ServiceDetail data={locale === "zh" ? chineseData : locale === "en" ? englishData : data} locale={locale} /> }
