import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"; // {} olib tashlandi
import uzTranslation from '../public/locales/uz.json';
import ruTranslation from '../public/locales/ru.json';
import enTranslation from '../public/locales/en.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: "en",
    debug: true, // 'debugger' emas, 'debug' bo'lishi kerak
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18n;
