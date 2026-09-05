# Product Requirements — Polytechnic Pathway

> Status: Draft. This scaffold task establishes structure only.

## 1. Overview

Polytechnic Pathway is an **independent** marketing landing page that helps
prospective students explore Singapore polytechnic education and sign up for a
**free admissions review**.

- **Name:** Polytechnic Pathway
- **Tagline:** Your Interests. Your Pathway. Your Future.
- **Main headline:** Explore Your Polytechnic Future in Singapore.
- **Languages:** English and Simplified Chinese
- **Style:** premium educational travel journal
- **Visual themes:** passport, flight ticket, Singapore journey, course exploration
- **Colours:** navy blue, warm cream, coral red, muted green, gold

## 2. Independence & content rules

- The service is independent — **not** an official polytechnic or Singapore
  government website.
- Do **not** use official polytechnic logos without approved assets.
- Do **not** reproduce placeholder names, statistics or claims from the mock-up.
- Do **not** use mock statistics, fictional testimonials, or functional form
  submission during scaffolding.
- Mark unfinished content clearly as **"To be confirmed"**.

## 3. The five institutions

1. Singapore Polytechnic (SP)
2. Ngee Ann Polytechnic (NP)
3. Nanyang Polytechnic (NYP)
4. Temasek Polytechnic (TP)
5. Republic Polytechnic (RP)

Institution data lives in [`src/data/polytechnics.js`](../src/data/polytechnics.js).

## 4. Primary user goal

A prospective student can:

1. Understand what polytechnic education in Singapore offers.
2. Explore the five polytechnics and their official course pages.
3. Understand the admissions journey.
4. Sign up for a free admissions review (conversion).

## 5. Page structure (from wireframe)

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Header (sticky) | `layout/Header` | Nav, language switch, Apply CTA |
| 2 | Hero (layered visual) | `sections/Hero` | Passport / ticket layers L1–L5 |
| 3 | Benefits strip (floating) | `sections/BenefitsStrip` | 6 value props |
| 4 | Admissions journey | `sections/AdmissionJourney` | 6 steps |
| 5 | Polytechnic directory | `sections/PolytechnicDirectory` | 5 cards |
| 6 | Free review (conversion) | `sections/FreeReviewSection` | Form (no backend) |
| 6 | Student voices | `sections/StudentLifeSection` | Testimonials (TBC) |
| 6 | Contact | `sections/ContactSection` | Chat / QR |
| 7 | Final CTA band | `sections/FinalCTA` | Figures (TBC) + CTA |
| 8 | Footer | `layout/Footer` | Ticker, columns, disclaimer |

## 6. Technical constraints

- Vite + React + JavaScript, functional components.
- Modern modular CSS, no Tailwind / UI framework.
- Mobile-first, responsive, semantic, accessible.
- Meaningful text stays in HTML; repeated content lives in data / i18n files.
- SVG for icons/illustrations; WebP / AVIF for photos.
- Architecture prepared for EN + Simplified Chinese.
- No backend in this phase.

## 7. Out of scope (this task)

- Detailed visual design and hero layering.
- Real marketing copy, statistics, testimonials.
- Functional form submission / backend integration.
