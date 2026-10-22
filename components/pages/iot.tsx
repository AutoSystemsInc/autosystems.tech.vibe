import { ServiceDetail, type ServiceDetailData } from "@/components/inner-pages"
import type { Locale } from "@/lib/i18n"

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

const englishData: ServiceDetailData = {
  ...data,
  title: "IoT device development",
  statement: "Turn real-world data into your next action.",
  description: "Integrated IoT development, from sensors to the cloud. Real-time data collection and analysis help you understand what is happening on site and automate the next step.",
  overviewTitle: "Devices and data, working as one.",
  overview: "Hardware, firmware, connectivity, cloud services, and the interfaces people use. We design the complete IoT ecosystem around your business goals and real-world constraints, creating an environment where connected devices deliver useful data.",
  highlights: ["Custom hardware design and development", "Sensor integration and data collection", "Wireless communication protocols", "Cloud platform development", "Real-time analytics and visualization", "Mobile and web application integration"],
  featureTitle: "Connect. Collect. Put data to work.",
  features: [
    { title: "Multiple connectivity options", description: "We select wireless technologies to fit your use case, considering range, power consumption, and the installation environment.", tags: ["WiFi", "Bluetooth", "LoRaWAN", "Zigbee"] },
    { title: "Data collection & processing", description: "Collect and store sensor data efficiently, with processing pipelines designed for how the data will be used.", tags: ["Sensor integration", "Time-series data", "Data analytics"] },
    { title: "Cloud integration", description: "Build a foundation for device management and data use with cloud services including AWS, Azure, and GCP.", tags: ["AWS", "Azure", "GCP", "MQTT"] },
    { title: "Secure communication", description: "Design device-to-cloud architectures with encrypted communication and secure protocols in mind.", tags: ["Encryption", "Communication security", "Device management"] },
    { title: "Real-time processing", description: "Process data close to where it is generated using edge computing, supporting applications that require low latency.", tags: ["Edge computing", "Real-time analytics", "Automated control"] },
    { title: "Visualization dashboards", description: "Understand conditions on site through web dashboards and mobile apps that turn data into clear, actionable views.", tags: ["Web dashboards", "Mobile apps", "Monitoring"] },
  ],
  technologies: [
    { label: "Hardware", items: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Nordic nRF", "Custom PCBs"] },
    { label: "Connectivity", items: ["WiFi", "Bluetooth LE", "LoRaWAN", "Zigbee", "NB-IoT", "5G"] },
    { label: "Cloud & data integration", items: ["AWS IoT", "Azure IoT", "GCP", "MQTT", "CoAP", "Time Series DB"] },
    { label: "Software", items: ["Embedded C/C++", "Python", "Node.js", "React", "Docker", "Kubernetes"] },
  ],
  useCases: [
    { title: "Smart factories", label: "MANUFACTURING", description: "Monitor equipment and production lines with sensors, collecting the information needed for predictive maintenance and quality management." },
    { title: "Smart buildings", label: "BUILDING MANAGEMENT", description: "Connect lighting, climate control, and security for a unified view of building operations and energy use." },
    { title: "Agricultural IoT", label: "AGRICULTURE", description: "Continuously observe soil, weather, and crop conditions to support monitoring and control of the growing environment." },
    { title: "Healthcare IoT", label: "HEALTHCARE", description: "Explore remote access to device data, with monitoring designed around the intended use and operational requirements." },
  ],
  process: [
    { title: "Requirements analysis", description: "Clarify your use cases, technical requirements, and on-site constraints." },
    { title: "System design", description: "Design hardware and software together, then prototype and validate the technology." },
    { title: "Development & production", description: "Develop the device, firmware, and cloud services as an integrated system." },
    { title: "Testing & rollout", description: "Verify integration and performance before deployment to the operating environment." },
  ],
}

const chineseData: ServiceDetailData = {
  ...data,
  title: "物联网设备开发",
  statement: "让现场数据，驱动下一步行动。",
  description: "从传感器到云端，提供一体化物联网开发。通过实时数据采集与分析，支持现场可视化管理和业务自动化。",
  overviewTitle: "让设备与数据，协同工作。",
  overview: "从硬件设计、固件、通信与云平台，到用户实际操作的界面，统筹整个物联网生态。结合现场限制与业务目标进行设计，连接设备，更让采集到的数据发挥价值。",
  highlights: ["定制硬件设计与开发", "传感器集成与数据采集", "无线通信协议实现", "云平台构建", "实时数据分析与可视化", "移动与 Web 应用集成"],
  featureTitle: "连接、采集、创造价值。",
  features: [
    { title: "多协议连接", description: "综合考虑通信距离、功耗与安装环境，从多种无线技术中选择适合实际用途的方案。", tags: ["WiFi", "Bluetooth", "LoRaWAN", "Zigbee"] },
    { title: "数据采集与处理", description: "高效采集和存储大量传感器数据，并围绕后续应用设计数据处理流程。", tags: ["传感器集成", "时序数据", "数据分析"] },
    { title: "云平台集成", description: "结合 AWS、Azure、GCP 等云服务，构建设备管理与数据应用的基础平台。", tags: ["AWS", "Azure", "GCP", "MQTT"] },
    { title: "安全通信", description: "从设备到云端，在架构设计中充分考虑通信加密与安全协议。", tags: ["数据加密", "通信保护", "设备管理"] },
    { title: "实时处理", description: "通过边缘计算，在更接近现场的位置处理数据，支持对低延迟有要求的应用。", tags: ["边缘计算", "实时分析", "自动控制"] },
    { title: "可视化看板", description: "通过 Web 看板与移动应用掌握现场状态，将数据整理为便于判断和行动的界面。", tags: ["Web 看板", "移动应用", "监控界面"] },
  ],
  technologies: [
    { label: "硬件", items: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Nordic nRF", "定制 PCB"] },
    { label: "通信协议", items: ["WiFi", "Bluetooth LE", "LoRaWAN", "Zigbee", "NB-IoT", "5G"] },
    { label: "云平台与数据集成", items: ["AWS IoT", "Azure IoT", "GCP", "MQTT", "CoAP", "时序数据库"] },
    { label: "软件", items: ["Embedded C/C++", "Python", "Node.js", "React", "Docker", "Kubernetes"] },
  ],
  useCases: [
    { title: "智慧工厂", label: "制造业", description: "通过传感器监测设备与生产线，从现场采集支持预测性维护与质量管理的信息。" },
    { title: "智慧楼宇", label: "楼宇管理", description: "连接照明、空调与安防设备，统一掌握建筑运营状态与能源使用情况。" },
    { title: "农业物联网", label: "智慧农业", description: "持续观测土壤、气象与作物状态，利用数据支持种植环境的监测与控制。" },
    { title: "医疗健康物联网", label: "医疗健康", description: "探索远程查看设备数据的方案，根据实际用途与运营要求设计监测系统。" },
  ],
  process: [
    { title: "需求分析", description: "梳理使用场景、技术要求与现场限制条件。" },
    { title: "系统设计", description: "统筹硬件与软件设计，完成原型制作与技术验证。" },
    { title: "开发与制造", description: "协同开发设备、固件与云服务，构建一体化系统。" },
    { title: "测试与部署", description: "完成集成与性能测试后，部署到实际运营环境。" },
  ],
}

export default function IoTPage({ locale = "ja" }: { locale?: Locale }) { return <ServiceDetail data={locale === "zh" ? chineseData : locale === "en" ? englishData : data} locale={locale} /> }
