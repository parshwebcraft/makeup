# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for "Bright & Beauty by Jiya Vadhwani," a bridal/makeup artist business in Udaipur, Rajasthan, India. It's a Next.js 15 (App Router) site whose primary purpose is local SEO and lead generation — every page ships structured data (JSON-LD) and drives visitors to a WhatsApp-based booking flow rather than a traditional backend form submission. There is no database, auth, or API layer.

## Commands

```bash
npm run dev      # start dev server (Next.js)
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint (ESLint, flat config via eslint-config-next)
```

There is no test suite configured in this repo.

## Environment

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID (see `.env.example`). `GoogleAnalytics` (`src/components/GoogleAnalytics.tsx`) renders nothing if this is unset.

## Architecture

**Stack**: Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS 3, Framer Motion, lucide-react icons. Path alias `@/*` → `src/*`.

**Content is centralized, not hardcoded in components.** `src/data/content.ts` is the single source of truth for all business content — services, packages/pricing, portfolio items, testimonials, FAQs, Instagram posts, brand/contact info (`BRAND_DATA`), hero copy, etc., each with a typed interface (`ServiceItem`, `PackageDetail`, `PortfolioItem`, `TestimonialItem`, `FAQItem`, `InstagramPost`). Components import from here rather than embedding copy. When updating pricing, services, or testimonials, edit `content.ts`, not the components.

**SEO is centralized in `src/config/seo.ts`.** `SEO_CONFIG` holds domain, business identity, geo-coordinates, and contact info used across metadata and JSON-LD. `generateMetadataObj({ title, description, path, image })` is the standard way every route builds its Next.js `Metadata` export (canonical URL, OpenGraph, Twitter card, robots) — follow this pattern for any new page rather than hand-rolling metadata. `KEYWORD_STRATEGY_MAP` documents the keyword → page → intent mapping the site is optimized against (see `docs/FIRST_MONTH_SEO_STRATEGY_AND_REPORTING.md` and `docs/GBP_OPTIMIZATION_AND_LOCAL_SEO.md` for the broader SEO/GBP strategy this content and structure implements).

**Structured data**: `src/components/JsonLd.tsx` emits multiple `<script type="application/ld+json">` blocks (BeautySalon/LocalBusiness, Person, WebSite, and optionally FAQPage, BreadcrumbList, Service) built from `SEO_CONFIG` and `SERVICES`. Every page includes a `<JsonLd>` with page-appropriate `breadcrumbs`/`faqs`/`serviceSchema` props — follow the pattern in `src/app/services/bridal-makeup/page.tsx` when adding a new page.

**Routing**: standard App Router under `src/app/`. `/` (`page.tsx`) is a large client component (`"use client"`) that composes section components in order (Navbar → Hero → TrustStrip → AboutSection → ... → Footer) and owns the booking modal's open/close and selected-service state, passed down via `onOpenBooking` callbacks. Service detail pages live under `src/app/services/<slug>/page.tsx` as server components with per-page metadata and JSON-LD. Legal/utility pages (privacy, terms, refund, disclaimer, cookies, support, faq, about, portfolio, reviews) are standalone routes. `sitemap.ts`, `robots.ts`, and `manifest.ts` are Next.js metadata route handlers, not static files — the sitemap's page list must be kept in sync manually when routes are added/removed.

**Booking flow**: there is no backend. `BookingModal` (`src/components/BookingModal.tsx`) collects name/phone/date/time/service/location/notes, validates required fields client-side, then builds a formatted message and opens `https://wa.me/<number>?text=<encoded message>` in a new tab — i.e., booking = redirecting to a pre-filled WhatsApp chat with `BRAND_DATA.whatsappNumber`. Any change to the booking experience happens here, not via API routes (there are none).

**Styling**: Tailwind with a custom brand palette defined in `tailwind.config.ts` (ivory, espresso, champagne, blush, gold tones) plus custom `luxury`/`gold-glow` box-shadows and gradients. Two Google fonts are loaded in `src/app/layout.tsx` via `next/font/google` and exposed as CSS variables (`--font-cormorant` for serif headings, `--font-jakarta` for sans body text) — use the existing `font-serif`/`font-sans` Tailwind classes rather than adding new font imports.

**Images**: served from `public/images/{about,instagram,portfolio}/...` and referenced by path from `content.ts`. `next.config.mjs` allows remote images from `images.unsplash.com` and `images.pexels.com` only — add new hostnames there if introducing other external image sources.
