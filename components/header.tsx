import Link from "next/link"

interface HeaderProps {
  activeSection?: "problems" | "solution" | "proof" | "plan" | "process" | "testimonials" | "faq" | "contact" | "about"
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="AutoSystems, Inc." className="h-8 w-auto mr-3" />
              <h1 className="text-xl font-bold text-amber-400">AutoSystems, Inc.</h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/#problems"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "problems"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                課題
              </Link>
              <Link
                href="/#solution"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "solution"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                解決
              </Link>
              <Link
                href="/#proof"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "proof"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                実績
              </Link>
              <Link
                href="/#plan"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "plan"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                プラン
              </Link>
              <Link
                href="/#process"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "process"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                流れ
              </Link>
              <Link
                href="/#faq"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "faq"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "about"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                私たちについて
              </Link>
              <Link
                href="/#contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "contact"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 