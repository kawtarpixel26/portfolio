import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found — Khalil Jabour");
  return (
    <section className="container flex min-h-[70vh] max-w-3xl flex-col items-start justify-center py-32">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">This page doesn't exist.</h1>
      <p className="mt-4 text-lg text-muted-foreground">The link may be old or mistyped.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Back to the homepage</Link>
    </section>
  );
}
