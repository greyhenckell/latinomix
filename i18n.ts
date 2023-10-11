// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./messages/en.json";
import fiTranslations from "./messages/fi.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  fi: {
    translation: fiTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;
