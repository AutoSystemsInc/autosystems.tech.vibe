import { GoogleTagManager } from '@/components/google-tag-manager'
import { languageTags, type Locale } from '@/lib/i18n'

export default function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <html lang={languageTags[locale]}><body><GoogleTagManager />{children}</body></html>
}
