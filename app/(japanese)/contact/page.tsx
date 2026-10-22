import Page from '@/components/pages/contact'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('ja', 'contact', '/contact')

export default function LocalizedPage() {
  return <Page locale="ja" />
}
