import Page from '@/components/pages/about'
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata('en', 'about', '/about')

export default function LocalizedPage() {
  return <Page locale="en" />
}
