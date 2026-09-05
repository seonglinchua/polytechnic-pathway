# Copilot Instructions — Polytechnic Pathway

Project-specific guidance for AI assistants working in this repository.

## What this project is

An **independent**, bilingual (English / Simplified Chinese) marketing landing
page helping prospective students explore **Singapore polytechnic education**
and sign up for a free admissions review.

- Name: **Polytechnic Pathway**
- Tagline: *Your Interests. Your Pathway. Your Future.*
- Main headline: *Explore Your Polytechnic Future in Singapore.*
- Style: **premium educational travel journal** (passport, flight ticket,
  Singapore journey, course exploration).
- Palette: navy blue, warm cream, coral red, muted green, gold.

## Non-negotiable rules

1. **Independence.** Never present this as an official polytechnic or Singapore
   government website. Keep the footer independence disclaimer intact.
2. **No unapproved logos.** Do not add official polytechnic logos without
   approved assets. Directory cards use text/abbreviations only.
3. **No fabricated content.** Do not invent statistics, testimonials, or claims.
   Mark unfinished content as **"To be confirmed"**.
4. **Real institutions only:** Singapore Polytechnic (SP), Ngee Ann Polytechnic
   (NP), Nanyang Polytechnic (NYP), Temasek Polytechnic (TP), Republic
   Polytechnic (RP). Source of truth: `src/data/polytechnics.js`.
5. **No backend** in the current phase. No functional form submission.
6. **Preserve `references/`** and its files.

## Tech & conventions

- **Vite + React + JavaScript**, functional components only.
- **Modular CSS**, no Tailwind or UI framework. Load order: `variables.css` →
  `base.css` → `components.css` → `responsive.css` (in `src/main.jsx`).
- Use **design tokens** from `src/styles/variables.css`; do not hard-code
  colours, spacing, radii, shadows, z-index.
- **Mobile-first** and responsive. Keep breakpoints in `responsive.css` in sync
  with the table in `variables.css` (sm 480 / md 768 / lg 1024 / xl 1280 /
  2xl 1440).
- **Semantic, accessible** HTML: one `<h1>` (hero), landmark elements, stable
  section IDs, visible focus, skip link, `prefers-reduced-motion`.
- Keep meaningful text in HTML. Store repeated content in `src/data/` and
  locale copy in `src/i18n/` (`en.js`, `zh.js`) — never duplicate markup.
- **SVG** for icons/illustrations/decoration; **WebP/AVIF** for photos, under
  `public/assets/{brand,icons,illustrations,images,qr}/`.

## Structure

- `src/components/layout/` — Header, Footer.
- `src/components/sections/` — page sections (currently empty scaffolds with a
  temporary `DEV · <Name>` label; remove labels as sections are built).
- `src/components/ui/` — shared primitives (e.g. `SectionShell`).
- `docs/` — PRD, design system, asset inventory, content checklist. Keep the
  content checklist and asset inventory updated as work progresses.

## When adding a section

- Reuse tokens and the container/section rhythm.
- Add EN + ZH strings together; never ship one locale only.
- Update `docs/CONTENT_CHECKLIST.md` and `docs/ASSET_INVENTORY.md`.
- Remove the temporary dev label once the section has real content.
