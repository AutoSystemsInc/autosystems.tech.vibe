import { ServiceDetail, type ServiceDetailData } from "@/components/inner-pages"
import { proprietaryServices } from "@/lib/proprietary-services"
import type { Locale } from "@/lib/i18n"

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

const englishData: ServiceDetailData = {
  ...data,
  title: "Remote OBD2 tracker",
  statement: "Your vehicle’s heartbeat, connected to the cloud.",
  description: "Connect to the OBD2 port to monitor vehicle condition and driving data remotely. Use that data to support fleet management, preventive maintenance, and safer driving.",
  overviewTitle: "Know your vehicle’s condition, wherever you are.",
  overview: "Collect sensor data through the vehicle’s OBD2 port and send it to the cloud over 4G/LTE. Manage it alongside GPS locations and trip history for a connected view of vehicle health and driving activity.",
  highlights: ["Real-time vehicle sensor data", "Cloud connectivity over 4G/LTE", "Diagnostic trouble code detection and alerts", "GPS location and trip history", "Preventive maintenance reminders", "Monitoring and management from your smartphone"],
  featureTitle: "From one vehicle to your entire fleet.",
  features: [
    { title: "Real-time vehicle data", description: "Read sensor information to understand your vehicle’s operating condition.", tags: ["Engine RPM", "Vehicle speed", "Coolant temperature", "Fuel consumption"] },
    { title: "4G / LTE connectivity", description: "Send collected data to the cloud for remote management, with data encryption considered in the design.", tags: ["Cloud upload", "Data encryption", "Remote monitoring"] },
    { title: "Diagnostics & alerts", description: "Detect diagnostic trouble codes and notify you of vehicle issues through the dashboard and smartphone.", tags: ["DTC detection", "Mobile alerts", "Management dashboard"] },
    { title: "GPS tracking", description: "Record current location and travel routes, keeping location information and trip history together.", tags: ["Live tracking", "Route history", "Geofencing"] },
    { title: "Vehicle security", description: "Receive alerts for unauthorized movement. Options such as remote engine shutdown depend on the vehicle and deployment conditions; please discuss your requirements with us.", tags: ["Movement detection", "Urgent alerts", "Theft prevention"] },
    { title: "Mobile application", description: "Check vehicle status, receive alerts, and review reports from your smartphone.", tags: ["Vehicle status", "Notifications", "Reports"] },
  ],
  useCases: [
    { title: "Fleet management", label: "LOGISTICS", description: "Track the location and activity of delivery vehicles, bringing together data for operational planning and preventive maintenance." },
    { title: "Rental vehicle management", label: "CAR RENTAL", description: "Manage vehicle locations, condition, and maintenance information to support theft prevention and daily rental operations." },
    { title: "Company fleet management", label: "BUSINESS FLEET", description: "Understand how work vehicles are driven and when maintenance is due, supporting safer driving and preventive care." },
    { title: "Personal vehicle monitoring", label: "PERSONAL VEHICLE", description: "Check your car’s condition from your smartphone to help identify issues early and support theft prevention." },
  ],
  process: [
    { title: "Discovery", description: "Confirm fleet size, required features, vehicle compatibility, and your operating setup." },
    { title: "Device installation", description: "Connect the device to the OBD2 port, configure connectivity, and verify operation." },
    { title: "System setup", description: "Configure accounts, management dashboards, applications, and notifications." },
    { title: "Launch & support", description: "Guide your team through operation, with maintenance and ongoing technical support." },
  ],
  pricing: [
    { title: "Devices & installation", label: "INITIAL COST", description: "Initial costs for devices and installation." },
    { title: "Connectivity & management", label: "MONTHLY FEE", description: "Monthly fees based on the number of vehicles managed." },
    { title: "Monitoring & maintenance", label: "SUPPORT", description: "System monitoring and technical support tailored to your requirements." },
  ],
}

const chineseData: ServiceDetailData = {
  ...data,
  title: "远程 OBD2 追踪器",
  statement: "将车辆的脉动，连接云端。",
  description: "连接 OBD2 接口，远程掌握车辆状态与驾驶数据。从车队管理到预防性维护与安全驾驶支持，以数据助力车辆管理。",
  overviewTitle: "无论身在何处，都能掌握车况。",
  overview: "通过车辆 OBD2 接口采集各类传感器数据，并经由 4G/LTE 上传云端。结合位置信息与行驶记录，在同一系统中了解车辆状态与驾驶行为。",
  highlights: ["实时采集车辆传感器数据", "通过 4G/LTE 连接云端", "检测故障诊断码（DTC）并发送提醒", "记录 GPS 位置与行驶历史", "预防性维护提醒", "通过智能手机查看与管理"],
  featureTitle: "从单车状态，到整个车队管理。",
  features: [
    { title: "实时车辆数据", description: "采集各类传感器信息，了解车辆的运行状况。", tags: ["发动机转速", "车速", "冷却液温度", "燃油消耗"] },
    { title: "4G / LTE 通信", description: "将采集的数据上传云端，在设计中考虑数据加密，实现远程管理。", tags: ["云端上传", "数据加密", "远程监控"] },
    { title: "故障诊断与提醒", description: "检测 DTC 故障码，通过管理看板与智能手机提醒车辆异常。", tags: ["故障码检测", "手机通知", "管理看板"] },
    { title: "GPS 位置追踪", description: "记录车辆当前位置与行驶路线，统一管理位置信息和行程记录。", tags: ["实时追踪", "路线历史", "电子围栏"] },
    { title: "车辆安全", description: "检测未经授权的移动并发送警报。远程熄火等功能需根据车辆条件与部署要求另行沟通。", tags: ["移动检测", "紧急通知", "防盗支持"] },
    { title: "移动应用", description: "通过智能手机查看车况、接收通知并浏览报告。", tags: ["车况查看", "通知接收", "报告浏览"] },
  ],
  useCases: [
    { title: "车队管理", label: "物流运输", description: "掌握多辆配送车辆的位置与运行情况，汇集支持运营优化和预防性维护的数据。" },
    { title: "租赁车辆管理", label: "汽车租赁", description: "管理车辆位置、状态与维保信息，支持防盗措施与日常车辆运营。" },
    { title: "企业车辆管理", label: "企业车队", description: "了解工作车辆的驾驶情况与保养时间，支持安全驾驶管理与预防性维护。" },
    { title: "个人车辆管理", label: "个人用车", description: "通过智能手机了解爱车状态，帮助及早发现异常并支持防盗。" },
  ],
  process: [
    { title: "需求沟通", description: "确认车辆数量、所需功能、车辆兼容性与运营安排。" },
    { title: "设备安装", description: "连接 OBD2 接口，完成通信设置与运行检查。" },
    { title: "系统配置", description: "配置账号、管理看板、应用与通知。" },
    { title: "开始运营", description: "提供操作与运营指导，并持续提供维护和技术支持。" },
  ],
  pricing: [
    { title: "设备与安装", label: "初始费用", description: "设备采购与安装工作的初始费用。" },
    { title: "通信与管理", label: "月度费用", description: "根据管理车辆数量确定月度服务费用。" },
    { title: "监控与维护", label: "技术支持", description: "系统监控与技术支持，具体内容可按需求协商。" },
  ],
}

export default function OBD2Page({ locale = "ja" }: { locale?: Locale }) { return <ServiceDetail data={locale === "zh" ? chineseData : locale === "en" ? englishData : data} locale={locale} /> }
