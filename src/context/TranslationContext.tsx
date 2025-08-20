import React, { createContext, useState, useEffect} from "react";
import i18 from "../i18/i18"; // your i18next instance

interface TransCont {
  t: (key: string, options?: Record<string, any>) => string;
  lng: string;
  changeLanguage: (lng: string) => void;
}

interface Child {
  children: React.ReactNode;
}

export const TranslateContext = createContext<TransCont | null>(null);

export const TranslationProvider = ({ children }: Child) => {
  const [lang, setLang] = useState(i18.language);

  const changeLanguage = (lng: string) => {
    i18.changeLanguage(lng); // change language in i18next
    setLang(lng); // update state to trigger re-render
  };

  // listen to i18next language changes (optional)
  useEffect(() => {
    const handleChange = (lng: string) => setLang(lng);
    i18.on("languageChanged", handleChange);
    return () => i18.off("languageChanged", handleChange);
  }, []);

  return (
    <TranslateContext.Provider
      value={{ t: i18.t.bind(i18), lng: lang, changeLanguage }}
    >
      {children}
    </TranslateContext.Provider>
  );
};
