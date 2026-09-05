/**
 * Footer — four-column structured footer.
 * Columns: Brand | Explore | Support | Legal
 * Followed by a disclaimer row and bottom copyright bar.
 */

import { useLocale } from '../../i18n/LocaleContext.jsx';
import './footer.css';

function Footer() {
  const { t } = useLocale();
  const f = t.footer;

  return (
    <footer id="site-footer" className="site-footer">

      {/* ── Main columns ── */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Brand column */}
            <div className="footer__brand">
              <a
                className="footer__logo"
                href="/"
                aria-label={`${t.brand.name} — ${f.homeLabel}`}
              >
                <img
                  src="/assets/brand/polytechnic-pathway-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="footer__logo-mark"
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <span className="footer__wordmark">
                  <span className="footer__wordmark-top">POLYTECHNIC</span>
                  <span className="footer__wordmark-bottom">PATHWAY</span>
                </span>
              </a>
              <p className="footer__description">{f.description}</p>
            </div>

            {/* Nav columns (Explore | Support | Legal) */}
            {f.columns.map((col) => (
              <nav
                key={col.title}
                className="footer__col"
                aria-label={col.title}
              >
                <h3 className="footer__col-heading">{col.title}</h3>
                <ul role="list" className="footer__col-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="footer__link"
                        href={link.href}
                        {...(link.external ? {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          'aria-label': link.externalLabel,
                        } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

          </div>
        </div>
      </div>

      {/* ── Independence disclaimer ── */}
      <div className="footer__disclaimer-row">
        <div className="container">
          <p className="footer__disclaimer">{f.disclaimer}</p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">{f.copyright}</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
