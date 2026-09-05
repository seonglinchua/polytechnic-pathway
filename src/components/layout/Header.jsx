/**
 * Header — five-item nav, each with a dropdown, three-zone CSS Grid.
 *
 * Desktop (>= 1180px):
 *   Zone 1  190px  BrandLogo
 *   Zone 2  1fr    DesktopNavigation (5 items, all with dropdowns)
 *   Zone 3  300px  LanguageSwitcher · Get Free Review CTA
 *
 * Bilingual stability:
 *   - CSS Grid pins the three zones regardless of label width.
 *   - Each nav <li> has an inline min-width that covers both locales.
 *   - Lang toggle: fixed 5.5 rem. CTA: min-width 10.5 rem.
 *
 * Mobile (< 1180px): logo + hamburger; full-width drawer below.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { polytechnics } from '../../data/polytechnics.js';
import './header.css';

/**
 * Five nav slots. dropdown: 'polytechnics' uses PolytechnicDropdown
 * (reads the data file). All others use NavDropdown (reads t.dropdowns).
 *
 * min-width covers the wider of EN / ZH at 12 px semibold + 1 rem padding:
 *   Polytechnics / 理工学院  → 7.0 rem
 *   Explore Courses / 探索课程 → 8rem
 *   How It Works / 如何运作  → 7.5 rem
 *   Student Life / 学生生活  → 6.5 rem
 *   Fees & Support / 学费与资助 → 7.5 rem
 */
/* Phase 1: only items backed by a built page section.
   Course Finder / Student Life / Fees & Support are reserved for Phase 2.
   The Get Free Review CTA lives in Zone 3 (right side), not in the nav. */
const NAV_ITEMS = [
  { key: 'polytechnics', href: '/#polytechnics',      minWidth: '7rem',  dropdown: 'polytechnics' },
  { key: 'courseFinder', href: '/#polytechnics',      minWidth: '8rem'   }, // plain link, no dropdown
  { key: 'howItWorks',   href: '/#admission-journey', minWidth: '7.5rem' },
];

/* ── Shared dropdown hook ────────────────────────────────────── */
function useDropdown() {
  const [open, setOpen]  = useState(false);
  const wrapRef          = useRef(null);
  const btnRef           = useRef(null);
  const firstRef         = useRef(null);

  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (!wrapRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open]);

  useEffect(() => { if (open) firstRef.current?.focus(); }, [open]);

  const close = useCallback(() => { setOpen(false); btnRef.current?.focus(); }, []);
  const toggle = useCallback(() => setOpen((p) => !p), []);

  return { open, toggle, close, wrapRef, btnRef, firstRef };
}

/* ── Parent-level nav icons (shown in the trigger button) ─────── */
const PARENT_ICONS = {
  /* Polytechnics — institution / pillared building */
  polytechnics: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2L2 5.5V7h12V5.5L8 2z"
            stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <rect x="3"  y="7" width="2" height="6" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="7"  y="7" width="2" height="6" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="11" y="7" width="2" height="6" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M2 13h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  /* How It Works — numbered step flow */
  howItWorks: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="3.5" cy="4.5" r="1.8" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="3.5" cy="11.5" r="1.8" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M3.5 6.3v3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M6.5 4.5h6M6.5 11.5h6"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  /* Explore Courses — magnifying glass */
  courseFinder: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
};

/* ── Shared dropdown trigger + chevron ──────────────────────── */
function DropdownTrigger({ btnRef, open, toggle, controls, label, icon }) {
  return (
    <button
      ref={btnRef}
      className="header__nav-btn"
      aria-expanded={open}
      aria-controls={controls}
      onClick={toggle}
    >
      {icon && <span className="header__nav-parent-icon">{icon}</span>}
      {label}
      <svg
        className="header__dropdown-chevron"
        viewBox="0 0 12 8"
        width="10"
        height="8"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 1.5l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ── PolytechnicDropdown ─────────────────────────────────────── */
function PolytechnicDropdown({ label, listLabel, locale, icon }) {
  const { open, toggle, close, wrapRef, btnRef, firstRef } = useDropdown();

  return (
    <div ref={wrapRef} className="header__dropdown-wrap">
      <DropdownTrigger
        btnRef={btnRef}
        open={open}
        toggle={toggle}
        controls="polytechnics-dropdown"
        label={label}
        icon={icon}
      />
      <ul
        id="polytechnics-dropdown"
        aria-label={listLabel}
        className={`header__dropdown${open ? ' header__dropdown--open' : ''}`}
      >
        {polytechnics.map((poly, i) => (
          <li key={poly.id}>
            <a
              ref={i === 0 ? firstRef : null}
              className="header__dropdown-link"
              href={`/#polytechnic-${poly.id}`}
              onClick={close}
            >
              <span
                aria-hidden="true"
                className={`header__dropdown-badge header__dropdown-badge--${poly.id}`}
              >
                {poly.abbr}
              </span>
              <span>{locale === 'zh' ? poly.nameZh : poly.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Icons for generic dropdown sub-items ─────────────────────
   16×16 viewBox, stroke-based, aria-hidden (decorative only).
   Indexed by [navKey][itemIndex].
──────────────────────────────────────────────────────────────── */
const DROPDOWN_ICONS = {
  courseFinder: [
    /* Browse courses — compass */
    <svg key="0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10.5 5.5L8.8 9.2 5.5 10.5 7.2 6.8l3.3-1.3z"
            stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>,
    /* Filter — sliders */
    <svg key="1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor"
            strokeWidth="1.4" strokeLinecap="round"/>
    </svg>,
  ],
  howItWorks: [
    /* 1. Start Review — clipboard / form */
    <svg key="0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3.5" y="1.5" width="9" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 2v1.5h4V2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M6 6h4M6 8.5h4M6 11h2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>,
    /* 2. Complete Profile — person / user */
    <svg key="1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>,
    /* 3. Activate Your Account — envelope */
    <svg key="2" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="4" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1.5 6.5l6.5 3.5 6.5-3.5"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>,
    /* 4. Upload Documents — upload arrow */
    <svg key="3" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v8M5 5l3-3 3 3" stroke="currentColor"
            strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12v1h10v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>,
    /* 5. Receive Review — checkbox / check square */
    <svg key="4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5 8l2.5 2.5 4-4" stroke="currentColor"
            strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ],
  studentLife: [
    /* Campus experience — map pin */
    <svg key="0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z"
            stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>,
    /* Learning environment — open book */
    <svg key="1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3C6 2 3 2 2 3v10c1-1 4-1 6 0 2-1 5-1 6 0V3c-1-1-4-1-6 0z"
            stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M8 3v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>,
    /* Student support — two people */
    <svg key="2" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 13c0-2.8 2.2-5 5-5s5 2.2 5 5"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="12" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M15 13c0-2-1.3-3.5-3-4.2"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>,
  ],
  feesSupport: [
    /* Course fees — credit card */
    <svg key="0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="4" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1.5 7.5h13" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M4 10.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>,
    /* SAS — shield with check */
    <svg key="1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5L2 4v4.5C2 11.8 4.8 14.5 8 15.5c3.2-1 6-3.7 6-7V4l-6-2.5z"
            stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M5.5 8l2 2 3-3" stroke="currentColor"
            strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    /* Scholarships — award ribbon */
    <svg key="2" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="6" r="4" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5.5 9.5L4.5 14.5l3.5-2 3.5 2-1-5"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    /* Official links — external link */
    <svg key="3" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M7 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 2h4v4M14 2L8 8"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ],
};

/* ── NavDropdown (generic — reads from t.dropdowns) ─────────── */
function NavDropdown({ navKey, label, items, icon }) {
  const id = `nav-dd-${navKey}`;
  const { open, toggle, close, wrapRef, btnRef, firstRef } = useDropdown();
  const icons = DROPDOWN_ICONS[navKey] ?? [];

  return (
    <div ref={wrapRef} className="header__dropdown-wrap">
      <DropdownTrigger
        btnRef={btnRef}
        open={open}
        toggle={toggle}
        controls={id}
        label={label}
        icon={icon}
      />
      <ul
        id={id}
        role="menu"
        className={`header__dropdown${open ? ' header__dropdown--open' : ''}`}
      >
        {items.map((item, i) => (
          <li key={i} role="none">
            <a
              ref={i === 0 ? firstRef : null}
              className="header__dropdown-link header__dropdown-link--plain"
              href={item.href}
              role="menuitem"
              onClick={close}
            >
              {icons[i] && (
                <span className="header__dropdown-item-icon">{icons[i]}</span>
              )}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── BrandLogo ───────────────────────────────────────────────── */
function BrandLogo({ label }) {
  return (
    <a className="header__logo" href="/" aria-label={label}>
      <img
        src="/assets/brand/polytechnic-pathway-icon.svg"
        alt=""
        aria-hidden="true"
        className="header__logo-mark"
        width="34"
        height="34"
        loading="eager"
      />
      <span className="header__wordmark">
        <span className="header__wordmark-top">POLYTECHNIC</span>
        <span className="header__wordmark-bottom">PATHWAY</span>
      </span>
    </a>
  );
}

/* ── DesktopNavigation ───────────────────────────────────────── */
function DesktopNavigation({ t, locale }) {
  return (
    <nav className="header__nav" aria-label={t.nav.primaryNavigationLabel}>
      <ul role="list" className="header__nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.key} style={{ minWidth: item.minWidth }}>
            {item.dropdown === 'polytechnics' ? (
              <PolytechnicDropdown
                label={t.nav[item.key]}
                listLabel={t.nav.polytechnicListLabel}
                locale={locale}
              />
            ) : item.dropdown ? (
              <NavDropdown
                navKey={item.key}
                label={t.nav[item.key]}
                items={t.dropdowns[item.dropdown]}
              />
            ) : (
              <a className="header__nav-link" href={item.href}>
                {t.nav[item.key]}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── LanguageSwitcher ────────────────────────────────────────── */
function LanguageSwitcher({ locale, onToggle, ariaLabel }) {
  return (
    <button className="header__lang-toggle" onClick={onToggle} aria-label={ariaLabel}>
      <span className={locale === 'en' ? 'header__lang--active' : 'header__lang--dim'}>
        EN
      </span>
      <span className="header__lang-sep" aria-hidden="true">|</span>
      <span className={locale === 'zh' ? 'header__lang--active' : 'header__lang--dim'}>
        中文
      </span>
    </button>
  );
}

/* ── HeaderCTA ───────────────────────────────────────────────── */
function HeaderCTA({ label }) {
  return (
    <a className="btn btn--cta btn--sm header__cta" href="/#free-review">
      {label}
    </a>
  );
}

/* ── MobileMenu ──────────────────────────────────────────────── */
function MobileMenu({ open, t, locale, onLocaleToggle, onClose }) {
  return (
    <div
      id="header-mobile-menu"
      className={`header__mobile-menu${open ? ' header__mobile-menu--open' : ''}`}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile navigation">
        <ul role="list" className="header__mobile-nav-list">
          {NAV_ITEMS.map(({ key, href }) => (
            <li key={key}>
              <a className="header__mobile-nav-link" href={href} onClick={onClose}>
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__mobile-actions">
          <LanguageSwitcher
            locale={locale}
            onToggle={onLocaleToggle}
            ariaLabel={t.nav.languageLabel}
          />
          <a
            className="btn btn--cta header__mobile-cta"
            href="/#free-review"
            onClick={onClose}
          >
            {t.nav.getFreeReview}
          </a>
        </div>
      </nav>
    </div>
  );
}

/* ── Header (main export) ────────────────────────────────────── */
function Header() {
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen]  = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const menuBtnRef               = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1180px)');
    const h  = (e) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [menuOpen]);

  const toggleLocale = () => setLocale(locale === 'en' ? 'zh' : 'en');
  const closeMenu    = () => setMenuOpen(false);

  return (
    <header
      id="site-header"
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
    >
      <div className="container">
        <div className="header__inner">

          {/* Zone 1 — Brand */}
          <BrandLogo label={`${t.brand.name} — ${t.nav.homeLabel}`} />

          {/* Zone 2 — Desktop nav (hidden <= 1180px) */}
          <DesktopNavigation t={t} locale={locale} />

          {/* Zone 3 — Right actions (hidden <= 1180px) */}
          <div className="header__actions">
            <LanguageSwitcher
              locale={locale}
              onToggle={toggleLocale}
              ariaLabel={`${t.nav.languageLabel}: switch to ${locale === 'en' ? '中文' : 'English'}`}
            />
            <HeaderCTA label={t.nav.getFreeReview} />
          </div>

          {/* Mobile hamburger (hidden >= 1180px) */}
          <button
            ref={menuBtnRef}
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="header-mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((p) => !p)}
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <line x1="3"  y1="6.5"  x2="21" y2="6.5"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3"  y1="12"   x2="21" y2="12"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3"  y1="17.5" x2="21" y2="17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      <MobileMenu
        open={menuOpen}
        t={t}
        locale={locale}
        onLocaleToggle={toggleLocale}
        onClose={closeMenu}
      />
    </header>
  );
}

export default Header;
