import Page from '@/components/pages/iot'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('en', 'iot', '/services/iot')

export default function LocalizedPage() {
  return <Page locale="en" />
}
