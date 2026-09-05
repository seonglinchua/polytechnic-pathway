# Polytechnic Pathway

An independent, bilingual (English / Simplified Chinese) marketing landing page
that helps prospective students explore **Singapore polytechnic education** and
sign up for a free admissions review.

> **Independence notice:** Polytechnic Pathway is an independent service. It is
> **not** an official polytechnic or a Singapore government website, and is not
> affiliated with, endorsed by, or connected to any polytechnic or government
> agency.

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | [Vite](https://vite.dev/) + [React](https://react.dev/) (JavaScript) |
| Styling | Hand-authored modular CSS — no Tailwind or UI framework |
| Fonts | Inter (body), Fraunces (display) — loaded as system fallbacks |
| Icons | Inline SVG, stroke-based, `aria-hidden` |
| Images | WebP / AVIF with `<picture>` + PNG fallback |
| i18n | Custom locale context (`useLocale` hook) |
| Build | Vite 6, outputs to `dist/` |

---

## Requirements

- Node.js ≥ 18 (developed on Node 22)
- npm ≥ 9

---

## Getting started

```bash
npm install          # install dependencies
npm run dev          # start dev server with hot reload (→ http://localhost:5173)
npm run build        # production build → dist/
npm run preview      # serve the production build locally
```

---

## Project structure

```
polytechnic-pathway/
├── public/
│   ├── assets/
│   │   ├── brand/          # logo-mark, favicon source, polytechnic-pathway-icon.svg
│   │   ├── icons/          # sp-badge.svg, np-badge.svg, nyp-badge.svg, tp-badge.svg, rp-badge.svg
│   │   ├── illustrations/  # hero layers (future)
│   │   ├── images/         # polytechnic-pathway-singapore-guidebook-hero.webp / .png
│   │   └── qr/             # line-qr.svg placeholder (replace with real QR)
│   ├── favicon.svg          # → polytechnic-pathway-icon.svg (book + pathway arrow)
│   └── sitemap.xml
├── references/              # design wireframes — preserved, not committed
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer (+ CSS)
│   │   ├── sections/        # One file + CSS per page section
│   │   └── ui/              # SectionShell (scaffold utility)
│   ├── data/
│   │   └── polytechnics.js  # Five institutions — names, URLs, badge paths
│   ├── i18n/
│   │   ├── en.js            # English content
│   │   ├── zh.js            # Simplified Chinese content
│   │   ├── index.js         # getContent() helper
│   │   └── LocaleContext.jsx # useLocale() React context
│   ├── styles/
│   │   ├── variables.css    # Design tokens (colours, spacing, radii, z-index…)
│   │   ├── base.css         # Accessible global reset
│   │   ├── components.css   # Button system, container, section-rule utility
│   │   └── responsive.css   # Global breakpoint overrides
│   ├── App.jsx              # Section composition + LocaleProvider
│   └── main.jsx             # CSS load order → ReactDOM mount
├── index.html
├── package.json
└── vite.config.js
```

---

## Page sections (Phase 1 — all complete)

| Section | Component | Anchor |
|---|---|---|
| Header (sticky) | `layout/Header` | — |
| Hero | `sections/Hero` | `#hero` |
| How We Help | `sections/BenefitsStrip` | `#benefits` |
| Explore Five Polytechnics | `sections/PolytechnicDirectory` | `#polytechnics` |
| How It Works (5 steps) | `sections/AdmissionJourney` | `#admission-journey` |
| Continue With Confidence | `sections/FreeReviewSection` | `#free-review` |
| Final CTA band | `sections/FinalCTA` | `#final-cta` |
| Footer | `layout/Footer` | — |

---

## Design system

### Tokens (`src/styles/variables.css`)

| Group | Key tokens |
|---|---|
| Navy | `--color-navy-900…500` |
| Cream | `--color-cream-50…300` |
| Coral (CTA) | `--color-accent`, `--color-accent-strong` |
| Gold | `--color-gold-400…600` |
| Green | `--color-green-400…600` |
| Cards | `--card-radius` (12px), `--card-padding` (24px), `--card-border` |
| Icons | `--icon-badge-bg/border/text` |
| External | `--color-line-green` (#00b900) |

### Buttons (`src/styles/components.css`)

```
.btn              base — min-height 44px, 6px radius, uppercase
.btn--cta         coral fill
.btn--outline     navy outline
.btn--ghost       text only
.btn--sm          36px min-height
.btn--lg          larger padding
```

---

## Bilingual support

All user-facing text lives in `src/i18n/en.js` and `src/i18n/zh.js`.
Switch locale by clicking **EN | 中文** in the header.

The `useLocale()` hook returns `{ locale, setLocale, t }` — `t` is the full
content object for the active locale.

---

## Brand assets

| File | Use |
|---|---|
| `public/assets/brand/polytechnic-pathway-icon.svg` | Primary mark (180×180, book + pathway arrow) |
| `public/favicon.svg` | Browser tab icon (same as above) |
| `public/assets/icons/sp-badge.svg` etc. | Institution abbreviation badges (40×40) |
| `public/assets/images/polytechnic-pathway-singapore-guidebook-hero.webp` | Hero illustration |

---

## Sitemap

`public/sitemap.xml` contains the Phase 1 live URL plus commented stubs for
all Phase 2 pages. Uncomment and update `<lastmod>` as each page goes live.

---

## Phase status

### ✅ Phase 1 — Marketing Landing Page (complete)

- Bilingual single-page marketing site
- Hero, benefits, polytechnic directory, how-it-works, contact + CTA sections
- Structured footer with nav columns, disclaimer and copyright
- Design token system, button standards, card standards
- Brand icon + favicon

### 🔲 Phase 2 — Registration & Review Flow

- Free Review form (Full Name, Email, Qualification, Interests, consent)
- Account registration + secure email activation
- Review Dashboard (document upload, status tracker)
- Individual polytechnic profile pages
- Course finder with filters
- Real LINE QR code (`/assets/qr/line-qr.svg`)
- Privacy Policy, Terms of Use, Independence Notice pages

### 🔲 Phase 3 — CMS / Admin

- Review management for the guidance team
- Email notification workflow
- Analytics and conversion tracking

---

## Independence

Polytechnic Pathway is an independent admissions guidance service.
It is not affiliated with, endorsed by or connected to any polytechnic
or Singapore government agency.
