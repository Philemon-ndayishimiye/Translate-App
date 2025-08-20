import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import english from "../Locale/english/translation.json";
import french from "../Locale/french/translation.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: english }, // lowercase
    fr: { translation: french },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18next;
