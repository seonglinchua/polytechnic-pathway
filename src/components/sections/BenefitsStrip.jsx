/**
 * BenefitsStrip — four value-prop cards (Course Finder, Admissions Review,
 * Student Life, Fees & SAS) per the reference design.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import './benefits.css';

const ICONS = {
  /* All Five, One Place — two-column comparison (fa-table-columns) */
  clearOptions: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="7" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="14" y="4" width="7" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M10.5 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  /* Find the Right Course — magnifying glass (fa-magnifying-glass) */
  courseDiscovery: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  /* Know What to Submit — list with checkmarks (fa-list-check) */
  documentGuidance: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7l2 2 3-3M10 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13l2 2 3-3M10 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 19l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  /* Independent Team Review — person with checkmark (fa-user-check) */
  studentSupport: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M2 21c0-3.9 3.1-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M15 14l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  /* Reply Within One Week — envelope (fa-envelope) */
  feesSupport: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M2 8.5l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  /* Free to Get Started — wallet (fa-wallet) */
  freeReview: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 9V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M2 9h20" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17" cy="15" r="1.5" fill="currentColor"/>
    </svg>
  ),
};

function BenefitsStrip() {
  const { t } = useLocale();
  const { items } = t.sections.benefits;

  return (
    <section id="benefits" className="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        <h2 id="benefits-heading" className="benefits__heading">
          {t.sections.benefits.label}
        </h2>
        <div className="benefits__grid">
          {items.map((item) => (
            <article key={item.id} className="benefit-card">
              <div className="benefit-card__icon" aria-hidden="true">
                {ICONS[item.id]}
              </div>
              <h3 className="benefit-card__title">{item.title}</h3>
              <p className="benefit-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsStrip;
