import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-amber-400 mb-2">AutoSystems, Inc.</h3>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
              私たちについて
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
              お問い合わせ
            </Link>
          </div>
          <p className="text-slate-400">© 2025 AutoSystems, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 