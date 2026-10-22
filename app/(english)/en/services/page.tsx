import Page from '@/components/pages/services'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('en', 'services', '/services')

export default function LocalizedPage() {
  return <Page locale="en" />
}
