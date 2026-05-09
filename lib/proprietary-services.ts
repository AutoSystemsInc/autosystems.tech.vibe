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
