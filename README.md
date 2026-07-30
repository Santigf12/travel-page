# Alico Tours — Travel Page

Multilingual (EN / ES / FR) travel website for Alico Tours, built with Next.js 15 and Mantine UI, showcasing handpicked travel packages, one-day tours, and destination content across Mexico.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** Mantine UI
- **Typography:** Cormorant Garamond
- **Language:** TypeScript
- **i18n:** Custom dictionary-based localization (EN / ES / FR)
- **Hosting:** TierHive static hosting (multi-region SFTP deploy)
- **CI/CD:** GitHub Actions → SFTP deploy

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Root redirect/landing
│   └── [locale]/                   # Locale-scoped routes (en/es/fr)
│       ├── layout.tsx               # Locale layout (nav, footer, providers)
│       ├── page.tsx                 # Home page
│       ├── about-mexico/
│       ├── brochures/
│       ├── contact/
│       ├── handpicked-travel/
│       │   └── [slug]/              # Individual package pages
│       ├── private-policy/
│       ├── trips/
│       │   ├── page.tsx             # Trips listing
│       │   └── [slug]/              # Individual trip pages
│       └── who-we-are/
│           ├── page.tsx
│           └── careers/
│
├── components/
│   ├── FeatureCard.tsx
│   ├── HeroCarousel.tsx
│   ├── LanguageSwitcher.tsx
│   ├── MexicoHandDrawnMap.tsx
│   ├── SiteFooter.tsx
│   ├── SiteNavigation.tsx
│   ├── SiteShell.tsx
│   ├── TripsCarousel.tsx
│   └── WhoWeAreReviewsCarousel.tsx
│
├── i18n/
│   └── dictionaries.ts             # Locale string dictionaries
│
├── theme.ts                        # Mantine theme (brand palette, typography)
│
└── types/
    ├── *.ts                        # TypeScript types per content domain
    └── data/
        └── *.json                  # Static content data (per locale/domain)
```

## Routing & Localization

All user-facing routes are nested under `app/[locale]/`, with locale (`en`, `es`, `fr`) resolved via the Next.js dynamic segment. Translated strings live in `i18n/dictionaries.ts`; structured page content (trips, brochures, careers, etc.) lives in `types/data/*.json` and is typed via matching files in `types/*.ts`.

## Content Model

Each content domain (trips, brochures, careers, contact, home, navigation, etc.) has:

- A **type definition** in `types/<domain>.ts`
- A **data file** in `types/data/<domain>.json`

This keeps content editable without touching component code, and keeps the shape of that content type-checked.

## Deployment

Static export is built (`out/`) and deployed to TierHive's multi-region static hosting via SFTP, using `lftp` mirror mode:

```bash
lftp -u santigf12 sftp://ca.1.pages.tierhive.com:3416
lcd ~/Documents/travel-page
mirror --continue --reverse --delete --parallel=4 --verbose \
  --exclude-glob '.tierhive-sync/' \
  --exclude-glob 'images/*.jpg' \
  --exclude-glob 'images/*.jpeg' \
  --exclude-glob 'images/*.png' \
  --exclude-glob 'images/*.webp' \
  --exclude-glob 'images/*.avif' \
  --exclude-glob 'images/trips/*.jpg' \
  --exclude-glob 'images/handpicked-travel/*.jpg' \
  --exclude-glob 'images/handpicked-travel/*.webp' \
  --exclude-glob 'images/handpicked-travel/*.avif' \
  out/ /www-alico-com-mx/
bye
```

> ⚠️ **Important:** TierHive uses a hidden `.tierhive-sync` folder in each remote directory to control cross-region replication. **Never delete or exclude it from remote directory listings** — if a mirror/sync tool with a `--delete` flag removes it (because it doesn't exist locally), replication to other regions silently stops. The `--exclude-glob '.tierhive-sync/'` flag above prevents this. If replication ever stops working across regions, verify this folder still exists on all remote nodes first.

Deployment currently targets the CA node (`ca.1.pages.tierhive.com`), which then replicates to all other TierHive regions automatically.

## Getting Started

```bash
npm install
npm run dev
```

Build static export:

```bash
npm run build
```
