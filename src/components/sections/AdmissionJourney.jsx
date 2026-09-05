/**
 * AdmissionJourney — five-step process.
 * Desktop: horizontal timeline with dashed connector.
 * Mobile: vertical timeline with connecting line.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import './admissions.css';

const STEP_ICONS = [
  /* 1 Start Review — clipboard / form */
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M9 2h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>,

  /* 2 Complete Profile — person / user */
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,

  /* 3 Activate Account — envelope / email link */
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 8.5l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,

  /* 4 Upload Documents — upload arrow */
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <path d="M12 3v12M7 8l5-5 5 5"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,

  /* 5 Receive Review — checkbox / check square */
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 12l3 3 5-6"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

function AdmissionJourney() {
  const { t } = useLocale();
  const { label, subtext, ariaLabel, steps, notes, cta } = t.sections.admissionJourney;

  return (
    <section id="admission-journey" className="admissions" aria-labelledby="admissions-heading">
      <div className="container">

        {/* ── Header ── */}
        <header className="admissions__header">
          <h2 id="admissions-heading" className="admissions__heading">{label}</h2>
          <div className="section-rule" aria-hidden="true" />
          {subtext && <p className="admissions__subtext">{subtext}</p>}
        </header>

        {/* ── Five-step timeline ── */}
        <ol className="admissions__steps" role="list">
          {steps.map((step, i) => (
            <li
              key={step.num}
              className={`step${i === steps.length - 1 ? ' step--final' : ''}`}
            >
              <div className="step__num" aria-hidden="true">{step.num}</div>
              <div className="step__icon" aria-hidden="true">{STEP_ICONS[i]}</div>
              <div className="step__content">
                <p className="step__title">{step.title}</p>
                <p className="step__desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── Notes (3 pill items) ── */}
        {notes && (
          <ul className="admissions__notes" aria-label={ariaLabel}>
            {notes.map((note, i) => (
              <li key={i} className="admissions__note">{note}</li>
            ))}
          </ul>
        )}

        {/* ── Single CTA ── */}
        <div className="admissions__cta">
          <a className="btn btn--cta btn--lg" href="#free-review">{cta}</a>
        </div>

      </div>
    </section>
  );
}

export default AdmissionJourney;
