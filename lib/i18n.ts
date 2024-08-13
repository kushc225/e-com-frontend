// lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../public/locales/en/common.json';
import hinTranslations from '../public/locales/hin/common.json';

const i18next = i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: hinTranslations },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
