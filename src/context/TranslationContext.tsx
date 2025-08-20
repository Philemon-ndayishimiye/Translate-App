import { createContext } from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // let i18next handle the change
  };

  return (
    <TranslateContext.Provider
      value={{ t, lng: i18n.language, changeLanguage }}
    >
      {children}
    </TranslateContext.Provider>
  );
};
