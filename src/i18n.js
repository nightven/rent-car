import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../localization/en";
import translationUA from "../localization/ua";

export const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ua",
  resources,
});

export default i18n;
