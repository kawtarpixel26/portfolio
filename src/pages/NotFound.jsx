import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useLang } from "../LanguageContext";

export default function NotFound() {
  const { ui } = useLang();
  useDocumentTitle(ui.notFound.title);
  return (
    <section className="container flex min-h-[70vh] max-w-3xl flex-col items-start justify-center py-32">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">{ui.notFound.h1}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{ui.notFound.p}</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">{ui.notFound.back}</Link>
    </section>
  );
}
