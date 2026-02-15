import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoSystems, Inc.',
  description: '無料MVPで始めるシステム開発会社。車両管理・業務効率化・IoTを初期費用ゼロで始められます。',
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
