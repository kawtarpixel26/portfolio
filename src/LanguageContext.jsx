import { createContext, useContext, useState, useEffect } from "react";
import * as en from "./data/portfolio";
import * as fr from "./data/portfolio.fr";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "en"; } catch { return "en"; }
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const data = lang === "fr" ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
