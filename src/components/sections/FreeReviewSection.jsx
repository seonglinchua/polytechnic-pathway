/**
 * FreeReviewSection — preparation checklist and LINE contact route.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import './freereview.css';

function FreeReviewSection() {
  const { t } = useLocale();
  const fr = t.sections.freeReview;

  return (
    <section id="free-review" className="free-review" aria-labelledby="free-review-heading">
      <div className="container">
        <header className="free-review__header">
          <h2 id="free-review-heading" className="free-review__heading">{fr.label}</h2>
          <div className="section-rule" aria-hidden="true" />
          <p className="free-review__subtext">{fr.subtext}</p>
        </header>

        <div className="free-review__grid">
          <div className="fr-card fr-card--preparation">
            <div className="fr-card__icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M7 4h10a2 2 0 0 1 2 2v14H5V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="m8 9 1.5 1.5L12 8M8 15l1.5 1.5L12 14M14 9h2M14 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="fr-card__title">{fr.preparation.title}</h3>
            <ul className="fr-preparation__list" aria-label={fr.preparation.title}>
              {fr.preparation.items.map((item, i) => (
                <li key={i} className="fr-preparation__item">{item}</li>
              ))}
            </ul>
            <p className="fr-card__note">{fr.preparation.note}</p>
          </div>

          <div className="fr-card fr-card--contact">
            <div className="fr-card__icon-wrap fr-card__icon-wrap--line" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2z" fill="white" fillOpacity="0.95" />
                <path d="M9 11h.01M12 11h.01M15 11h.01" stroke="#00b900" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="fr-card__title">{fr.contact.title}</h3>
            <p className="fr-card__desc">{fr.contact.desc}</p>
            <p className="fr-card__highlight">{fr.contact.highlight}</p>
            <a
              className="btn btn--cta btn--sm fr-card__cta"
              href="https://line.me/ti/p/@polytechnicpathway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={fr.contact.ctaExternalLabel}
            >
              {fr.contact.cta} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeReviewSection;
