import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoSystems, Inc.',
  description:
    '自社クラウドサービスと受託開発のAutoSystems。経営管理クラウド・OpenMarket（Web3×AIの分散型商品比較）・車両IoTに加え、予約システムなど業務オーダーメイド開発にも対応します。',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
