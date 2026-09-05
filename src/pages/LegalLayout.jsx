/**
 * LegalLayout — shared wrapper for all legal pages.
 * UI strings come from t.legal so they switch with the locale.
 */

import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext.jsx';
import './legal.css';

function LegalLayout({ title, lastUpdated, children }) {
  const { t } = useLocale();
  const ui = t.legal;

  return (
    <div className="legal-page">
      <div className="container">
        <Link className="legal-page__back" to="/">
          {ui.backToHome}
        </Link>
        <h1 className="legal-page__title">{title}</h1>
        {lastUpdated && (
          <p className="legal-page__updated">
            {ui.lastUpdated}: {lastUpdated}
          </p>
        )}
        <div className="legal-page__body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default LegalLayout;
