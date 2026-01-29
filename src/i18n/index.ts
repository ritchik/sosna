// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { pl } from './pl';
import { en } from './en';

const savedLanguage = localStorage.getItem('language') || 'pl';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl,
      en,
    },
    lng: savedLanguage,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
