// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: { "BLOGNEWS": "English Transllation Works" },
  },
  de: {
    translation: { "BLOGNEWS": "German Transllation Works" },
  },
  pl: {
    translation: { "BLOGNEWS": "Polish Transllation Works" },
  },
  nl: {
    translation: { "BLOGNEWS": "ndetherland Transllation Works" },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
