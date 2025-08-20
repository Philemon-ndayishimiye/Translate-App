import React from "react";
import { useTranslate } from "../hooks/useTranslate";

export default function Navigation() {
  const { t, changeLanguage } = useTranslate();

  return (
    <div className="bg-blue-700 px-2 py-3 flex justify-between">
      <div>
        <h1>Philemon</h1>
      </div>
      <div>
        <h1>{t("hello this is my application")}</h1>

        <button onClick={() => changeLanguage("fr")} className="border">
          French
        </button>
        <button onClick={() => changeLanguage("en")} className="border">
          English
        </button>
      </div>
    </div>
  );
}
