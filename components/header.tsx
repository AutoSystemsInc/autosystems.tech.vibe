import Link from "next/link"

interface HeaderProps {
  activeSection?: "about" | "promises" | "services" | "contact"
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "about"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                ABOUT
              </Link>
              <Link
                href="/#promises"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "promises"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                PROMISES
              </Link>
              <Link
                href="/#services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "services"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                SERVICES
              </Link>
              <Link
                href="/#contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === "contact"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 