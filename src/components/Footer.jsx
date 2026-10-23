import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} {profile.name} · {profile.role}, {profile.location}</p>
      <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
        Back to top <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
      </a>
    </div>
  </footer>
);
export default Footer;
