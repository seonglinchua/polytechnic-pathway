# Business Requirements Document — Polytechnic Pathway

| Field         | Value                                           |
|---------------|-------------------------------------------------|
| Document type | Business Requirements Document (BRD)            |
| Project       | Polytechnic Pathway                             |
| Version       | 1.0                                             |
| Status        | Draft — internal team reference                 |
| Last updated  | 2026-07-30                                      |
| Owner         | To be confirmed                                 |

---

## Table of Contents

1. [Business Context](#1-business-context)
2. [Stakeholders](#2-stakeholders)
3. [Business Goals & Success Metrics](#3-business-goals--success-metrics)
4. [User Personas](#4-user-personas)
5. [Business Requirements](#5-business-requirements)
6. [Functional Requirements — Phase 1 (Landing Page)](#6-functional-requirements--phase-1-landing-page)
7. [Functional Requirements — Phase 2 (Guided Review Flow)](#7-functional-requirements--phase-2-guided-review-flow)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Compliance & Legal Constraints](#9-compliance--legal-constraints)
10. [Out of Scope](#10-out-of-scope)
11. [Assumptions & Dependencies](#11-assumptions--dependencies)
12. [Glossary](#12-glossary)

---

## 1. Business Context

### 1.1 Background

Singapore polytechnic admissions can be complex for prospective students —
particularly those whose families are unfamiliar with the local education system,
International School leavers, or students applying from overseas.

**Polytechnic Pathway** is an **independent** admissions guidance service that
helps prospective students understand their options across Singapore's five
polytechnics, prepare their documents, and receive a personalised preliminary
review before they submit an official application.

### 1.2 Service description

- The service is independent — it is **not** affiliated with, endorsed by, or
  operated by any Singapore polytechnic or government body.
- The primary offering is a **free preliminary admissions review**: a student
  submits basic information and documents; the team provides personalised
  guidance within one week.
- Ongoing consultation (after the free review) is a paid offering, scope and
  pricing to be confirmed.
- The communication channel for consultation is **LINE** (messaging app).

### 1.3 Current state (as of 2026-07-30)

| Phase | Status       | Description                                             |
|-------|--------------|---------------------------------------------------------|
| 1     | ✅ Complete   | Bilingual marketing landing page (EN / ZH)             |
| 2     | 🔲 In progress | Free Review intake form, individual poly pages, dashboard |
| 3     | 🔲 Planned    | Paid consultation, LINE integration, backend/auth       |

---

## 2. Stakeholders

| Role                   | Responsibility                                                    | Phase |
|------------------------|-------------------------------------------------------------------|-------|
| Service owner          | Strategic direction, content approval, legal sign-off             | All   |
| Admissions consultant  | Reviews submitted documents, responds to students via LINE        | 2+    |
| Lead developer         | Technical build and maintenance                                   | All   |
| Prospective student    | Primary end user — browses, submits review request                | All   |
| Parent / guardian      | Secondary user — may browse or pay for consultation               | 2+    |

---

## 3. Business Goals & Success Metrics

### 3.1 Goals

| ID   | Goal                                                                                       |
|------|--------------------------------------------------------------------------------------------|
| BG-1 | Drive qualified lead submissions (free review sign-ups) from prospective students.         |
| BG-2 | Build trust through transparency: independence notice, bilingual content, no fabrication.  |
| BG-3 | Educate prospective students about polytechnic options before they apply officially.        |
| BG-4 | Convert free-review users into paid consultation clients.                                  |
| BG-5 | Establish brand recognition as the go-to independent polytechnic guidance service.         |

### 3.2 Key performance indicators

| KPI                                         | Target (TBC)           | Phase |
|---------------------------------------------|------------------------|-------|
| Free review submissions per month           | To be confirmed        | 2     |
| Review-to-consultation conversion rate      | To be confirmed        | 2+    |
| Bounce rate on landing page                 | To be confirmed        | 1     |
| Average session duration                    | To be confirmed        | 1     |
| Mobile share of traffic                     | Expect >60 %           | 1     |
| Language split (EN vs ZH)                   | Monitor                | 1     |

---

## 4. User Personas

### 4.1 Persona A — Local prospective student

- **Age:** 15–18
- **Background:** Singapore PR or citizen, completing O-Level or N-Level
- **Goal:** Understand which polytechnic and diploma matches their interests
- **Pain point:** Overwhelmed by course choices; unsure if their results are competitive
- **Language:** English primary; may switch to ZH if more comfortable
- **Device:** Mobile-first (phone)

### 4.2 Persona B — International student / returning overseas student

- **Age:** 16–22
- **Background:** International school leaver or student returning from abroad
- **Goal:** Understand eligibility, the application process, and what to submit
- **Pain point:** No familiarity with Singapore poly admissions; parents need assurance
- **Language:** English or Chinese depending on family background
- **Device:** Mix of mobile and desktop

### 4.3 Persona C — Parent or guardian

- **Age:** 38–55
- **Background:** Supporting their child's application; may make payment decisions
- **Goal:** Understand what the service offers, that it is trustworthy, and costs
- **Pain point:** Worried about scams; wants to see independence and professionalism
- **Language:** Likely Chinese (ZH) if family is Chinese-speaking
- **Device:** Desktop or tablet likely

---

## 5. Business Requirements

| ID    | Requirement                                                                                                               | Priority   |
|-------|---------------------------------------------------------------------------------------------------------------------------|------------|
| BR-1  | The service must be presented as independent; no affiliation with any polytechnic or government body is implied.          | Must-have  |
| BR-2  | All content must be available in English and Simplified Chinese, with no locale shipping partially.                       | Must-have  |
| BR-3  | No fabricated statistics, testimonials, or claims. Unverified content is marked "To be confirmed".                        | Must-have  |
| BR-4  | Only the five official Singapore polytechnics are listed: SP, NP, NYP, TP, RP.                                            | Must-have  |
| BR-5  | The free preliminary review must be offered at no cost to the student.                                                    | Must-have  |
| BR-6  | Personal data collected via the review form must be handled in accordance with Singapore's PDPA.                          | Must-have  |
| BR-7  | The site must be mobile-friendly; target >95 % Lighthouse mobile accessibility score.                                     | Must-have  |
| BR-8  | The primary conversion action (Start Free Review) must be reachable within one tap/click from any section.                | Must-have  |
| BR-9  | Official polytechnic logos must not be used unless approved assets are provided.                                          | Must-have  |
| BR-10 | A paid consultation tier exists; pricing and scope must be confirmed before launch of Phase 3.                            | Should-have|
| BR-11 | Contact and consultation must be facilitated through LINE; LINE ID must be confirmed before go-live.                      | Must-have  |
| BR-12 | Legal pages (Privacy Policy, Terms of Use, Independence Notice) must be reviewed by a qualified person before go-live.    | Must-have  |
| BR-13 | The site must include a clear skip-navigation link and pass WCAG 2.1 AA for colour contrast.                              | Must-have  |

---

## 6. Functional Requirements — Phase 1 (Landing Page)

Phase 1 is **complete**. Requirements are recorded here as the accepted baseline.

### 6.1 Global shell

| ID      | Requirement                                                                                                       |
|---------|-------------------------------------------------------------------------------------------------------------------|
| P1-G-1  | Sticky header with logo, navigation (Polytechnics, Find a Course, How It Works), language toggle, and CTA button. |
| P1-G-2  | Language toggle switches all visible text between English and Simplified Chinese without a page reload.           |
| P1-G-3  | Navigation items with dropdowns show relevant sub-items anchoring to the corresponding section.                   |
| P1-G-4  | Footer contains brand description, navigation columns, independence disclaimer, and legal links.                  |
| P1-G-5  | Legal links route to `/privacy`, `/terms`, `/independence`.                                                       |
| P1-G-6  | A visible skip-to-main-content link is present for keyboard users.                                                |

### 6.2 Hero section

| ID      | Requirement                                                             |
|---------|-------------------------------------------------------------------------|
| P1-H-1  | Display headline, sub-headline, primary CTA (Start Free Review), and secondary CTA (Find a Course). |
| P1-H-2  | Include a trust indicator below the primary CTA ("Free preliminary review · No payment required"). |
| P1-H-3  | Display a decorative ticket / journey visual (SVG layers).              |

### 6.3 Benefits strip

| ID      | Requirement                                                             |
|---------|-------------------------------------------------------------------------|
| P1-B-1  | Display six benefit items, each with an icon, title, and short description. |
| P1-B-2  | Benefits must be visible in both EN and ZH.                             |

### 6.4 How It Works (Admission Journey)

| ID      | Requirement                                                             |
|---------|-------------------------------------------------------------------------|
| P1-A-1  | Display five numbered steps with icons, titles, and descriptions.       |
| P1-A-2  | Display three informational notes (free review, no payment, LINE consultation). |
| P1-A-3  | Include a single CTA at the bottom of the section.                      |
| P1-A-4  | Steps render as a horizontal timeline on desktop, vertical on mobile.   |

### 6.5 Polytechnic Directory

| ID      | Requirement                                                             |
|---------|-------------------------------------------------------------------------|
| P1-D-1  | Display one card per polytechnic (SP, NP, NYP, TP, RP).                 |
| P1-D-2  | Each card links to the official institution website (opens new tab) and to the free review section. |
| P1-D-3  | No official polytechnic logos on cards (text/badge only).               |
| P1-D-4  | Include a compare prompt and independence disclaimer below the cards.   |

### 6.6 Free Review section

| ID      | Requirement                                                             |
|---------|-------------------------------------------------------------------------|
| P1-F-1  | Display three information cards: Review Dashboard (Phase 2), Contact LINE, and QR Scan. |
| P1-F-2  | LINE card displays the LINE handle and a "Chat on LINE" button.         |
| P1-F-3  | QR card displays a placeholder until the real QR asset is supplied.     |
| P1-F-4  | Review Dashboard card explains the Phase 2 feature without a functional link. |

### 6.7 Final CTA band

| ID      | Requirement                                                             |
|---------|-------------------------------------------------------------------------|
| P1-C-1  | Display a closing headline, sub-copy, and primary CTA (Start Free Review). |

### 6.8 Legal pages

| ID      | Requirement                                                                                       |
|---------|---------------------------------------------------------------------------------------------------|
| P1-L-1  | `/privacy` renders the Privacy Policy in the active locale.                                       |
| P1-L-2  | `/terms` renders the Terms of Use in the active locale.                                           |
| P1-L-3  | `/independence` renders the Independence Notice in the active locale.                             |
| P1-L-4  | All legal pages include a "Back to home" link, a "Last updated" label, and a legal review reminder. |

---

## 7. Functional Requirements — Phase 2 (Guided Review Flow)

Phase 2 is **in progress**. Requirements below are the accepted target.

### 7.1 Free Review intake form (`/review`)

| ID      | Requirement                                                                                                           | Priority   |
|---------|-----------------------------------------------------------------------------------------------------------------------|------------|
| P2-R-1  | Multi-step form capturing: full name, email, nationality, current school / qualification, O/N-Level result estimate (if applicable), preferred polytechnic(s), area of interest, and supporting notes. | Must-have  |
| P2-R-2  | Form must include a PDPA consent checkbox that is unchecked by default.                                               | Must-have  |
| P2-R-3  | All form labels, placeholders, and error messages must be available in EN and ZH.                                     | Must-have  |
| P2-R-4  | Form validates required fields client-side before submission.                                                         | Must-have  |
| P2-R-5  | On submission, data is sent to a backend endpoint (or third-party form service); no data stored in the browser only.  | Must-have  |
| P2-R-6  | A confirmation screen is shown after successful submission with next-steps copy.                                      | Must-have  |
| P2-R-7  | Form must not allow submission if consent checkbox is unchecked (hard block).                                         | Must-have  |
| P2-R-8  | File upload for supporting documents (results slips, certificates); accepted types: PDF, JPG, PNG; max 10 MB per file. | Should-have|
| P2-R-9  | Upload field is optional at submission; student can return to upload later via Review Dashboard.                      | Should-have|

### 7.2 Review Dashboard (`/dashboard`)

| ID      | Requirement                                                                                                           | Priority   |
|---------|-----------------------------------------------------------------------------------------------------------------------|------------|
| P2-D-1  | Authenticated view showing the student's submitted information and current review status.                              | Must-have  |
| P2-D-2  | Status states: Submitted, Under Review, Response Sent, Consultation Scheduled.                                        | Must-have  |
| P2-D-3  | Student can upload documents after initial submission.                                                                | Must-have  |
| P2-D-4  | Authentication via secure email link (magic link / OTP); no password required.                                        | Must-have  |
| P2-D-5  | Dashboard displays the consultant's written response when status is Response Sent.                                    | Must-have  |
| P2-D-6  | Dashboard link to initiate LINE consultation is shown after review is complete.                                       | Should-have|

### 7.3 Individual polytechnic pages (`/polytechnics/:id`)

| ID      | Requirement                                                                                                           | Priority   |
|---------|-----------------------------------------------------------------------------------------------------------------------|------------|
| P2-P-1  | One page per polytechnic: `/polytechnics/sp`, `/polytechnics/np`, `/polytechnics/nyp`, `/polytechnics/tp`, `/polytechnics/rp`. | Must-have  |
| P2-P-2  | Each page shows: institution name, official website link, brief overview (TBC), and link to official course listing.  | Must-have  |
| P2-P-3  | Page includes a CTA to start the free review pre-filled with the relevant polytechnic selected.                       | Must-have  |
| P2-P-4  | No fabricated course data; link to official course pages only.                                                        | Must-have  |
| P2-P-5  | Content available in EN and ZH.                                                                                       | Must-have  |

### 7.4 Course Finder (`/courses`)

| ID      | Requirement                                                                                                           | Priority   |
|---------|-----------------------------------------------------------------------------------------------------------------------|------------|
| P2-CF-1 | Filter or search interface allowing students to browse courses by polytechnic and field of interest.                  | Should-have|
| P2-CF-2 | Each result links to the official polytechnic course page (external link).                                            | Must-have  |
| P2-CF-3 | No in-house course database; all data sourced from official polytechnic websites or a manually maintained data file.  | Must-have  |

---

## 8. Non-Functional Requirements

| ID    | Requirement                                                                                             | Category        |
|-------|---------------------------------------------------------------------------------------------------------|-----------------|
| NF-1  | All pages load in < 3 s on a 4G connection (Lighthouse FCP target).                                     | Performance     |
| NF-2  | Core bundle < 300 kB gzipped.                                                                           | Performance     |
| NF-3  | WCAG 2.1 AA compliance: colour contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text.                  | Accessibility   |
| NF-4  | All interactive elements reachable via keyboard; visible focus indicators.                              | Accessibility   |
| NF-5  | `prefers-reduced-motion` media query respected for all animations.                                      | Accessibility   |
| NF-6  | Single `<h1>` per page; landmark elements used correctly; stable section `id` attributes.               | Accessibility   |
| NF-7  | HTTPS enforced at the hosting layer; no mixed-content.                                                  | Security        |
| NF-8  | Form submissions use HTTPS POST; no credentials or tokens in query strings.                              | Security        |
| NF-9  | User-uploaded files are validated server-side (type, size); stored in a private, access-controlled location. | Security    |
| NF-10 | No third-party analytics scripts without explicit user consent (Cookie notice required if analytics added). | Privacy      |
| NF-11 | Site renders correctly on Chrome, Safari, Firefox, Samsung Internet (latest two major versions).         | Compatibility   |
| NF-12 | Responsive from 320 px to 1440 px+; mobile-first CSS approach.                                          | Responsiveness  |
| NF-13 | `sitemap.xml` kept in sync with live routes; `robots.txt` present.                                      | SEO             |
| NF-14 | `<html lang>` attribute matches active locale (en / zh).                                                | Internationalisation |

---

## 9. Compliance & Legal Constraints

| ID    | Constraint                                                                                                                                              |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| LC-1  | **PDPA (Singapore Personal Data Protection Act 2012):** Explicit consent required before collecting personal data. Privacy Policy must state data use, retention period, and contact for data requests. |
| LC-2  | **Independence disclaimer:** Every page with a form or institution reference must carry or link to the Independence Notice. No claim of official status. |
| LC-3  | **No fabrication:** Statistics (acceptance rates, salary outcomes, enrolment numbers) must not be published unless sourced from official polytechnic or MOE releases and clearly attributed. |
| LC-4  | **Official URLs only:** Links to polytechnic course pages must point to official `.edu.sg` domains.                                                     |
| LC-5  | **Legal page review:** Privacy Policy, Terms of Use, and Independence Notice are draft templates and **must be reviewed by a qualified person** before the form (Phase 2) goes live. |
| LC-6  | **LINE terms:** Use of the LINE platform for consultation must comply with LINE's Terms of Service; commercial use requires appropriate LINE account type. |

---

## 10. Out of Scope

The following are explicitly excluded from the current roadmap:

| Item                                                                 | Reason                                  |
|----------------------------------------------------------------------|-----------------------------------------|
| Official polytechnic application submission (JAE, PFP, DSTA, etc.)  | Handled directly by official portals    |
| Guaranteed admission outcomes or predictions                         | Cannot be assured; would be misleading  |
| Testimonials or student stories                                      | No fabricated content; real TBC         |
| Direct MOE / polytechnic data API integration                        | No public API available                 |
| Payment processing (Phase 1 & 2)                                     | Planned for Phase 3 only                |
| Multi-language support beyond EN / ZH                                | Not planned                             |
| Native mobile app                                                    | Web-only                                |
| Hosting / DevOps infrastructure definition                           | Separate infrastructure decision        |

---

## 11. Assumptions & Dependencies

| ID    | Assumption / Dependency                                                                                                   |
|-------|---------------------------------------------------------------------------------------------------------------------------|
| AD-1  | The service owner confirms the real LINE ID and contact email before Phase 2 go-live.                                    |
| AD-2  | A real QR code asset (`/assets/qr/line-qr.svg`) is supplied before launch.                                               |
| AD-3  | A qualified person reviews and approves all three legal pages (Privacy Policy, Terms of Use, Independence Notice).         |
| AD-4  | A backend or third-party form service (e.g. Formspree, Supabase, custom Node API) is selected before the Phase 2 form is built. |
| AD-5  | File storage for uploaded documents (e.g. S3, Supabase Storage) is provisioned and access-controlled before P2-R-8 is implemented. |
| AD-6  | Domain `polytechnicpathway.sg` is registered and DNS is controlled by the project team.                                  |
| AD-7  | Official polytechnic course listing URLs (marked `coursesUrlVerified: false` in `polytechnics.js`) are verified before launch. |
| AD-8  | All institution badge SVGs (`/assets/icons/xx-badge.svg`) are original artwork — not reproductions of official logos.    |

---

## 12. Glossary

| Term                | Definition                                                                                          |
|---------------------|-----------------------------------------------------------------------------------------------------|
| BRD                 | Business Requirements Document — describes what the business needs, not how it is built.            |
| PRD                 | Product Requirements Document — describes features and page structure.                              |
| Free preliminary review | The core free offering: student submits information; consultant provides written guidance.     |
| Consultation        | Paid follow-up with the admissions consultant, facilitated via LINE.                                |
| JAE                 | Joint Admissions Exercise — Singapore's official polytechnic admissions exercise for O-Level holders. |
| PFP                 | Polytechnic Foundation Programme — pathway for N-Level students.                                    |
| PDPA                | Personal Data Protection Act — Singapore data privacy law.                                          |
| LINE                | Messaging application used for consultation; popular in Southeast Asia.                             |
| Magic link / OTP    | Passwordless authentication method: a one-time link or code sent to the student's email.            |
| TBC                 | "To be confirmed" — placeholder for content that has not yet been approved or sourced.              |
| Phase 1             | The marketing landing page (complete).                                                              |
| Phase 2             | Guided review flow: intake form, dashboard, individual poly pages, course finder.                   |
| Phase 3             | Paid consultation tier, LINE integration, backend/auth infrastructure.                              |
