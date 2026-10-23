import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/portfolio";
import { cn } from "../lib/utils";

const navLinks = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "work", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!onHome) { setActive(""); return; }
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  const to = (id) => ({ pathname: "/", hash: `#${id}` });

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", isScrolled || isMobileOpen ? "border-b border-border/60 bg-background/75 backdrop-blur-xl" : "border-b border-transparent")}>
      <nav className="container flex h-16 max-w-6xl items-center justify-between" aria-label="Primary">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={to(link.id)}
              aria-current={active === link.id ? "true" : undefined}
              className={cn("relative rounded-full px-3.5 py-1.5 text-sm transition-colors", active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
            >
              {active === link.id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-secondary" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden md:hidden">
            <div className="container flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link key={link.id} to={to(link.id)} onClick={() => setIsMobileOpen(false)} className="rounded-lg px-3 py-3 text-lg font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
