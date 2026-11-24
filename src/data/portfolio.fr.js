// ============================================================================
//  DONNÉES DU PORTFOLIO (VERSION FRANÇAISE)
//  Même structure que portfolio.js : seuls les textes sont traduits.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. PROFIL
// ---------------------------------------------------------------------------
export const profile = {
  name: "Kawtar Imzilne",
  monogram: "KI",
  role: "Développeuse Full-Stack & Data Analyst",
  location: "Casablanca, Maroc",
  school: "FST Settat (FSTS)",

  email: "kawtarimziln@gmail.com",
  whatsapp: "06 99 77 96 00",
  whatsappHref: "https://wa.me/212699779600",
  phone: "",
  phoneHref: "",

  links: {
    github: "https://github.com/kawtarpixel26",
    linkedin: "https://www.linkedin.com/in/kawtar-imzilne-305315339",
  },

  summary:
    "Étudiante en informatique basée à Casablanca. Je construis des applications web full-stack, des interfaces propres et responsives jusqu'aux API et bases de données qui les font tourner. En tant que data analyst, je transforme des données brutes en analyses claires qui aident à prendre de meilleures décisions, et j'explore comment l'IA peut rendre les produits plus intelligents et plus utiles. J'aime apprendre de nouveaux outils, résoudre de vrais problèmes et transformer des idées en produits qui fonctionnent.",

  customCursor: true,
};

// ---------------------------------------------------------------------------
// 2. HERO
// ---------------------------------------------------------------------------
export const heroRoles = ["Développeuse Full-Stack", "Data Analyst", "Passionnée d'IA"];

export const heroCaptions = [
  { text: "Développeuse Full-Stack", certified: false },
  { text: "Étudiante en informatique", certified: false },
  { text: "Data Analyst · Passionnée d'IA", certified: false },
];

export const stats = [
  { value: "4+", label: "Projets" },
  { value: "2+", label: "Expérience" },
  { value: "2+", label: "Clients satisfaits" },
];

export const techStack = {
  label: "Expertise technique",
  frontend: { title: "Technologies Frontend", items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "ReactJS", icon: "react" },
      { name: "NextJS", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Framer Motion", icon: "framer" },
    ] },
  backend: { title: "Technologies Backend", items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Laravel", icon: "laravel" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Firebase", icon: "firebase" },
    ] },
  tools: { title: "Outils de développement & productivité", items: [
      { name: "Antigravity", icon: "antigravity" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
      { name: "Notion", icon: "notion" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "XAMPP", icon: "xampp" },
    ] },
};

// ---------------------------------------------------------------------------
// 3. À PROPOS
// ---------------------------------------------------------------------------
export const focusAreas = [
  {
    file: "full_stack.tsx",
    title: "Développement full-stack",
    body: "Des applications web responsives de l'interface à l'API : React et Next.js côté front, Node.js et FastAPI côté back, avec MongoDB, MySQL ou PostgreSQL derrière.",
    tools: ["React", "Next.js", "TypeScript", "Laravel", "Node.js", "FastAPI", "REST"],
    tags: ["React", "Next.js", "Laravel"],
  },
  {
    file: "data_analysis.py",
    title: "Analyse de données",
    body: "Transformer des données brutes en réponses claires : nettoyer, explorer et visualiser les jeux de données pour décider sur des faits plutôt que des intuitions.",
    tools: ["Python", "SQL", "MySQL", "PostgreSQL", "Visualisation"],
  },
  {
    file: "ai_lab.py",
    title: "Exploration de l'IA",
    body: "Curieuse de voir comment les modèles peuvent rendre les produits plus intelligents : expérimenter le machine learning et l'exposer derrière une API.",
    tools: ["Python", "FastAPI", "Machine learning", "APIs"],
  },
  {
    file: "workflow.yml",
    title: "Outils & méthode",
    body: "Un workflow propre et reproductible : Git et GitHub pour le versionnage, Docker pour les environnements, Vercel pour le déploiement et Postman pour tester les API.",
    tools: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
];

// ---------------------------------------------------------------------------
// 4. PARCOURS
// ---------------------------------------------------------------------------
export const journey = [
  {
    kind: "work",
    role: "Développeuse Full-Stack freelance",
    company: "Freelance",
    type: "Missions clients",
    period: "En cours",
    location: "Casablanca, Maroc",
    metrics: ["2+ clients satisfaits"],
    highlights: [
      "Conception et développement de sites web pour des clients, du premier brief jusqu'à la mise en ligne.",
      "Front-ends responsives avec React, Next.js et Tailwind CSS.",
      "Back-ends et API avec Laravel, Node.js et MySQL.",
      "Déploiement sur Vercel et maintenance continue.",
    ],
    stack: ["React", "Next.js", "Laravel", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    kind: "education",
    role: "Licence en Génie Informatique",
    company: "FST Settat",
    type: "Licence",
    period: "2023 — 2026",
    location: "Settat, Maroc",
    metrics: [],
    highlights: ["Licence en génie informatique à la Faculté des Sciences et Techniques de Settat.", "Programmation, bases de données, développement web et génie logiciel."],
    stack: ["Programmation", "Bases de données", "Développement web", "Génie logiciel"],
  },
  {
    kind: "education",
    role: "Tronc commun MIP",
    company: "FST Settat",
    type: "Deux ans",
    period: "Avant 2024",
    location: "Settat, Maroc",
    metrics: [],
    highlights: ["Deux ans de mathématiques, d'informatique et de physique à la Faculté des Sciences et Techniques de Settat."],
    stack: ["Mathématiques", "Informatique", "Physique"],
  },
];

// ---------------------------------------------------------------------------
// 5. PROJETS
//    (status reste en anglais : "Built" | "Prototype" | "In design")
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    title: "MovieMix",
    featured: true,
    summary:
      "Une application full-stack de découverte de films : tendances et sorties à venir, recherche, bandes-annonces, favoris et liste à regarder, avec connexion par e-mail ou Google.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    github: "https://github.com/kawtarpixel26/moviemix-app",
    video: "projects/moviemix.mp4",
  },
  {
    title: "Restaurant Sakura Sushi",
    summary:
      "Un site responsive pour un restaurant de sushis : slider d'accueil, menu filtrable par catégorie, réservation en ligne confirmée sur WhatsApp et carte Google Maps.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kawtarpixel26/Restaurant-website",
    live: "https://kawtarpixel26.github.io/Restaurant-website/",
    video: "projects/restaurant.mp4",
  },
  {
    title: "Location Auto",
    badge: "SaaS",
    summary:
      "Une application de gestion pour une agence de location de voitures : clients, flotte, contrats, paiements et documents au même endroit. La CIN et le permis sont lus par OCR dans le navigateur, et les contrats sont générés en PDF puis signés en ligne via un lien sécurisé par WhatsApp ou email.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    video: "projects/location-auto.mp4",
  },
];

export const otherProjects = [];

// ---------------------------------------------------------------------------
// 6. CERTIFICATIONS
// ---------------------------------------------------------------------------
export const certifications = [];

export const education = {
  degree: "Licence en Informatique (Bac+3)",
  specialisation: "Faculté des Sciences et Techniques",
  school: "Settat (FSTS)",
  period: "2023 — 2026",
  points: [
    "Informatique & génie logiciel",
    "Développement web & gestion des bases de données",
    "Programmation orientée objet & architecture logicielle",
    "Analyse de données & systèmes d'information",
  ],
};

// ---------------------------------------------------------------------------
// 8. CONTACT
// ---------------------------------------------------------------------------
export const contactIntro =
  "Une question sur un projet, une idée en data ou en ingénierie backend, ou simplement un bonjour. Je lis tout.";
