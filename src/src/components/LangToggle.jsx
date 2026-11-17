import { useLang } from "../LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className="px-3 py-1 border rounded-full text-sm"
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
}
