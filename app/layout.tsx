import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoSystems, Inc.',
  description: 'MVPファーストのアプローチで、お客様のリスクを最小限に抑えながら、継続的な価値創造を実現する革新的な開発企業',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
