import Page from '@/components/pages/home'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('ja', 'home', '/')

export default function LocalizedPage() {
  return <Page locale="ja" />
}
