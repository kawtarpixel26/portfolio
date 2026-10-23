// ============================================================================
//  YOUR PORTFOLIO DATA — the only file you need to edit for day-to-day changes.
//  Each section below is a plain JavaScript array/object. To ADD an item, copy
//  one block and change the text. To DELETE an item, remove its { ... } block.
//  Save the file and the site updates (npm run dev) — nothing else to touch.
//  Leave a value as "" (or [] for lists) to hide it.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. PROFILE — name, links, contact
// ---------------------------------------------------------------------------
export const profile = {
  name: "Khalil Jabour",
  monogram: "KJ",
  role: "Data & AI Engineer",
  location: "Rabat, Morocco",
  school: "FSTM, Hassan II University",

  email: "",        // TODO: your public email. Hidden until filled.
  phone: "",        // optional, e.g. "+212 6 00 00 00 00". Hidden when empty.
  phoneHref: "",    // optional, e.g. "tel:+212600000000"

  links: {
    github: "https://github.com/khaliljabour4",
    linkedin: "https://www.linkedin.com/in/k-jabour/",
    // add more: devto: "https://dev.to/yourname",   (they appear automatically)
  },

  // Big paragraph at the top of the About section.
  summary:
    "Engineering student in Data Science and Computer Science at FSTM (Hassan II University). I build across the full path of a data product: Java backends with real authentication, machine-learning services behind an API, and the containers, pipelines and monitoring around them. My projects range from an ESP8266 ticket-queue system to a role-based e-commerce platform and an AI-assisted academic management system.",

  // Custom magnetic cursor (desktop only). Set to false for the normal cursor.
  customCursor: true,
  // Your photo: save it as src/assets/profile.jpg (or .jpeg .png .webp). Nothing else to change.
};

// ---------------------------------------------------------------------------
// 2. HERO — typing line, rotating caption on the photo, stats, tech strip
// ---------------------------------------------------------------------------
// Shows as: "I am a <role>" and types each one in turn.
export const heroRoles = ["Data & AI Engineer", "Java Backend Developer", "Machine Learning Enthusiast", "IoT Tinkerer"];

// Line under your name on the photo card. Set certified: true for a green check badge.
export const heroCaptions = [
  { text: "Data & AI Engineer", certified: false },
  { text: "Engineering student · FSTM", certified: false },
  { text: "Designing SkillRadar", certified: false },
];

// Four number boxes under the hero. Only put numbers that are TRUE and checkable.
export const stats = [
  { value: "4", label: "Projects on GitHub, from embedded to full-stack" },
  { value: "13", label: "Java test classes (JUnit 5 + Mockito) in the Exclusive platform" },
  { value: "2", label: "Front-ends built on the same REST API (vanilla JS, then React)" },
  { value: "16", label: "Independent counters in my ESP8266 ticket-queue system" },
];

// Strip under the stats ("Core stack"). Add/remove names freely.
export const heroStrip = {
  label: "Core stack",
  items: ["Java", "Spring Boot", "Jakarta EE", "Python", "FastAPI", "Docker"],
};

// ---------------------------------------------------------------------------
// 3. ABOUT — three or four focus cards.  icon: "server" | "brain" | "boxes" | "cpu"
// ---------------------------------------------------------------------------
export const focusAreas = [
  {
    icon: "server",
    title: "Backend engineering",
    body: "Layered Java services with JWT authentication and role-based access control: Jakarta EE servlets with Hibernate on one side, Spring Boot with Spring Security on the other.",
    tools: ["Java", "Jakarta EE", "Spring Boot", "Hibernate / JPA", "JWT", "REST"],
  },
  {
    icon: "brain",
    title: "Data & machine learning",
    body: "Models that end up behind an API: success-prediction classifiers served through FastAPI, a local LLM assistant through Ollama, and a streaming data platform in design for SkillRadar.",
    tools: ["Python", "scikit-learn", "pandas", "FastAPI", "Ollama", "Kafka (planned)"],
  },
  {
    icon: "boxes",
    title: "DevOps & observability",
    body: "Reproducible environments and feedback loops: Docker Compose, a Jenkins pipeline with tests and SonarQube analysis, and Prometheus with Grafana dashboards on a running service.",
    tools: ["Docker", "Jenkins", "SonarQube", "Prometheus", "Grafana", "Nginx"],
  },
  {
    icon: "cpu",
    title: "Embedded & IoT",
    body: "Firmware that talks to people: an ESP8266 ticket system with a web interface, an LCD display and live updates pushed to every connected screen.",
    tools: ["ESP8266", "C++", "Server-sent events", "mDNS"],
  },
];

// ---------------------------------------------------------------------------
// 4. JOURNEY — education & milestones (same card style as "work experience")
//    Add a job/internship later by copying a block. Leave metrics: [] to hide pills.
// ---------------------------------------------------------------------------
export const journey = [
  {
    role: "Engineering cycle: Data Science & Computer Science (IDSI)",
    company: "FSTM, Hassan II University",
    type: "Engineering degree",
    period: "2024 — 2027",
    location: "Mohammedia, Morocco",
    metrics: ["Class of 2027"],
    highlights: [
      "Machine learning, deep learning and image processing.",
      "Big Data with Hadoop and Spark; data warehousing and data lakes.",
      "NLP and large language models.",
      "JEE and microservices, advanced Java and distributed technologies.",
      "DevOps and MLOps in an agile project setting.",
      "Statistics: regression, generalised linear models, statistical learning.",
    ],
    stack: ["Python", "Java", "R", "SQL", "Spark", "Hadoop"],
  },
  {
    role: "MIP preparatory programme",
    company: "FST Settat",
    type: "Two years",
    period: "Before 2024",
    location: "Settat, Morocco",
    metrics: [],
    highlights: [
      "Two years of mathematics, computer science and physics at the Faculté des Sciences et Techniques de Settat.",
    ],
    stack: ["Mathematics", "Computer science", "Physics"],
  },
];

// ---------------------------------------------------------------------------
// 5. PROJECTS
//    featuredProjects → big cards.   otherProjects → small cards in "More projects".
//    caseStudy: "slug"  → adds a "Case study" button (content in caseStudies.js).
//    status: "Built" | "Prototype" | "In design"  (In design shows in amber)
//    github / live: leave out (or "") to hide that button.
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    kind: "Full-stack · Java backend",
    title: "Exclusive",
    alias: "formerly ShopEase",
    status: "Built",
    summary:
      "A full-stack e-commerce platform with a layered Jakarta EE backend, JWT authentication and role-based access for customers, sellers and admins. Two front-ends consume the same REST API.",
    outcomes: [
      "Backend on plain Jakarta Servlets with JPA / Hibernate 6 and SQL Server 2022: no backend framework",
      "JWT + BCrypt login, with authentication and role authorization as separate filters",
      "Two front-ends on one API: vanilla JavaScript first, then a React rewrite",
      "Jenkins pipeline (tests, SonarQube, container build) and Prometheus + Grafana monitoring",
    ],
    spec: [
      { label: "backend", value: "jakarta servlets · tomcat 10" },
      { label: "persistence", value: "hibernate 6 · sql server" },
      { label: "roles", value: "customer · seller · admin" },
      { label: "tests", value: "13 junit 5 / mockito classes" },
      { label: "delivery", value: "docker compose · jenkins" },
    ],
    stack: ["Java", "Jakarta EE", "Hibernate", "SQL Server", "React", "JWT", "Docker", "Jenkins", "SonarQube", "Prometheus", "Grafana"],
    github: "https://github.com/khaliljabour4/Exclusicve-Java-Servlet-E-Commerce-Platform",
    live: "https://exclusicve-java-servlet-e-commerce.vercel.app",
    caseStudy: "exclusive",
    preview: "shopease",
  },
  {
    kind: "Full-stack · Java + AI service",
    title: "AI Academic Management System",
    status: "Prototype",
    summary:
      "A university management platform with four roles (administrator, director, professor, student), a Spring Boot API, and a Python AI service that predicts student success from grades and answers questions through a local LLM.",
    outcomes: [
      "Spring Boot + Spring Security with JWT and a controller per role: administrator, director, professor, student",
      "Logistic-regression models that predict success from one, two or three grades and report a confidence level; students below 50% are flagged at risk",
      "AI service exposes a local LLM endpoint (Ollama); conversations are stored per student and module",
      "Grades, attendance, schedules and modules managed through role-specific dashboards",
    ],
    spec: [
      { label: "backend", value: "spring boot 3 · java 21" },
      { label: "database", value: "mysql · jpa" },
      { label: "ai service", value: "fastapi · ollama" },
      { label: "models", value: "logistic regression" },
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
      "A job-market and skills tracker built as a streaming data platform: it reads public job postings, extracts the skills employers ask for, shows which are rising or falling, and recommends what to learn next.",
    outcomes: [
      "Kafka backbone from raw to clean to enriched events, with a dead-letter topic",
      "Four-layer PostgreSQL warehouse: raw, staging, star-schema warehouse and app",
      "Skill extraction in three levels: dictionary, spaCy phrase matching, embeddings",
      "Skill-gap analysis and a learning roadmap for a chosen target role",
    ],
    spec: [
      { label: "status", value: "design phase, spec written" },
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
    title: "Queue Management System",
    summary:
      "ESP8266 ticket-queue system: customers take a numbered ticket on a web page, staff call the next one, and an LCD plus a live screen show who is being served.",
    metric: "16",
    metricLabel: "independent counters",
    stack: ["ESP8266", "C++", "Server-sent events", "HTML / JS"],
    github: "https://github.com/khaliljabour4/queuing-systeme",
    caseStudy: "queue-management-system",
    preview: "queue",
  },
  // ADD MORE PROJECTS HERE — copy the block above, for example:
  // {
  //   title: "My New Project",
  //   summary: "One or two sentences about what it does.",
  //   metric: "3×",                       // a real number you can stand behind
  //   metricLabel: "what the number means",
  //   stack: ["Python", "Flask"],
  //   github: "https://github.com/khaliljabour4/my-new-project",
  //   live: "",
  // },
];

// ---------------------------------------------------------------------------
// 6. CERTIFICATIONS — add yours; the section fills in automatically.
//    Only real certificates with a public verification link.
// ---------------------------------------------------------------------------
export const certifications = [
  // {
  //   title: "AWS Certified Cloud Practitioner",
  //   code: "CLF-C02",                  // credential id or short label
  //   issuer: "Amazon Web Services",
  //   url: "https://www.credly.com/badges/....",   // public verify page
  // },
];

export const education = {
  degree: "Engineering cycle: Data Science & Computer Science",
  specialisation: "IDSI programme",
  school: "FSTM, Hassan II University of Casablanca",
  period: "2024 — 2027",
  points: [
    "Machine learning, deep learning and image processing; NLP and LLMs",
    "Big Data (Hadoop, Spark), data warehousing and data lakes",
    "JEE and microservices, DevOps and MLOps in an agile setting",
  ],
};

// ---------------------------------------------------------------------------
// 7. SKILLS — groups of chips. A plain string is a skill you have used.
//    { name: "Kafka", planned: true } shows a dashed chip (chosen, not built yet).
// ---------------------------------------------------------------------------
export const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "SQL", "R", "JavaScript", "C++"] },
  { label: "Backend", items: ["Jakarta EE / Servlets", "Spring Boot", "Spring Security", "JPA / Hibernate 6", "JWT + BCrypt", "REST APIs", "FastAPI", "Microservices"] },
  { label: "Data & ML", items: ["pandas", "NumPy", "scikit-learn", "OpenCV", "Ollama (local LLMs)", { name: "spaCy", planned: true }, { name: "sentence-transformers", planned: true }, { name: "statsmodels", planned: true }] },
  { label: "Big Data & BI", items: ["Hadoop", "Spark", "Data warehousing (star schema)", "Power BI", { name: "Apache Kafka", planned: true }, { name: "dbt", planned: true }] },
  { label: "Databases", items: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"] },
  { label: "DevOps & quality", items: ["Git", "Docker Compose", "Nginx", "Jenkins", "SonarQube", "JUnit 5", "Mockito", "Prometheus", "Grafana", "GitHub Actions"] },
  { label: "Frontend", items: ["React", "HTML / CSS / JavaScript", "Tailwind CSS", { name: "Angular", planned: true }, { name: "Flutter", planned: true }] },
  { label: "Embedded & IoT", items: ["ESP8266 / NodeMCU", "Arduino C++", "Server-sent events", "mDNS"] },
];

// ---------------------------------------------------------------------------
// 8. CONTACT text
// ---------------------------------------------------------------------------
export const contactIntro =
  "Questions about a project, an idea in data or backend engineering, or just a hello. I read everything.";
