import { createContext, useContext, useState, useEffect, useMemo } from "react";
import * as en from "./data/portfolio";
import * as fr from "./data/portfolio.fr";

// Textes de l'interface (hors données du portfolio)
const ui = {
  en: {
    nav: { about: "About", journey: "Journey", work: "Projects", credentials: "Credentials", contact: "Contact" },
    primaryNav: "Primary", backToTop: "Back to top", openMenu: "Open menu", closeMenu: "Close menu",
    toLight: "Switch to light theme", toDark: "Switch to dark theme", switchLang: "Passer en français",
    engStudent: "Engineering student",
    heroTitle: ["Turning complex data into ", "intelligent", ", useful systems."],
    heroIntro: "I work across the whole path of a data product: how data is collected and stored, how models learn from it, and the Java backends and interfaces that put it in people's hands.",
    iAm: (role) => `I am ${/^[aeiou]/i.test(role) ? "an" : "a"} `, viewProjects: "View projects",
    portraitOf: "Portrait of",
    about: { label: "About", title: "Data, models and the backends that carry them." },
    journey: { label: "Journey", title: "Where I'm learning and building.", intro: "Education and milestones, newest first.", current: "Current", less: "Show less", more: (n) => `Show ${n} more` },
    work: { label: "Work", title: "Selected projects.", intro: "Real repositories, described as they are today.", more: "More projects", caseStudy: "Case study", live: "Live demo" },
    credentials: { label: "Credentials", title: "Certifications & education." },
    toolkit: { label: "Toolkit", title: "What I work with.", intro: "Solid chips are used in projects. Dashed chips are chosen for work in progress.", planned: "Planned: not built yet" },
    contact: { title: "Get in touch.", linkedinMsg: "Message me on LinkedIn", copied: "Copied", copy: "Copy email", basedIn: "Based in", studyingAt: "Studying at", phone: "Phone" },
    footerTop: "Back to top",
    notFound: { title: "Page not found — Khalil Jabour", h1: "This page doesn't exist.", p: "The link may be old or mistyped.", back: "Back to the homepage" },
    writingOnDev: "Writing on DEV",
  },
  fr: {
    nav: { about: "À propos", journey: "Parcours", work: "Projets", credentials: "Formation", contact: "Contact" },
    primaryNav: "Principale", backToTop: "Retour en haut", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
    toLight: "Passer au thème clair", toDark: "Passer au thème sombre", switchLang: "Switch to English",
    engStudent: "Étudiant ingénieur",
    heroTitle: ["Transformer des données complexes en systèmes ", "intelligents", " et utiles."],
    heroIntro: "Je travaille sur tout le cycle d'un produit data : collecte et stockage des données, apprentissage des modèles, et backends Java et interfaces qui les mettent entre les mains des utilisateurs.",
    iAm: () => "Je suis ", viewProjects: "Voir les projets",
    portraitOf: "Portrait de",
    about: { label: "À propos", title: "Des données, des modèles et les backends qui les portent." },
    journey: { label: "Parcours", title: "Là où j'apprends et je construis.", intro: "Formation et étapes clés, des plus récentes aux plus anciennes.", current: "En cours", less: "Voir moins", more: (n) => `Voir ${n} de plus` },
    work: { label: "Projets", title: "Projets sélectionnés.", intro: "De vrais dépôts, décrits tels qu'ils sont aujourd'hui.", more: "Autres projets", caseStudy: "Étude de cas", live: "Démo en ligne" },
    credentials: { label: "Formation", title: "Certifications & formation." },
    toolkit: { label: "Outils", title: "Ce avec quoi je travaille.", intro: "Les pastilles pleines sont utilisées dans des projets. Les pastilles en pointillés sont prévues pour des travaux en cours.", planned: "Prévu : pas encore réalisé" },
    contact: { title: "Contactez-moi.", linkedinMsg: "Écrivez-moi sur LinkedIn", copied: "Copié", copy: "Copier l'e-mail", basedIn: "Basé à", studyingAt: "Étudie à", phone: "Téléphone" },
    footerTop: "Retour en haut",
    notFound: { title: "Page introuvable — Khalil Jabour", h1: "Cette page n'existe pas.", p: "Le lien est peut-être ancien ou mal saisi.", back: "Retour à l'accueil" },
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
