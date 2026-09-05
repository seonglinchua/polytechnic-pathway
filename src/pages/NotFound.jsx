import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext.jsx';
import './legal.css';

const CONTENT = {
  en: {
    eyebrow: '404',
    title: 'Page Not Found',
    description: 'The page may have moved or the address may be incorrect.',
    action: 'Return to homepage',
  },
  zh: {
    eyebrow: '404',
    title: '找不到页面',
    description: '该页面可能已移动，或网址有误。',
    action: '返回首页',
  },
};

function NotFound() {
  const { locale } = useLocale();
  const content = locale === 'zh' ? CONTENT.zh : CONTENT.en;

  return (
    <div className="legal-page legal-page--not-found">
      <div className="container">
        <p className="legal-page__eyebrow">{content.eyebrow}</p>
        <h1 className="legal-page__title">{content.title}</h1>
        <p className="legal-page__not-found-copy">{content.description}</p>
        <Link className="btn btn--cta" to="/">{content.action}</Link>
      </div>
    </div>
  );
}

export default NotFound;
