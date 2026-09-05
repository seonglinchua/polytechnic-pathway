/**
 * LocaleContext — provides locale state and translated content to the
 * entire component tree. Language switching is centralised here so any
 * component can read `t` without prop-drilling.
 *
 * Usage:
 *   const { locale, setLocale, t } = useLocale();
 */

import { createContext, useContext, useEffect, useState } from 'react';
import { getContent } from './index.js';

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const t = getContent(locale);

  /* Keep the <html lang> attribute in sync for screen readers */
  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hans';
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
