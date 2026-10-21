import type { Metadata } from 'next'
import { GoogleTagManager } from '@/components/google-tag-manager'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AutoSystems | 可能性を、動く仕組みに。',
    template: '%s | AutoSystems',
  },
  description:
    '自社クラウドサービスと受託開発のAutoSystems。経営管理クラウド・OpenMarket（Web3×AIの分散型商品比較）・車両IoTに加え、予約システムなど業務オーダーメイド開発にも対応します。',
  icons: {
    icon: '/brand-symbol.png',
    shortcut: '/brand-symbol.png',
    apple: '/brand-symbol.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
