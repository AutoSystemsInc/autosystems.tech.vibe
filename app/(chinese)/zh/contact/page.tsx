import Page from '@/components/pages/contact'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('zh', 'contact', '/contact')

export default function LocalizedPage() {
  return <Page locale="zh" />
}
