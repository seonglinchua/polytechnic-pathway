/**
 * i18n registry & default locale.
 * A full context/provider is added in a later task; for now this
 * exposes the locale dictionaries and a simple default.
 */

import en from './en.js';
import zh from './zh.js';

export const locales = { en, zh };

export const DEFAULT_LOCALE = 'en';

export function getContent(locale = DEFAULT_LOCALE) {
  return locales[locale] ?? locales[DEFAULT_LOCALE];
}

export { en, zh };
