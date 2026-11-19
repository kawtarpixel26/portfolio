import { useLang } from "../LanguageContext";

export default function LangToggle() {
  const { lang, setLang, ui } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className="inline-flex h-9 items-center justify-center rounded-full border border-border px-3 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={ui.switchLang}
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
}
