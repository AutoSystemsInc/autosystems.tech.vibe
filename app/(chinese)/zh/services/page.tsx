import Page from '@/components/pages/services'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('zh', 'services', '/services')

export default function LocalizedPage() {
  return <Page locale="zh" />
}
