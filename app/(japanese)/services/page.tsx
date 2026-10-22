import Page from '@/components/pages/services'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('ja', 'services', '/services')

export default function LocalizedPage() {
  return <Page locale="ja" />
}
