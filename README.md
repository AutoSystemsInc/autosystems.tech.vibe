# Autosystems redesign

## Languages and local preview

The corporate website supports Japanese, English, and Simplified Chinese. Japanese retains the original URLs (`/about`, `/services`, `/contact`); English uses `/en`, and Chinese uses `/zh` (for example, `/en/about` and `/zh/about`). The header language switcher preserves the current page, query string, and section anchor. Each language has its own server-rendered document language (`ja`, `en`, `zh-Hans`), page title, description, canonical URL, and alternate-language links.

Page content is shared in `components/pages/`. The route groups `app/(japanese)/`, `app/(english)/en/`, and `app/(chinese)/zh/` provide static language-specific routes and root layouts. Shared locale/path helpers live in `lib/i18n.ts`; page metadata lives in `lib/page-metadata.ts`. The contact form keeps stable inquiry/budget values while localizing the interface, validation, server feedback, and customer auto-reply. Chinese CAPTCHA uses `zh-CN`. Set `NEXT_PUBLIC_SITE_URL` to change the public canonical origin.

The Japanese OUR PURPOSE mission sentence is immutable: `AutoSystemsの使命は、世界中のシステムを自動化し、世界中の人がアクセスできて、使えるようにすることです。` Only phrase breaks, emphasis, and layout may change. English and Chinese use separate translations.

Run `npm run build`, `node node_modules/typescript/bin/tsc --noEmit --incremental false`, and, with the local server on port 3100, `node scripts/verify-locales.mjs` to check the 21 localized routes. Set `PREVIEW_URL` to verify another local preview origin.

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/autosystems-projects/v0-autosystems-redesign)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/kXKVxDCI0c3)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/autosystems-projects/v0-autosystems-redesign](https://vercel.com/autosystems-projects/v0-autosystems-redesign)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/kXKVxDCI0c3](https://v0.dev/chat/projects/kXKVxDCI0c3)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
