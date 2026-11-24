import { createContext, useContext, useState, useEffect, useMemo } from "react";
import * as en from "./data/portfolio";
import * as fr from "./data/portfolio.fr";

// Textes de l'interface (hors données du portfolio)
const ui = {
  en: {
    nav: { home: "Home", about: "About", journey: "Journey", work: "Projects", credentials: "Credentials", contact: "Contact" },
    primaryNav: "Primary", backToTop: "Back to top", openMenu: "Open menu", closeMenu: "Close menu",
    toLight: "Switch to light theme", toDark: "Switch to dark theme", switchLang: "Passer en français", resume: "Resume",
    engStudent: "Computer Science student",
    heroTitle: ["Building ", "smart", " web experiences, powered by data."],
    heroIntro: "I design and build full-stack applications, turn raw data into clear insights, and explore how AI can make products smarter and more useful.",
    iAm: (role) => `I am ${/^[aeiou]/i.test(role) ? "an" : "a"} `, viewProjects: "View projects",
    portraitOf: "Portrait of",
    about: { label: "About", title: "From interface to insight, with a bit of AI.", path: "~/portfolio/about_me.md", status: "status: learning_and_building", files: "Files", content: "Active file content", editing: "EDITING" },
    journey: { label: "Journey", title: "Where I'm learning and building.", intro: "Education and milestones, newest first.", current: "Current", less: "Show less", more: (n) => `Show ${n} more` },
    work: { label: "Work", title: "Selected projects.", intro: "Real repositories, described as they are today.", more: "More projects", caseStudy: "Case study", live: "Live demo", view: "View project", all: "View all projects", featured: "Featured", soon: "Link coming soon" },
    credentials: { label: "Credentials", title: "Certifications & education." },
    contact: { title: "Get in touch.", linkedinMsg: "Message me on LinkedIn", copied: "Copied", copy: "Copy email", basedIn: "Based in", studyingAt: "Studying at", phone: "Phone", whatsapp: "WhatsApp", email: "Email" },
    footerTop: "Back to top",
    notFound: { title: "Page not found — Kawtar Imzilne", h1: "This page doesn't exist.", p: "The link may be old or mistyped.", back: "Back to the homepage" },
    writingOnDev: "Writing on DEV",
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", journey: "Parcours", work: "Projets", credentials: "Formation", contact: "Contact" },
    primaryNav: "Principale", backToTop: "Retour en haut", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
    toLight: "Passer au thème clair", toDark: "Passer au thème sombre", switchLang: "Switch to English", resume: "Resume",
    engStudent: "Étudiante en informatique",
    heroTitle: ["Créer des expériences web ", "intelligentes", ", alimentées par la data."],
    heroIntro: "Je conçois des applications full-stack, transforme des données brutes en analyses claires et explore comment l'IA peut rendre les produits plus intelligents et plus utiles.",
    iAm: () => "Je suis ", viewProjects: "Voir les projets",
    portraitOf: "Portrait de",
    about: { label: "À propos", title: "De l'interface à l'insight, avec une touche d'IA.", path: "~/portfolio/a_propos.md", status: "statut : apprend_et_construit", files: "fichiers", content: "contenu du fichier actif", editing: "ÉDITION" },
    journey: { label: "Parcours", title: "Là où j'apprends et je construis.", intro: "Formation et étapes clés, des plus récentes aux plus anciennes.", current: "En cours", less: "Voir moins", more: (n) => `Voir ${n} de plus` },
    work: { label: "Projets", title: "Projets sélectionnés.", intro: "De vrais dépôts, décrits tels qu'ils sont aujourd'hui.", more: "Autres projets", caseStudy: "Étude de cas", live: "Démo en ligne", view: "Voir le projet", all: "Voir tous les projets", featured: "À la une", soon: "Lien bientôt disponible" },
    credentials: { label: "Formation", title: "Certifications & formation." },
    contact: { title: "Contactez-moi.", linkedinMsg: "Écrivez-moi sur LinkedIn", copied: "Copié", copy: "Copier l'e-mail", basedIn: "Basé à", studyingAt: "Étudie à", phone: "Téléphone", whatsapp: "WhatsApp", email: "E-mail" },
    footerTop: "Retour en haut",
    notFound: { title: "Page introuvable — Kawtar Imzilne", h1: "Cette page n'existe pas.", p: "Le lien est peut-être ancien ou mal saisi.", back: "Retour à l'accueil" },
    writingOnDev: "Articles sur DEV",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "en"; } catch { return "en"; }
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, data: lang === "fr" ? fr : en, ui: ui[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
