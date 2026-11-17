// ============================================================================
//  DONNÉES DU PORTFOLIO (VERSION FRANÇAISE)
//  Même structure que portfolio.js : seuls les textes sont traduits.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. PROFIL
// ---------------------------------------------------------------------------
export const profile = {
  name: "Khalil Jabour",
  monogram: "KJ",
  role: "Ingénieur Data & IA",
  location: "Rabat, Maroc",
  school: "FSTM, Université Hassan II",

  email: "",
  phone: "",
  phoneHref: "",

  links: {
    github: "https://github.com/khaliljabour4",
    linkedin: "https://www.linkedin.com/in/k-jabour/",
  },

  summary:
    "Étudiant ingénieur en Science des données et Informatique à la FSTM (Université Hassan II). Je travaille sur toute la chaîne d'un produit data : des backends Java avec une vraie authentification, des services de machine learning exposés derrière une API, ainsi que les conteneurs, les pipelines et la supervision qui les entourent. Mes projets vont d'un système de file d'attente à tickets sur ESP8266 à une plateforme e-commerce à rôles, en passant par un système de gestion académique assisté par IA.",

  customCursor: true,
};

// ---------------------------------------------------------------------------
// 2. HERO
// ---------------------------------------------------------------------------
export const heroRoles = ["Ingénieur Data & IA", "Développeur Backend Java", "Passionné de Machine Learning", "Bidouilleur IoT"];

export const heroCaptions = [
  { text: "Ingénieur Data & IA", certified: false },
  { text: "Étudiant ingénieur · FSTM", certified: false },
  { text: "En conception : SkillRadar", certified: false },
];

export const stats = [
  { value: "4", label: "Projets sur GitHub, de l'embarqué au full-stack" },
  { value: "13", label: "Classes de tests Java (JUnit 5 + Mockito) dans la plateforme Exclusive" },
  { value: "2", label: "Front-ends construits sur la même API REST (JS natif, puis React)" },
  { value: "16", label: "Compteurs indépendants dans mon système de tickets ESP8266" },
];

export const heroStrip = {
  label: "Stack principale",
  items: ["Java", "Spring Boot", "Jakarta EE", "Python", "FastAPI", "Docker"],
};

// ---------------------------------------------------------------------------
// 3. À PROPOS
// ---------------------------------------------------------------------------
export const focusAreas = [
  {
    icon: "server",
    title: "Ingénierie backend",
    body: "Services Java en couches avec authentification JWT et contrôle d'accès par rôles : servlets Jakarta EE avec Hibernate d'un côté, Spring Boot avec Spring Security de l'autre.",
    tools: ["Java", "Jakarta EE", "Spring Boot", "Hibernate / JPA", "JWT", "REST"],
  },
  {
    icon: "brain",
    title: "Data & machine learning",
    body: "Des modèles qui finissent derrière une API : classifieurs de prédiction de réussite servis via FastAPI, assistant LLM local via Ollama, et plateforme de données en streaming en conception pour SkillRadar.",
    tools: ["Python", "scikit-learn", "pandas", "FastAPI", "Ollama", "Kafka (prévu)"],
  },
  {
    icon: "boxes",
    title: "DevOps & observabilité",
    body: "Des environnements reproductibles et des boucles de retour : Docker Compose, un pipeline Jenkins avec tests et analyse SonarQube, et des tableaux de bord Prometheus et Grafana sur un service en fonctionnement.",
    tools: ["Docker", "Jenkins", "SonarQube", "Prometheus", "Grafana", "Nginx"],
  },
  {
    icon: "cpu",
    title: "Embarqué & IoT",
    body: "Un firmware qui dialogue avec les gens : un système de tickets ESP8266 avec interface web, affichage LCD et mises à jour en direct envoyées à tous les écrans connectés.",
    tools: ["ESP8266", "C++", "Server-sent events", "mDNS"],
  },
];

// ---------------------------------------------------------------------------
// 4. PARCOURS
// ---------------------------------------------------------------------------
export const journey = [
  {
    role: "Cycle ingénieur : Science des données & Informatique (IDSI)",
    company: "FSTM, Université Hassan II",
    type: "Diplôme d'ingénieur",
    period: "2024 — 2027",
    location: "Mohammedia, Maroc",
    metrics: ["Promotion 2027"],
    highlights: [
      "Machine learning, deep learning et traitement d'images.",
      "Big Data avec Hadoop et Spark ; entrepôts de données et data lakes.",
      "NLP et grands modèles de langage.",
      "JEE et microservices, Java avancé et technologies distribuées.",
      "DevOps et MLOps dans un cadre de projet agile.",
      "Statistiques : régression, modèles linéaires généralisés, apprentissage statistique.",
    ],
    stack: ["Python", "Java", "R", "SQL", "Spark", "Hadoop"],
  },
  {
    role: "Cycle préparatoire MIP",
    company: "FST Settat",
    type: "Deux ans",
    period: "Avant 2024",
    location: "Settat, Maroc",
    metrics: [],
    highlights: [
      "Deux ans de mathématiques, d'informatique et de physique à la Faculté des Sciences et Techniques de Settat.",
    ],
    stack: ["Mathématiques", "Informatique", "Physique"],
  },
];

// ---------------------------------------------------------------------------
// 5. PROJETS
//    (status reste en anglais : "Built" | "Prototype" | "In design")
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    kind: "Full-stack · Backend Java",
    title: "Exclusive",
    alias: "anciennement ShopEase",
    status: "Built",
    summary:
      "Une plateforme e-commerce full-stack avec un backend Jakarta EE en couches, une authentification JWT et un accès par rôles pour les clients, les vendeurs et les administrateurs. Deux front-ends consomment la même API REST.",
    outcomes: [
      "Backend en Servlets Jakarta pures avec JPA / Hibernate 6 et SQL Server 2022 : aucun framework backend",
      "Connexion JWT + BCrypt, avec authentification et autorisation par rôles dans des filtres séparés",
      "Deux front-ends sur une seule API : JavaScript natif d'abord, puis une réécriture en React",
      "Pipeline Jenkins (tests, SonarQube, build du conteneur) et supervision Prometheus + Grafana",
    ],
    spec: [
      { label: "backend", value: "jakarta servlets · tomcat 10" },
      { label: "persistance", value: "hibernate 6 · sql server" },
      { label: "rôles", value: "client · vendeur · admin" },
      { label: "tests", value: "13 classes junit 5 / mockito" },
      { label: "livraison", value: "docker compose · jenkins" },
    ],
    stack: ["Java", "Jakarta EE", "Hibernate", "SQL Server", "React", "JWT", "Docker", "Jenkins", "SonarQube", "Prometheus", "Grafana"],
    github: "https://github.com/khaliljabour4/Exclusicve-Java-Servlet-E-Commerce-Platform",
    live: "https://exclusicve-java-servlet-e-commerce.vercel.app",
    caseStudy: "exclusive",
    preview: "shopease",
  },
  {
    kind: "Full-stack · Java + service IA",
    title: "Système de gestion académique IA",
    status: "Prototype",
    summary:
      "Une plateforme de gestion universitaire à quatre rôles (administrateur, directeur, professeur, étudiant), avec une API Spring Boot et un service IA en Python qui prédit la réussite des étudiants à partir de leurs notes et répond aux questions grâce à un LLM local.",
    outcomes: [
      "Spring Boot + Spring Security avec JWT et un contrôleur par rôle : administrateur, directeur, professeur, étudiant",
      "Modèles de régression logistique qui prédisent la réussite à partir d'une, deux ou trois notes et indiquent un niveau de confiance ; les étudiants sous 50 % sont signalés à risque",
      "Le service IA expose un point d'accès LLM local (Ollama) ; les conversations sont enregistrées par étudiant et par module",
      "Notes, présences, emplois du temps et modules gérés via des tableaux de bord propres à chaque rôle",
    ],
    spec: [
      { label: "backend", value: "spring boot 3 · java 21" },
      { label: "base de données", value: "mysql · jpa" },
      { label: "service ia", value: "fastapi · ollama" },
      { label: "modèles", value: "régression logistique" },
      { label: "frontend", value: "html · css · js" },
    ],
    stack: ["Java 21", "Spring Boot", "Spring Security", "JWT", "MySQL", "Python", "FastAPI", "scikit-learn", "Ollama"],
    github: "https://github.com/khaliljabour4/ai-academic-management-system",
    caseStudy: "ai-academic-management-system",
    preview: "academic",
  },
  {
    kind: "Data engineering · ML · full-stack",
    title: "SkillRadar",
    status: "In design",
    summary:
      "Un outil de suivi du marché de l'emploi et des compétences, conçu comme une plateforme de données en streaming : il lit des offres d'emploi publiques, extrait les compétences demandées par les employeurs, montre celles qui montent ou qui baissent, et recommande quoi apprendre ensuite.",
    outcomes: [
      "Colonne vertébrale Kafka, des événements bruts aux événements nettoyés puis enrichis, avec un topic de rebut (dead-letter)",
      "Entrepôt PostgreSQL en quatre couches : brut, staging, entrepôt en étoile et application",
      "Extraction des compétences à trois niveaux : dictionnaire, correspondance de phrases spaCy, embeddings",
      "Analyse des écarts de compétences et feuille de route d'apprentissage pour un poste cible",
    ],
    spec: [
      { label: "statut", value: "phase de conception, spécification rédigée" },
      { label: "ingestion", value: "python · micro-batch" },
      { label: "streaming", value: "apache kafka" },
      { label: "clients", value: "angular · flutter · power bi" },
    ],
    stack: ["Python", "Kafka", "PostgreSQL", "Spring Boot", "FastAPI", "Angular", "Flutter", "Power BI"],
    github: "https://github.com/khaliljabour4/SkillRadar",
    caseStudy: "skill-radar",
    preview: "skillradar",
  },
];

export const otherProjects = [
  {
    title: "Système de gestion de file d'attente",
    summary:
      "Système de tickets sur ESP8266 : les clients prennent un ticket numéroté sur une page web, le personnel appelle le suivant, et un écran LCD ainsi qu'un écran en direct indiquent qui est servi.",
    metric: "16",
    metricLabel: "compteurs indépendants",
    stack: ["ESP8266", "C++", "Server-sent events", "HTML / JS"],
    github: "https://github.com/khaliljabour4/queuing-systeme",
    caseStudy: "queue-management-system",
    preview: "queue",
  },
];

// ---------------------------------------------------------------------------
// 6. CERTIFICATIONS
// ---------------------------------------------------------------------------
export const certifications = [];

export const education = {
  degree: "Cycle ingénieur : Science des données & Informatique",
  specialisation: "Filière IDSI",
  school: "FSTM, Université Hassan II de Casablanca",
  period: "2024 — 2027",
  points: [
    "Machine learning, deep learning et traitement d'images ; NLP et LLM",
    "Big Data (Hadoop, Spark), entrepôts de données et data lakes",
    "JEE et microservices, DevOps et MLOps dans un cadre agile",
  ],
};

// ---------------------------------------------------------------------------
// 7. COMPÉTENCES
//    { name: "Kafka", planned: true } = pastille en pointillés (choisi, pas encore réalisé)
// ---------------------------------------------------------------------------
export const skillGroups = [
  { label: "Langages", items: ["Java", "Python", "SQL", "R", "JavaScript", "C++"] },
  { label: "Backend", items: ["Jakarta EE / Servlets", "Spring Boot", "Spring Security", "JPA / Hibernate 6", "JWT + BCrypt", "APIs REST", "FastAPI", "Microservices"] },
  { label: "Data & ML", items: ["pandas", "NumPy", "scikit-learn", "OpenCV", "Ollama (LLM locaux)", { name: "spaCy", planned: true }, { name: "sentence-transformers", planned: true }, { name: "statsmodels", planned: true }] },
  { label: "Big Data & BI", items: ["Hadoop", "Spark", "Entrepôts de données (schéma en étoile)", "Power BI", { name: "Apache Kafka", planned: true }, { name: "dbt", planned: true }] },
  { label: "Bases de données", items: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"] },
  { label: "DevOps & qualité", items: ["Git", "Docker Compose", "Nginx", "Jenkins", "SonarQube", "JUnit 5", "Mockito", "Prometheus", "Grafana", "GitHub Actions"] },
  { label: "Frontend", items: ["React", "HTML / CSS / JavaScript", "Tailwind CSS", { name: "Angular", planned: true }, { name: "Flutter", planned: true }] },
  { label: "Embarqué & IoT", items: ["ESP8266 / NodeMCU", "Arduino C++", "Server-sent events", "mDNS"] },
];

// ---------------------------------------------------------------------------
// 8. CONTACT
// ---------------------------------------------------------------------------
export const contactIntro =
  "Une question sur un projet, une idée en data ou en ingénierie backend, ou simplement un bonjour. Je lis tout.";
