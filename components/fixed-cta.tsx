'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function FixedCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link href="/contact">
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          無料相談
        </Button>
      </Link>
    </div>
  )
}
