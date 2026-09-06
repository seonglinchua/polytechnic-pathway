/**
 * Hero section — headline, subtext, CTA buttons and illustration image.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import './hero.css';

function Hero() {
  const { t } = useLocale();
  const hero = t.sections.hero;

  return (
    <>
      <section id="hero" className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero__inner">

            {/* ── Left: text content ── */}
            <div className="hero__copy">
              <h1 id="hero-heading" className="hero__headline">
                {hero.line1}<br />
                <span className="hero__headline-coral">{hero.line2}</span><br />
                {hero.line3}
              </h1>
              <div className="hero__accent-line" aria-hidden="true" />
              <p className="hero__subtext">{hero.subtext}</p>

              <div className="hero__ctas">
                <a className="btn btn--cta btn--lg" href="#free-review">
                  {hero.ctaPrimary}
                </a>
                <a className="btn btn--outline btn--lg hero__cta-secondary" href="#polytechnics">
                  {hero.ctaSecondary}
                </a>
              </div>
              <p className="hero__trust">{hero.trustCopy}</p>
            </div>

            {/* ── Right: illustration ── */}
            <div className="hero__visual">
              <picture>
                <source
                  srcSet={`${import.meta.env.BASE_URL}assets/images/polytechnic-pathway-singapore-landscape-book-hero-v5.jpg`}
                  type="image/jpeg"
                />
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/polytechnic-pathway-singapore-landscape-book-hero-v5.png`}
                  alt=""
                  aria-hidden="true"
                  className="hero__image"
                  loading="eager"
                  decoding="async"
                  draggable="false"
                />
              </picture>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
