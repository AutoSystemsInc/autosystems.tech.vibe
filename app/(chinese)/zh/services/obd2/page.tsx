import Page from '@/components/pages/obd2'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('zh', 'obd2', '/services/obd2')

export default function LocalizedPage() {
  return <Page locale="zh" />
}
