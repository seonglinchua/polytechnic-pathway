/**
 * PolytechnicDirectory — five institution cards.
 *
 * Each card is an <article> (not a link) to avoid nested-anchor issues.
 * Two explicit CTAs per card:
 *   1. Primary "Explore Courses" → official course listing, new tab
 *   2. Secondary "Official Website ↗" → external official homepage, new tab
 *
 * Below the cards: Compare All Courses CTA + independence disclaimer.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import { polytechnics } from '../../data/polytechnics.js';
import './polytechnic-directory.css';

function PolytechnicDirectory() {
  const { t, locale } = useLocale();
  const dir = t.sections.polytechnicDirectory;

  return (
    <section
      id="polytechnics"
      className="poly-dir"
      aria-labelledby="poly-dir-heading"
    >
      <div className="container">

        {/* ── Section header ── */}
        <header className="poly-dir__header">
          <h2 id="poly-dir-heading" className="poly-dir__heading">
            {dir.label}
          </h2>
          <div className="section-rule" aria-hidden="true" />
          <p className="poly-dir__subtext">{dir.subtext}</p>
        </header>

        {/* ── Five institution cards ── */}
        <div className="poly-dir__grid">
          {polytechnics.map((poly) => {
            const name = locale === 'zh' ? poly.nameZh : poly.name;
            const exploreLabel = `${dir.exploreCoursesPrefix} ${poly.abbr} ${dir.exploreCoursesSuffix}`;
            const desc = `${dir.cardDescPre} ${name}${dir.cardDescPost}`;

            return (
              <article
                key={poly.id}
                id={`polytechnic-${poly.id}`}
                className={`poly-card poly-card--${poly.id}`}
              >

                <span
                  className="poly-card__badge"
                  aria-hidden="true"
                >
                  {poly.abbr}
                </span>

                <h3 className="poly-card__name">{name}</h3>

                <p className="poly-card__desc">{desc}</p>

                <div className="poly-card__actions">
                  {/* Primary: verified official course listing */}
                  <a
                    className="poly-card__explore"
                    href={poly.coursesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${exploreLabel} — ${name}; ${t.common.opensInNewTab}`}
                  >
                    {exploreLabel} ↗
                  </a>

                  {/* Secondary: official homepage in new tab */}
                  <a
                    className="poly-card__official"
                    href={poly.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} — ${dir.visitWebsite}; ${t.common.opensInNewTab}`}
                  >
                    {dir.visitWebsite} ↗
                  </a>
                </div>

              </article>
            );
          })}
        </div>

        {/* ── Compare All Courses CTA ── */}
        <div className="poly-dir__compare">
          <div className="poly-dir__compare-text">
            <h3 className="poly-dir__compare-heading">{dir.compareHeading}</h3>
            <p className="poly-dir__compare-subtext">{dir.compareSubtext}</p>
          </div>
          <a className="btn btn--outline poly-dir__compare-cta" href="#free-review">
            {dir.compareCta}
          </a>
        </div>

        {/* ── Independence disclaimer ── */}
        <p className="poly-dir__disclaimer">{dir.disclaimer}</p>

      </div>
    </section>
  );
}

export default PolytechnicDirectory;
