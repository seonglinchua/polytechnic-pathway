# Polytechnic Pathway

An independent, bilingual (English / Simplified Chinese) website that helps
prospective students explore **Singapore polytechnic education**, prepare for a
free preliminary review, and contact a guidance team through LINE.

**Live site:** [seonglinchua.github.io/polytechnic-pathway](https://seonglinchua.github.io/polytechnic-pathway/)

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
| Fonts | Inter-style system sans stack (body), Fraunces-style serif fallback stack (display) |
| Icons | Inline SVG, stroke-based, `aria-hidden` |
| Images | Optimised JPEG with PNG fallback through `<picture>` |
| i18n | Custom locale context (`useLocale` hook) |
| Build | Vite 6, outputs to `dist/` |
| Deployment | GitHub Actions → GitHub Pages |

---

## Requirements

- Node.js ≥ 18 (developed on Node 22)
- npm ≥ 9

---

## Getting started

```bash
npm ci               # install the locked dependency versions
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
│   │   ├── illustrations/  # reserved illustration assets
│   │   ├── images/         # hero artwork and retained design iterations
│   │   └── qr/             # reserved QR assets
│   ├── favicon.svg          # → polytechnic-pathway-icon.svg (book + pathway arrow)
│   ├── robots.txt
│   └── sitemap.xml
├── .github/
│   ├── workflows/           # GitHub Pages deployment
│   └── copilot-instructions.md
├── docs/                    # product, content, asset and design-system notes
├── references/              # preserved project references
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
├── package-lock.json
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
| Get Personalised Guidance | `sections/FreeReviewSection` | `#free-review` |
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
.btn--sm          compact modifier; critical header/CTA uses remain 44px
.btn--lg          larger padding
```

---

## Bilingual support

All user-facing text lives in `src/i18n/en.js` and `src/i18n/zh.js`.
Switch locale by clicking **EN | 中文** in the header.

The `useLocale()` hook returns `{ locale, setLocale, t }` — `t` is the full
content object for the active locale. The switch also updates the document
language, page title, metadata, accessible navigation labels and link names.

---

## Brand assets

| File | Use |
|---|---|
| `public/assets/brand/polytechnic-pathway-icon.svg` | Primary mark (180×180, book + pathway arrow) |
| `public/favicon.svg` | Browser tab icon (same as above) |
| `public/assets/icons/sp-badge.svg` etc. | Institution abbreviation badges (40×40) |
| `public/assets/images/polytechnic-pathway-singapore-landscape-book-hero-v5.jpg` | Primary hero artwork |
| `public/assets/images/polytechnic-pathway-singapore-landscape-book-hero-v5.png` | Hero fallback |

Institution badges are custom wayfinding assets, not official polytechnic
logos or brand marks.

---

## Accessibility

The current implementation includes:

- Semantic header, navigation, main, section and footer landmarks
- One page-level heading per route
- A bilingual skip link that transfers focus to the main content
- Keyboard-operable Polytechnic dropdown with focus return on Escape
- Visible focus styles, 44px primary interaction targets and reduced-motion support
- Forced-colors fallbacks for controls and focus indicators
- Descriptive new-tab labels and `noopener noreferrer` on external links

These measures do not by themselves constitute a claim of full WCAG
conformance. Screen-reader, browser-zoom and device testing remain part of
release verification.

---

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` deploys every push to
`main` and can also be started manually from GitHub Actions.

For Pages builds, Vite uses `/polytechnic-pathway/` as its base path. React
Router uses the same basename, and the workflow copies `index.html` to
`404.html` so direct visits to `/privacy`, `/terms` and `/independence` can
boot the client-side router. Local development and non-Pages builds continue
to use `/`.

To reproduce the Pages build locally:

```bash
GITHUB_PAGES=true npm run build
cp dist/index.html dist/404.html
```

---

## Sitemap

`public/sitemap.xml` points to the GitHub Pages project URL and contains
commented stubs for future routes. Add language alternates only when each
locale has its own crawlable URL.

---

## Phase status

### ✅ Phase 1 — Marketing Landing Page (complete)

- Bilingual single-page marketing site
- Hero, benefits, polytechnic directory, how-it-works, contact + CTA sections
- Structured footer with nav columns, disclaimer and copyright
- Privacy Policy, Terms of Use, Independence Notice and 404 routes
- Design token system, button standards, card standards
- Brand icon + favicon
- Keyboard, focus, contrast, reduced-motion and forced-colors improvements
- Automated GitHub Pages deployment

### 🔲 Phase 2 — Registration & Review Flow

- Free Review form (Full Name, Email, Qualification, Interests, consent)
- Account registration + secure email activation
- Review Dashboard (document upload, status tracker)
- Individual polytechnic profile pages
- Course finder with filters
- Real LINE QR code (`/assets/qr/line-qr.svg`)

### 🔲 Phase 3 — CMS / Admin

- Review management for the guidance team
- Email notification workflow
- Analytics and conversion tracking

---

## Independence

Polytechnic Pathway is an independent admissions guidance service.
It is not affiliated with, endorsed by or connected to any polytechnic
or Singapore government agency.
