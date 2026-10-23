// ============================================================================
//  CASE STUDIES — the long detail pages (/projects/<slug>).
//  A project in portfolio.js gets a "Case study" button when its `caseStudy`
//  value matches a `slug` here. Every section is OPTIONAL: delete a field and
//  that section disappears from the page.
//
//  To add one: copy a block, change `slug`, fill what you know, then set
//  caseStudy: "<slug>" on the project in portfolio.js.
// ============================================================================

export const caseStudies = [
  // ------------------------------------------------------------------ Exclusive
  {
    slug: "exclusive",
    tagline: "A role-aware e-commerce platform on plain Jakarta Servlets",
    facts: [
      ["Type", "Full-stack web application"],
      ["Backend", "Jakarta Servlets on Tomcat 10, no framework"],
      ["Persistence", "JPA / Hibernate 6 · SQL Server 2022"],
      ["Front-ends", "Vanilla JavaScript, then React"],
      ["Delivery", "Docker Compose · Nginx · Jenkins · SonarQube"],
      ["Monitoring", "Prometheus · Grafana"],
    ],
    overview: [
      "Exclusive (formerly ShopEase) is a full-stack e-commerce platform. The backend is a REST API written directly on Jakarta Servlets running on Tomcat 10, with JPA/Hibernate 6 over SQL Server 2022. Three kinds of users share it: customers who browse, buy and review, sellers who manage products, stock and orders, and administrators who manage users, categories and statistics.",
      "Two front-ends consume the same /api endpoints: a vanilla HTML/CSS/JavaScript version served by Tomcat, and a React version with its own dev server.",
    ],
    problem: {
      title: "Approach",
      paragraphs: [
        "The backend uses Jakarta Servlets directly, with no backend framework, so routing, filters, transactions and JSON handling are all explicit code. The schema was designed first, then the backend was built layer by layer (entities, repositories, services, servlets), then the vanilla front-end, then role-based access through separate filters, then the React rewrite, and finally containerisation, CI and monitoring.",
      ],
    },
    goals: {
      goals: [
        "Public browsing of products by category, with search and filters.",
        "Product pages with price, stock, ratings and reviews; reviews limited to customers who bought the product.",
        "Cart, checkout and order tracking through explicit order statuses.",
        "Seller tools for products, stock, prices and orders.",
        "An admin panel for users, roles, account status, categories and statistics.",
        "JWT login and sign-up with role-based access for Customer, Seller and Admin.",
      ],
    },
    contribution: [
      "Designed the schema and nine JPA entities: User, Product, Category, Cart, CartItem, Order, OrderItem, Payment, Review.",
      "Built the layered REST API: repositories, services and servlets for auth, products, categories, cart, orders, payments, reviews, profile, seller and admin.",
      "Implemented JWT authentication and BCrypt hashing, with JwtFilter for identity and RoleGuard for role checks.",
      "Wrote both front-ends: vanilla JavaScript first, then React with pages for the store, cart, payment, orders, and seller and admin dashboards.",
      "Containerised the stack and set up the Jenkins pipeline, SonarQube analysis, Prometheus metrics and a provisioned Grafana dashboard.",
    ],
    architecture: {
      intro:
        "A request crosses the security filters first, then a servlet, a service and a repository before it reaches the database. Each layer only talks to the one beneath it, and the same API serves both front-ends.",
      diagrams: [
        { key: "exclusive-layers", caption: "Backend layers: each one depends only on the layer beneath it." },
        { key: "exclusive-request", caption: "The path of a request through the two security filters." },
      ],
    },
    stack: [
      { name: "Jakarta Servlets · Tomcat 10", role: "HTTP layer of the REST API and the filter chain." },
      { name: "JPA / Hibernate 6", role: "Maps the nine entities to tables; repositories sit on top." },
      { name: "SQL Server 2022", role: "Relational store for users, products, carts, orders, payments and reviews." },
      { name: "JWT + BCrypt", role: "Stateless sessions and salted password hashing." },
      { name: "React", role: "Second front-end, consuming the same API as the first." },
      { name: "Docker Compose · Nginx", role: "Runs the application, database and supporting services together." },
    ],
    decisions: [
      {
        title: "Authentication and authorization are separate filters",
        body: "JwtFilter answers “who is calling?” by validating the token. RoleGuard answers “is this role allowed here?”. Access rules stay at the edge, so business code never has to ask who the user is allowed to be.",
      },
      {
        title: "Strict layers: entity, repository, service, servlet",
        body: "Servlets only translate HTTP, services hold the rules, repositories own queries. That keeps business logic testable with Mockito without a running server or database.",
      },
      {
        title: "One API, two front-ends",
        body: "The interface was written first in vanilla JavaScript and then rewritten in React against the same endpoints, a direct test that the API contract does not depend on any one UI.",
      },
      {
        title: "Metrics as a first-class endpoint",
        body: "A MetricsServlet exposes the numbers Prometheus scrapes, and a Grafana dashboard is provisioned from the repository, so monitoring is reproducible with the rest of the stack.",
      },
    ],
    features: [
      { title: "Store", body: "Browse by category, search and filter, with product pages showing price, stock and ratings." },
      { title: "Cart & checkout", body: "A persistent cart, a payment step and order confirmation." },
      { title: "Order tracking", body: "Orders move through explicit statuses the customer can follow." },
      { title: "Reviews", body: "Only customers who purchased a product can review it." },
      { title: "Seller dashboard", body: "Products, stock, prices and incoming orders." },
      { title: "Admin dashboard", body: "Users, roles, account status, categories and platform statistics." },
    ],
    delivery: {
      intro:
        "A push to GitHub triggers a Jenkins webhook. Jenkins runs the tests, then SonarQube analysis, then builds and deploys the container if the checks pass. Prometheus scrapes the running application and Grafana charts availability, request volume, status codes and scrape duration.",
      diagram: { key: "exclusive-devops", caption: "Build-and-observe loop around the application." },
      items: [
        ["Tests", "13 Java test classes: JUnit 5 and Mockito"],
        ["Pipeline", "Jenkins: mvn clean test, SonarQube, container build"],
        ["Environment", "Docker Compose with Nginx"],
        ["Monitoring", "Prometheus and a provisioned Grafana dashboard"],
      ],
    },
    next: {
      title: "Planned improvements",
      items: [
        "Redis caching",
        "A real payment gateway",
        "Cloud image storage",
        "WebSocket order updates",
        "OpenAPI documentation",
        "Email notifications",
        "GitHub Actions alongside Jenkins",
        "Cloud and Kubernetes deployment",
        "Broader integration and end-to-end tests",
      ],
    },
    statusReport: {
      summary: "Implemented and containerised, with a live front-end demo. Screenshots are still to be added to this page.",
    },
  },

  // ------------------------------------------------- AI Academic Management System
  {
    slug: "ai-academic-management-system",
    tagline: "A university platform with a Spring Boot core and a Python AI service",
    facts: [
      ["Backend", "Spring Boot 3.5 · Java 21 · Maven"],
      ["Security", "Spring Security with JWT"],
      ["Database", "MySQL through Spring Data JPA"],
      ["AI service", "FastAPI · scikit-learn · Ollama"],
      ["Front-end", "HTML, CSS and JavaScript, one page per role"],
    ],
    overview: [
      "The AI Academic Management System manages the academic side of a school: programmes (filières), modules, grades, attendance and weekly schedules, for four kinds of users: administrators, directors, professors and students.",
      "On top of the Spring Boot API sits a small Python service. It predicts a student's chance of success from the grades available so far, and it can forward questions to a locally hosted LLM. The director's dashboard uses those predictions to flag students at risk early.",
    ],
    goals: {
      goals: [
        "Give each role only the tools it needs: administration, programme oversight, teaching, and learning.",
        "Turn grades into an early warning: flag at-risk students after one, two or three grades instead of waiting for final results.",
        "Keep AI features in a separate service so the core API stays simple and the models can change independently.",
        "Run the language model locally so no student data is sent to an external provider.",
      ],
    },
    contribution: [
      "Designed the domain model: Filière, Module, Grade, Attendance, TimeSlot, Conversation and Message, plus the Administrator, Director, Professor and Student users.",
      "Built the Spring Boot API with a controller per role, JWT authentication and a security configuration.",
      "Trained three logistic-regression models and exposed them, with a local-LLM proxy, through a FastAPI service.",
      "Wrote the director logic that averages grades, calls the prediction service and flags at-risk students.",
      "Built the role-specific front-end pages: administrator, director, professor and student dashboards.",
    ],
    architecture: {
      intro:
        "The browser talks only to the Spring Boot API. Spring checks the JWT, applies the business rules, stores data in MySQL and calls the FastAPI service when a prediction or an AI answer is needed.",
      diagrams: [{ key: "academic-architecture", caption: "Request flow from role dashboards to the API, database and AI service." }],
    },
    stack: [
      { name: "Spring Boot 3.5 · Java 21", role: "REST API, controllers per role, services and repositories." },
      { name: "Spring Security + jjwt", role: "Stateless authentication with a JWT filter and security configuration." },
      { name: "Spring Data JPA · MySQL", role: "Persistence for the academic domain." },
      { name: "FastAPI · Pydantic", role: "AI service with validated request models." },
      { name: "scikit-learn · joblib · pandas", role: "Training and serving the success-prediction models." },
      { name: "Ollama", role: "Local LLM (llama3.2 by default) behind the /ai/ask endpoint." },
    ],
    decisions: [
      {
        title: "Predict from whatever grades exist",
        body: "Three models are trained on the same data with one, two and three grades as features. The service picks the largest model the available grades allow and reports a confidence level (low, medium, high) with the result, so a prediction after the first grade is honest about being early.",
      },
      {
        title: "A fixed risk threshold on the success rate",
        body: "Students whose predicted success rate is below 50% are flagged at risk on the director's views. The threshold is explicit in the service code, so it is easy to review and tune.",
      },
      {
        title: "AI features behind their own service",
        body: "The Python service owns the models and the LLM proxy. Spring Boot calls it over HTTP and treats a failure as “no prediction”, so the core platform keeps working when the AI service is down.",
      },
      {
        title: "Local language model",
        body: "Questions go to Ollama on the same network, not to a hosted API, which keeps academic data inside the deployment.",
      },
    ],
    ml: {
      intro: "The AI service, as implemented.",
      rows: [
        ["Success prediction", "Logistic regression on note1, note2, note3 (three models)", "Accuracy on a held-out 20% split"],
        ["Progress prediction", "Picks the 1-, 2- or 3-grade model; returns rate, notes used, confidence", "Used by the director's early-prediction view"],
        ["Question answering", "Prompt with conversation history sent to a local LLM", "Health check endpoint reports whether Ollama is up"],
      ],
    },
    delivery: {
      intro: "How the pieces are run and what is in the repository.",
      items: [
        ["Backend", "Maven wrapper included; Spring Boot application"],
        ["AI service", "requirements.txt, training script, notebook and trained models"],
        ["Docs", "A PDF project document in the repository"],
      ],
    },
    next: {
      title: "In progress",
      items: [
        "Connecting the student chat interface to the LLM endpoint",
        "Role-based route rules for the newer dashboard endpoints",
        "Professor tools: grade entry, attendance and AI helpers",
      ],
    },
    statusReport: {
      summary: "A working prototype: the API, the AI service and the role dashboards exist; several dashboard features are still being connected.",
    },
  },

  // ------------------------------------------------------------------ SkillRadar
  {
    slug: "skill-radar",
    tagline: "A job-market and skills tracker built as a streaming data platform",
    facts: [
      ["Status", "Design phase. Specification written."],
      ["Data", "Free public job APIs, micro-batch ingestion"],
      ["Core", "Kafka · PostgreSQL warehouse · FastAPI ML service"],
      ["Clients", "Spring Boot API · Angular · Flutter · Power BI"],
      ["Cost target", "Zero: only free tools and data sources"],
    ],
    banner: {
      title: "This project is not built yet.",
      body: "What follows is the design: product requirements, technical requirements, data flow, schema and architecture. Everything is labelled as planned until code exists. The status table at the bottom of this page is the single place to update as work lands.",
    },
    overview: [
      "SkillRadar is a real-time job-market and skills tracker. It collects job postings from free public sources, extracts the skills employers ask for, shows which skills are rising or falling, and gives each user a personalised skill-gap analysis and learning roadmap for the role they want.",
      "It is deliberately a whole data product: ingestion, streaming, a layered warehouse, machine learning, a backend API, a web app, a mobile app and a BI dashboard on one shared backbone.",
    ],
    problem: {
      title: "The problem",
      paragraphs: [
        "Students and junior developers do not know which skills matter right now. Courses, blogs and rankings are often a year old. Job boards show a list of jobs, not the trend behind them, and paid labour-market tools are priced for large companies. People end up learning the wrong things and sending CVs that do not match what employers ask for.",
        "The MVP serves two kinds of user: a student looking for the five skills to add before applying, and a junior developer asking whether they are competitive for a given role.",
      ],
    },
    goals: {
      goals: [
        "Show live skill-demand trends from at least three free sources.",
        "Give a personalised skill-gap analysis and learning roadmap.",
        "Serve a Power BI dashboard, an Angular website and a Flutter app from one backend.",
        "Prove data engineering, ML and full-stack skills in one coherent system.",
      ],
      nonGoals: [
        "Applying to jobs from inside the app.",
        "Scraping LinkedIn, Indeed or any site whose terms forbid it.",
        "A CV builder or a social network.",
        "Payments and paid plans (later, if ever).",
      ],
    },
    contribution: [
      "Product scope and prioritisation (MoSCoW) in the PRD.",
      "Technology choices and non-functional targets in the TRD.",
      "Data flow, user journeys, schema plan and containerisation plan.",
      "UI/UX brief: a radar-themed identity shared across web, mobile and Power BI.",
    ],
    contributionTitle: "What exists so far",
    architecture: {
      intro:
        "Free job APIs are polling APIs, not true push streams, so SkillRadar is honest about being micro-batch at the edge: a scheduler polls each source at the rate its rules allow, and from the moment a posting is published to Kafka, everything downstream is event-driven.",
      diagrams: [
        { key: "skillradar-pipeline", caption: "Planned data flow from public sources to the three user-facing clients." },
        { key: "skillradar-medallion", caption: "Planned warehouse layers, one PostgreSQL schema each." },
      ],
    },
    stack: [
      { name: "Python 3.12 · httpx · APScheduler", role: "Source adapters and scheduler. Simple and well suited to APIs." },
      { name: "Apache Kafka (KRaft, single broker)", role: "Event backbone: jobs.raw, jobs.clean, jobs.enriched and a dead-letter topic." },
      { name: "PostgreSQL 16", role: "One database, four schemas: raw, staging, warehouse, app." },
      { name: "SQL + dbt-core", role: "Tested, documented transformations (optional, recommended)." },
      { name: "scikit-learn · spaCy · sentence-transformers · statsmodels", role: "Role classification, skill extraction, matching and forecasting." },
      { name: "FastAPI", role: "ML microservice that Spring Boot calls over HTTP." },
      { name: "Spring Boot 3 · Java 21", role: "REST API, JWT auth, owner of the app schema (Flyway migrations)." },
      { name: "Angular · Flutter · Power BI", role: "Web app, mobile app and analytics dashboard on the same warehouse." },
    ],
    decisions: [
      { title: "Say “micro-batch” out loud", body: "None of the free job APIs pushes data. Rather than claim real-time, the design polls on a per-source schedule and treats Kafka as the point where the system becomes event-driven. For demos, saved raw data can be replayed through Kafka at speed." },
      { title: "Keep raw data untouched", body: "Every response is stored unchanged before any processing, so a bug in cleaning or extraction can be fixed and reprocessed without calling an API again." },
      { title: "Skill extraction in three levels, built in order", body: "First dictionary and alias matching (ESCO plus a curated tech list), then spaCy phrase matching with word boundaries so “Java” never matches “JavaScript”, then embeddings with a confidence threshold for unusual phrasing. Each level is measurable before the next is added." },
      { title: "Idempotent by design", body: "Jobs are keyed by a hash of company, title and country; running a job twice updates last_seen_at instead of creating a duplicate. Malformed messages go to a dead-letter topic with the reason." },
      { title: "Respect each source's rules", body: "Per-source rate limits and attribution are configuration, not afterthoughts. Postings are never scraped from sites whose terms forbid it, and personal data in postings is not stored." },
    ],
    ml: {
      intro: "The planned ML components, each with a stated way to evaluate it.",
      rows: [
        ["Role classifier", "TF-IDF + logistic regression", "Accuracy"],
        ["Skill extraction", "Dictionary, spaCy, embeddings", "Precision and recall on ~200 hand-labelled jobs"],
        ["Gap analysis", "Weighted set comparison", "Match % and missing skills ranked by demand"],
        ["Job matching", "Cosine similarity on skill vectors", "Ranked top-N with score"],
        ["Trend forecast", "Exponential smoothing", "MAPE, only once ~8 weeks of history exist"],
      ],
    },
    delivery: {
      title: "Build plan and quality",
      intro: "The plan is to build thin and in order, running each stage end to end before adding the next.",
      order: [
        "Docker and PostgreSQL, one API into the raw layer",
        "Kafka, cleaner and de-duplication",
        "Skill extraction, dictionary first",
        "Warehouse and weekly aggregates",
        "Spring Boot read API, then authentication",
        "ML gap analysis and recommendations",
        "Angular, then Power BI, then Flutter",
        "Tests, documentation, demo",
      ],
      items: [
        ["Run", "docker compose up, with core and full profiles"],
        ["Tests", "Unit, Testcontainers integration, contract and data-quality tests"],
        ["CI", "GitHub Actions"],
        ["API docs", "OpenAPI via springdoc"],
      ],
    },
    statusReport: {
      summary: "Specification stage. Update the rows below as each piece is implemented; this is the only place that needs changing.",
      rows: [
        ["Product requirements (PRD)", "Written"],
        ["Technical requirements (TRD)", "Written"],
        ["Application flow, UI/UX brief, schema plan, architecture guide", "Written"],
        ["Ingestion adapters and scheduler", "Planned"],
        ["Kafka pipeline, cleaning and skill extraction", "Planned"],
        ["PostgreSQL warehouse and aggregates", "Planned"],
        ["ML service (gap, matching, forecast)", "Planned"],
        ["Spring Boot API", "Planned"],
        ["Angular web app", "Planned"],
        ["Power BI dashboard", "Planned"],
        ["Flutter mobile app", "Planned"],
      ],
    },
  },

  // ------------------------------------------------------ Queue Management System
  {
    slug: "queue-management-system",
    tagline: "A ticket-queue system that runs on a single ESP8266",
    facts: [
      ["Board", "ESP8266 (NodeMCU)"],
      ["Language", "C++ (Arduino framework)"],
      ["Display", "16×2 LCD"],
      ["Network", "Own Wi-Fi access point + router, mDNS name"],
      ["Interfaces", "Ticket page, counter page, live screen"],
    ],
    overview: [
      "A queue-control system for a shop or a bank, running entirely on an ESP8266 microcontroller. Customers take a numbered ticket from a web page, staff call the next ticket from a counter page, and the current number is shown on a 16×2 LCD and pushed live to every connected screen.",
      "The board serves everything itself: three web interfaces and a small JSON API, with no external server.",
    ],
    goals: {
      goals: [
        "Run a complete queue system on one low-cost microcontroller.",
        "Support many counters at once, each with its own independent queue.",
        "Update every connected screen instantly when a ticket is called.",
        "Keep tickets easy to read: no letters that look like digits.",
      ],
    },
    contribution: [
      "Wrote the firmware: Wi-Fi setup, web server, JSON API and server-sent events.",
      "Implemented a queue class that manages 16 counters, with persistence of the settings.",
      "Built the three web interfaces served from the board: take a ticket, counter control and public screen.",
      "Drove the LCD with the current ticket.",
    ],
    architecture: {
      intro:
        "One ESP8266 hosts the access point, the web server and the queue logic. Browsers on the same network load the pages from the board and listen to a server-sent-events stream for updates.",
      diagrams: [{ key: "queue-architecture", caption: "Everything runs on the board: pages, API, queue logic and display." }],
    },
    stack: [
      { name: "ESP8266 · Arduino C++", role: "Firmware, Wi-Fi and the async web server." },
      { name: "WQueue class", role: "16 independent queues, one per counter, with push, next, remaining and persistence." },
      { name: "Server-sent events", role: "Pushes the called ticket to every open screen." },
      { name: "LiquidCrystal LCD (16×2)", role: "Shows “Now serving” and the current ticket." },
      { name: "mDNS + soft access point", role: "Reachable by name on the network, and works without a router." },
      { name: "HTML / CSS / JavaScript", role: "The three interfaces, served from the firmware." },
    ],
    decisions: [
      { title: "Ticket letters skip I and O", body: "Tickets look like A001, A002 and so on, using a letter set that leaves out I and O so they cannot be confused with 1 and 0." },
      { title: "Push, not poll", body: "Screens subscribe to a server-sent-events stream instead of refreshing, so a called ticket appears at once and the tiny board is not hammered by requests." },
      { title: "Independent queues per counter", body: "Each of the 16 counters has its own queue, so a bank or shop with several windows can run them in parallel on the same device." },
      { title: "Self-contained network", body: "The board starts its own access point and also joins the local router, so the system keeps working even if the shop network is down." },
    ],
    delivery: {
      intro: "The firmware's JSON API.",
      items: [
        ["POST /api/push", "Issue a ticket for a counter"],
        ["POST /api/next", "Call the next ticket"],
        ["GET /api/counter", "Current ticket for each counter"],
        ["GET /api/stat", "Remaining and current for one counter"],
        ["GET/POST /api/news", "Banner title and subtitle"],
        ["GET/POST /api/setup", "Read or save the queue settings"],
      ],
    },
    statusReport: {
      summary: "A firmware project from 2023. Photos of the hardware are still to be added to this page.",
    },
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
