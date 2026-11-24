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
  name: "Kawtar Imzilne",
  monogram: "KI",
  role: "Full-Stack Developer & Data Analyst",
  location: "Casablanca, Morocco",
  school: "FST Settat (FSTS)",

  email: "kawtarimziln@gmail.com",
  whatsapp: "06 99 77 96 00",
  whatsappHref: "https://wa.me/212699779600",
  phone: "",        // optional, e.g. "+212 6 00 00 00 00". Hidden when empty.
  phoneHref: "",    // optional, e.g. "tel:+212600000000"

  links: {
    github: "https://github.com/kawtarpixel26",
    linkedin: "https://www.linkedin.com/in/kawtar-imzilne-305315339",
    // add more: devto: "https://dev.to/yourname",   (they appear automatically)
  },

  // Big paragraph at the top of the About section.
  summary:
    "Computer Science student based in Casablanca. I build full-stack web applications, from clean, responsive interfaces to the APIs and databases behind them. As a data analyst, I turn raw data into clear insights that help people make better decisions, and I keep exploring how AI can make products smarter and more useful. I enjoy learning new tools, solving real problems and turning ideas into working products.",

  // Custom magnetic cursor (desktop only). Set to false for the normal cursor.
  customCursor: true,
  // Your photo: save it as src/assets/profile.jpg (or .jpeg .png .webp). Nothing else to change.
};

// ---------------------------------------------------------------------------
// 2. HERO — typing line, rotating caption on the photo, stats, tech strip
// ---------------------------------------------------------------------------
// Shows as: "I am a <role>" and types each one in turn.
export const heroRoles = ["Full-Stack Developer", "Data Analyst", "AI Enthusiast"];

// Line under your name on the photo card. Set certified: true for a green check badge.
export const heroCaptions = [
  { text: "Full-Stack Developer", certified: false },
  { text: "Computer Science student", certified: false },
  { text: "Data Analyst · AI Enthusiast", certified: false },
];

// Four number boxes under the hero. Only put numbers that are TRUE and checkable.
export const stats = [
  { value: "4+", label: "Projects" },
  { value: "2+", label: "Experience" },
  { value: "2+", label: "Happy clients" },
];

// Strip under the stats ("Core stack"). Add/remove names freely.
export const techStack = {
  label: "Technical Expertise",
  frontend: { title: "Frontend Technologies", items: [
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
  backend: { title: "Backend Technologies", items: [
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
  tools: { title: "Development & Productivity Tools", items: [
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
// 3. ABOUT — three or four focus cards.  icon: "server" | "brain" | "boxes" | "cpu"
// ---------------------------------------------------------------------------
export const focusAreas = [
  {
    file: "full_stack.tsx",
    title: "Full-stack development",
    body: "Responsive web apps from interface to API: React and Next.js on the front, Node.js and FastAPI on the back, with MongoDB, MySQL or PostgreSQL behind them.",
    tools: ["React", "Next.js", "TypeScript", "Laravel", "Node.js", "FastAPI", "REST"],
    tags: ["React", "Next.js", "Laravel"],
  },
  {
    file: "data_analysis.py",
    title: "Data analysis",
    body: "Turning raw data into clear answers: cleaning, exploring and visualising datasets so decisions rest on evidence instead of guesses.",
    tools: ["Python", "SQL", "MySQL", "PostgreSQL", "Visualisation"],
  },
  {
    file: "ai_lab.py",
    title: "AI exploration",
    body: "Curious about how models can make products smarter: experimenting with machine-learning ideas and ways to serve them behind an API.",
    tools: ["Python", "FastAPI", "Machine learning", "APIs"],
  },
  {
    file: "workflow.yml",
    title: "Tools & workflow",
    body: "A clean, reproducible workflow: Git and GitHub for versioning, Docker for environments, Vercel for deployment and Postman to test APIs.",
    tools: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
];

// ---------------------------------------------------------------------------
// 4. JOURNEY — education & milestones (same card style as "work experience")
//    Add a job/internship later by copying a block. Leave metrics: [] to hide pills.
// ---------------------------------------------------------------------------
export const journey = [
  {
    kind: "work",
    role: "Freelance Full-Stack Developer",
    company: "Freelance",
    type: "Client work",
    period: "Ongoing",
    location: "Casablanca, Morocco",
    metrics: ["2+ happy clients"],
    highlights: [
      "Design and build websites for clients, from the first brief to deployment.",
      "Responsive front-ends with React, Next.js and Tailwind CSS.",
      "Back-ends and APIs with Laravel, Node.js and MySQL.",
      "Deployment on Vercel and ongoing maintenance.",
    ],
    stack: ["React", "Next.js", "Laravel", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    kind: "education",
    role: "Bachelor's degree in Computer Engineering (Licence en Génie Informatique)",
    company: "FST Settat",
    type: "Bachelor's degree",
    period: "2023 — 2026",
    location: "Settat, Morocco",
    metrics: [],
    highlights: ["Computer engineering degree at the Faculté des Sciences et Techniques de Settat.", "Programming, databases, web development and software engineering."],
    stack: ["Programming", "Databases", "Web development", "Software engineering"],
  },
  {
    kind: "education",
    role: "MIP preparatory programme",
    company: "FST Settat",
    type: "Two years",
    period: "Before 2024",
    location: "Settat, Morocco",
    metrics: [],
    highlights: ["Two years of mathematics, computer science and physics at the Faculté des Sciences et Techniques de Settat."],
    stack: ["Mathematics", "Computer science", "Physics"],
  },
];

// ---------------------------------------------------------------------------
// 5. PROJECTS
//    featuredProjects → big cards.   otherProjects → small cards in "More projects".
//    status: "Built" | "Prototype" | "In design"  (In design shows in amber)
//    github / live: leave out (or "") to hide that button.
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    title: "MovieMix",
    featured: true,
    summary:
      "A full-stack movie discovery app: browse trending and upcoming films, search, watch trailers, and keep your own favorites and watchlist, with email or Google sign-in.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    github: "https://github.com/kawtarpixel26/moviemix-app",
    video: "projects/moviemix.mp4",
  },
  {
    title: "Sakura Sushi Restaurant",
    summary:
      "A responsive website for a sushi restaurant, with a hero slider, a filterable menu, online reservations confirmed on WhatsApp, and a Google Maps embed.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kawtarpixel26/Restaurant-website",
    live: "https://kawtarpixel26.github.io/Restaurant-website/",
    video: "projects/restaurant.mp4",
  },
  {
    title: "Location Auto",
    badge: "SaaS",
    summary:
      "A management app for a car rental agency: clients, fleet, contracts, payments and documents in one place. ID cards and licences are read by in-browser OCR, contracts are generated as PDFs and signed online through a secure WhatsApp or email link.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    video: "projects/location-auto.mp4",
  },
];

export const otherProjects = [
  // ADD MORE PROJECTS HERE — copy a block above.
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
  degree: "Bachelor's Degree in Computer Science (Bac+3)",
  specialisation: "Faculty of Sciences and Techniques",
  school: "Settat (FSTS)",
  period: "2023 — 2026",
  points: [
    "Computer Science & Software Engineering",
    "Web Development & Database Management",
    "Object-Oriented Programming & Software Architecture",
    "Data Analysis & Information Systems",
  ],
};

// ---------------------------------------------------------------------------
// 8. CONTACT text
// ---------------------------------------------------------------------------
export const contactIntro =
  "Questions about a project, an idea in data or backend engineering, or just a hello. I read everything.";
