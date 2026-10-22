import Page from '@/components/pages/software'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('en', 'software', '/services/software')

export default function LocalizedPage() {
  return <Page locale="en" />
}
