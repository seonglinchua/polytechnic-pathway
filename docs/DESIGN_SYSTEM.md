# Design System — Polytechnic Pathway

Source of truth for design tokens is
[`src/styles/variables.css`](../src/styles/variables.css). This document
summarises the tokens and usage intent.

Style direction: **premium educational travel journal** — passport, flight
ticket, Singapore journey and course-exploration motifs.

## 1. Colours

| Group | Tokens | Use |
|-------|--------|-----|
| Navy blue | `--color-navy-500…900` | Primary brand, headings, dark bands |
| Warm cream | `--color-cream-50…300` | Page & surface backgrounds |
| Coral red | `--color-coral-400…600` | Accent, primary CTAs |
| Muted green | `--color-green-400…600` | Support, success states |
| Gold | `--color-gold-400…600` | Highlights, decorative details |

Semantic aliases: `--color-bg`, `--color-surface`, `--color-text`,
`--color-text-muted`, `--color-primary`, `--color-accent`, `--color-border`,
`--color-focus-ring`.

## 2. Typography

- **Display:** `--font-display` (Fraunces / serif) — headings.
- **Body:** `--font-body` (Inter + CJK fallbacks) — text & UI.
- **Mono:** `--font-mono` — labels, ticket/passport detailing.

Type scale: `--text-xs` (12px) → `--text-3xl` (fluid 40–56px).
Line heights: `--leading-tight | snug | normal | relaxed`.
Weights: 400 / 500 / 600 / 700. Tracking: tight → wider.

> Web font files are **not** bundled yet; fallbacks apply until added.

## 3. Spacing

4px base scale `--space-1` (4px) → `--space-11` (100px).
Section rhythm via `--section-padding-y`; grid gutter `--grid-gutter` (24px).

## 4. Containers

- `--container-max` 1200px (default centered container)
- `--container-wide` 1320px
- `--container-narrow` 760px
- `--container-pad-x` responsive horizontal padding

## 5. Border radii

`--radius-sm` 6 · `--radius-md` 12 (card default) · `--radius-lg` 20 ·
`--radius-xl` 28 · `--radius-pill`.

## 6. Shadows

`--shadow-xs → --shadow-xl`, tuned with a navy tint for depth on cream.

## 7. Breakpoints

| Name | Min width |
|------|-----------|
| sm | 480px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1440px (wireframe reference) |

Mobile-first; media queries live in
[`src/styles/responsive.css`](../src/styles/responsive.css) and must stay in
sync with this table.

## 8. Layering & z-index

Global: `--z-base` → `--z-toast`, incl. `--z-sticky-header`.
Hero visual layers (from wireframe L1–L5):

| Layer | Token | Content |
|-------|-------|---------|
| L1 | `--z-hero-l1` | Background contours |
| L2 | `--z-hero-l2` | Flight path & airplane |
| L3 | `--z-hero-l3` | Open passport / guidebook base |
| L4 | `--z-hero-l4` | Journey ticket overlap |
| L5 | `--z-hero-l5` | Stamp & foreground |

## 9. Accessibility

- Global reset in [`src/styles/base.css`](../src/styles/base.css).
- Visible `:focus-visible` outline via `--color-focus-ring`.
- Skip link, `prefers-reduced-motion` support, `.visually-hidden` utility.
