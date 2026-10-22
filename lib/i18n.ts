export const locales = ['ja', 'en', 'zh'] as const
export type Locale = (typeof locales)[number]

export const languageTags: Record<Locale, string> = { ja: 'ja', en: 'en', zh: 'zh-Hans' }
export const openGraphLocales: Record<Locale, string> = { ja: 'ja_JP', en: 'en_US', zh: 'zh_CN' }

export function localeFromPath(pathname: string): Locale {
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ja'
}

/** Japanese keeps the original URLs; other languages have shareable prefixes. */
export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  const stripped = path.replace(/^\/(?:en|zh)(?=\/|[?#]|$)/, '')
  const unprefixed = !stripped || /^[?#]/.test(stripped) ? `/${stripped}` : stripped
  return locale === 'ja' ? unprefixed : `/${locale}${unprefixed === '/' ? '' : unprefixed}`
}
