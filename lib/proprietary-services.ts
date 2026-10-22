import type { Locale } from "@/lib/i18n"

export type ProprietaryService = {
  name: string
  url: string
  tagline: string
  description: string
  /** Icon / top accent: darker stops so white icon letters stay readable */
  gradient: string
  /** Tagline (bg-clip-text): light stops for contrast on dark cards */
  taglineGradient: string
  /** Decorative blob color */
  glow: string
  /** Shown in the gradient tile when `logoSrc` is omitted */
  iconLetter: string
  /** Logo under `/public` (e.g. `/openmarket-logo.png`); replaces the letter tile */
  logoSrc?: string
}

export const proprietaryServices: ProprietaryService[] = [
  {
    name: "経営管理クラウド",
    url: "https://biz-mgmt.autosystems.tech",
    tagline: "数字で見える、経営の意思決定。",
    description:
      "バラバラな経営管理を、ひとつに。すべてを、1つの画面で。",
    gradient: "from-amber-600 via-orange-600 to-rose-700",
    taglineGradient: "from-amber-200 via-amber-100 to-orange-200",
    glow: "bg-amber-500/25",
    iconLetter: "B",
    logoSrc: "/biz-mgmt-logo.png",
  },
  {
    name: "OpenMarket",
    url: "https://openmarket.autosystems.tech",
    tagline: "簡単比較。ワンクリック購入。すぐ届く。",
    description:
      "AIエージェントが、あなたにピッタリの商品を見つけ、そのまま購入。そのまま届く。",
    gradient: "from-cyan-600 via-blue-700 to-indigo-800",
    taglineGradient: "from-cyan-200 via-sky-200 to-blue-300",
    glow: "bg-cyan-500/20",
    iconLetter: "O",
    logoSrc: "/openmarket-logo.png",
  },
  {
    name: "リモートOBD2トラッカー",
    url: "https://remote-obd2.autosystems.tech",
    tagline: "車両の鼓動を、クラウドへ。",
    description:
      "OBD2から取得する詳細データをリモートで可視化。フリート管理・運行安全・保全判断をリアルタイムに。",
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    taglineGradient: "from-emerald-200 via-teal-200 to-cyan-200",
    glow: "bg-emerald-500/20",
    iconLetter: "R",
    logoSrc: "/remote-obd2-logo.png",
  },
]

const englishProprietaryServices: ProprietaryService[] = proprietaryServices.map((service, index) => ({
  ...service,
  ...[
    {
      name: "Business Management Cloud",
      tagline: "Clear numbers. Informed business decisions.",
      description: "Bring fragmented business management together. Everything in one view.",
    },
    {
      name: "OpenMarket",
      tagline: "Compare easily. Buy in one click. Get it delivered.",
      description: "An AI agent finds products that fit your needs, purchases them, and has them delivered to you.",
    },
    {
      name: "Remote OBD2 Tracker",
      tagline: "Your vehicle’s pulse, connected to the cloud.",
      description: "View detailed OBD2 data remotely. Support fleet management, driving safety, and maintenance decisions in real time.",
    },
  ][index],
}))

const chineseProprietaryServices: ProprietaryService[] = proprietaryServices.map((service, index) => ({
  ...service,
  ...[
    {
      name: "经营管理云平台",
      tagline: "看清数据，做出经营决策。",
      description: "将分散的经营管理整合起来，在一个界面掌握全局。",
    },
    {
      name: "OpenMarket",
      tagline: "轻松比较，一键购买，快速送达。",
      description: "AI 智能体为您找到合适的商品，直接完成购买，并配送到您手中。",
    },
    {
      name: "远程 OBD2 追踪器",
      tagline: "将车辆的脉搏，连接至云端。",
      description: "远程查看通过 OBD2 获取的详细数据，实时支持车队管理、行车安全和维护决策。",
    },
  ][index],
}))

export function getProprietaryServices(locale: Locale = "ja"): ProprietaryService[] {
  return locale === "zh" ? chineseProprietaryServices : locale === "en" ? englishProprietaryServices : proprietaryServices
}
