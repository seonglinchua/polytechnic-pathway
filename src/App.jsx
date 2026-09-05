/**
 * App — top-level composition.
 * Renders layout landmarks (Header, Footer) and all page sections in
 * the order defined by the wireframe. Sections are empty scaffolds for
 * this task; detailed design and content are added later.
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LocaleProvider, useLocale } from './i18n/LocaleContext.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';
import IndependenceNotice from './pages/IndependenceNotice.jsx';
import NotFound from './pages/NotFound.jsx';

const ROUTE_META = {
  '/': {
    en: ['Polytechnic Pathway | Explore Singapore Diploma Courses', 'Compare diploma options across Singapore’s five Polytechnics and connect with an independent guidance team.'],
    zh: ['理工升学之路 | 探索新加坡理工学院课程', '比较新加坡五所理工学院的文凭课程，并联系独立升学指导团队。'],
  },
  '/privacy': {
    en: ['Privacy Policy | Polytechnic Pathway', 'Learn how Polytechnic Pathway handles information shared through its website and LINE guidance service.'],
    zh: ['隐私政策 | 理工升学之路', '了解理工升学之路如何处理通过网站及LINE指导服务提供的信息。'],
  },
  '/terms': {
    en: ['Terms of Use | Polytechnic Pathway', 'Read the terms governing use of the Polytechnic Pathway website and guidance service.'],
    zh: ['使用条款 | 理工升学之路', '阅读理工升学之路网站及指导服务的使用条款。'],
  },
  '/independence': {
    en: ['Independence Notice | Polytechnic Pathway', 'Understand Polytechnic Pathway’s independent status and relationship to Singapore Polytechnics.'],
    zh: ['独立声明 | 理工升学之路', '了解理工升学之路的独立性质及其与新加坡理工学院的关系。'],
  },
};

function RouteMetadata() {
  const { pathname } = useLocation();
  const { locale } = useLocale();

  useEffect(() => {
    const fallback = locale === 'zh'
      ? ['找不到页面 | 理工升学之路', '您访问的页面不存在。']
      : ['Page Not Found | Polytechnic Pathway', 'The requested page could not be found.'];
    const [title, description] = ROUTE_META[pathname]?.[locale] ?? fallback;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [pathname, locale]);

  return null;
}

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, left: 0 });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function SkipLink() {
  const { t } = useLocale();

  return (
    <a className="skip-link" href="#main-content">
      {t.common.skipToMain}
    </a>
  );
}

function App() {
  return (
    <LocaleProvider>
      <RouteScroll />
      <RouteMetadata />
      <SkipLink />

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/"             element={<LandingPage />} />
          <Route path="/privacy"      element={<PrivacyPolicy />} />
          <Route path="/terms"        element={<TermsOfUse />} />
          <Route path="/independence" element={<IndependenceNotice />} />
          <Route path="*"             element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </LocaleProvider>
  );
}

export default App;
