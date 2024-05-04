import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const languageKey = "selectedLanguage";

const selectedLanguage = localStorage.getItem(languageKey) || "en";

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: selectedLanguage,
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(languageKey, lng);
});

export default i18n;
