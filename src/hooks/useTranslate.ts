import { useContext } from "react";
import { TranslateContext } from "../context/TranslationContext";

export const useTranslate = () => {
  const context = useContext(TranslateContext);

  if (!context) {
    throw new Error("use useTranslate in correct way please");
  } else {
    return context;
  }
};
