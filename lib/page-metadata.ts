import type { Metadata } from 'next'
import { localizedPath, languageTags, locales, openGraphLocales, type Locale } from '@/lib/i18n'

type PageKey = 'home' | 'about' | 'services' | 'software' | 'iot' | 'obd2' | 'contact'

const copy: Record<Locale, Record<PageKey, [string, string]>> = {
  ja: {
    home: ['可能性を、動く仕組みに。', '自社クラウドサービスと受託開発のAutoSystems。経営管理クラウド、OpenMarket、車両IoTから業務システムまで、自動化の技術でビジネスを支えます。'],
    about: ['私たちについて', 'AutoSystems株式会社の使命、価値観、会社概要をご紹介します。'],
    services: ['サービス', '自社クラウドサービス、ソフトウェア開発、IoTデバイス開発、リモートOBD2トラッカー。ビジネスの課題解決と自動化を支援します。'],
    software: ['ソフトウェア開発', 'Webアプリ、業務システム、モバイルアプリをオーダーメイドで開発。構想から設計、開発、運用まで支援します。'],
    iot: ['IoTデバイス開発', 'センサー、デバイス、通信、クラウドをつなぎ、現場のデータ活用と業務の自動化を支援します。'],
    obd2: ['リモートOBD2トラッカー', '車両の状態と運転データをリモートで把握。車両管理や予防整備を支援するIoTソリューションです。'],
    contact: ['お問い合わせ', 'プロジェクトのご相談、サービスに関するご質問など、AutoSystemsへのお問い合わせはこちらから。'],
  },
  en: {
    home: ['Turning possibility into working systems.', 'AutoSystems builds cloud products, custom software, and connected IoT systems to help businesses automate and move forward.'],
    about: ['About us', 'Explore the mission, values, and company profile of AutoSystems, Inc., a technology company based in Tokyo.'],
    services: ['Services', 'Cloud products, custom software, IoT device development, and remote OBD2 tracking from AutoSystems.'],
    software: ['Software development', 'Custom web applications, business systems, and mobile apps, from discovery and design to development and ongoing operation.'],
    iot: ['IoT device development', 'Connect sensors, devices, communications, and the cloud to turn operational data into useful insights and automation.'],
    obd2: ['Remote OBD2 tracker', 'Monitor vehicle condition and driving data remotely to support fleet management and preventive maintenance.'],
    contact: ['Contact us', 'Share your project, ask about our services, or start a conversation with AutoSystems, Inc.'],
  },
  zh: {
    home: ['让可能，成为现实。', 'AutoSystems通过云端产品、定制软件和物联网系统，帮助企业实现自动化，迈出下一步。'],
    about: ['关于我们', '了解AutoSystems, Inc.的使命、价值观与公司概况。我们立足东京，让技术触手可及。'],
    services: ['服务', '探索AutoSystems的云端产品、定制软件开发、物联网设备开发与远程OBD2车辆追踪解决方案。'],
    software: ['软件开发', '从需求梳理、设计到开发与运维，为您定制Web应用、业务系统和移动应用。'],
    iot: ['物联网设备开发', '连接传感器、设备、通信与云端，让现场数据助力决策与业务自动化。'],
    obd2: ['远程OBD2车辆追踪', '远程掌握车辆状态与行驶数据，为车队管理和预防性维护提供支持。'],
    contact: ['联系我们', '分享您的项目构想，咨询服务，或与AutoSystems一起探讨下一步。'],
  },
}

export function pageMetadata(locale: Locale, key: PageKey, path: string): Metadata {
  const [title, description] = copy[locale][key]
  return {
    title: { absolute: key === 'home' ? `AutoSystems | ${title}` : `${title} | AutoSystems` },
    description,
    alternates: {
      canonical: localizedPath(path, locale),
      languages: { ...Object.fromEntries(locales.map(language => [languageTags[language], localizedPath(path, language)])), 'x-default': localizedPath(path, 'ja') },
    },
    openGraph: { title, description, locale: openGraphLocales[locale], alternateLocale: locales.filter(language => language !== locale).map(language => openGraphLocales[language]), type: 'website', siteName: 'AutoSystems, Inc.', url: localizedPath(path, locale) },
  }
}

export const sharedMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://autosystems.tech'),
  icons: { icon: '/brand-symbol.png', shortcut: '/brand-symbol.png', apple: '/brand-symbol.png' },
}
