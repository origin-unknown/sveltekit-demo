import i18n from 'sveltekit-i18n';
import en from './en';
import it from './it';
import lang from './lang';

const config = {
  translations: {
    en: {
      ...en,
      lang,
    },
    it: {
      ...it,
      lang,
    },
  },
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);
