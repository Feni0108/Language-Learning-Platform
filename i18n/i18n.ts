import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "@/public/locales/en/common.json";
import translationHU from "@/public/locales/hu/common.json";
import translationCZ from "@/public/locales/cz/common.json";
import translationSK from "@/public/locales/sk/common.json";
import translationIS from "@/public/locales/is/common.json";

const resources = {
  en: {
    translation: translationEN
  },
  hu: {
    translation: translationHU
  },
  cz: {
    translation: translationCZ
  },
  sk: {
    translation: translationSK
  },
  is: {
    translation: translationIS
  }
};

const fallbackLng = 'en';

i18n.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  fallbackLng,
  debug: false, // Set to true for development mode
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
  backend: {
    loadPath: '/locales/{{lng}}/common.json',
  },
  detection: {
    order: ['cookie', 'htmlTag'],
    caches: ['cookie'],
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
