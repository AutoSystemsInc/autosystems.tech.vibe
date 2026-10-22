import SiteDocument from '@/components/site-document'
import { sharedMetadata } from '@/lib/page-metadata'
import '@/app/globals.css'

export const metadata = sharedMetadata

export default function Layout({children}: {children: React.ReactNode}) {
  return <SiteDocument locale="en">{children}</SiteDocument>
}
