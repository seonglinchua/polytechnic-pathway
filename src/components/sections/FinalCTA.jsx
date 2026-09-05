/**
 * FinalCTA — closing dark-navy band with icon, headline, coral CTA.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import './finalcta.css';

function FinalCTA() {
  const { t } = useLocale();
  const cta = t.sections.finalCta;

  return (
    <section id="final-cta" className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta__inner">

          {/* Icon + text */}
          <div className="final-cta__copy">
            {/* Open book / diploma icon */}
            <svg
              className="final-cta__icon"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 10h15a3 3 0 0 1 3 3v22a3 3 0 0 0-3-3H6V10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M42 10H27a3 3 0 0 0-3 3v22a3 3 0 0 1 3-3h15V10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M24 13v22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 16h11M10 21h11M10 26h7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            <div>
              <h2 id="final-cta-heading" className="final-cta__headline">
                {cta.headline}
              </h2>
              <p className="final-cta__subline">{cta.subline}</p>
            </div>
          </div>

          {/* CTA + badge */}
          <div className="final-cta__action">
            <a
              className="btn btn--cta btn--lg btn--cta-arrow"
              href="https://line.me/ti/p/@polytechnicpathway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={cta.ctaExternalLabel}
            >
              {cta.cta}
            </a>
            <p className="final-cta__badge">{cta.badge}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
