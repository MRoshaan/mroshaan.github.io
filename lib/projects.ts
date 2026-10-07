export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  repo: string;
  category: string;
  problem: string;
  approach: string[];
  outcome: string[];
  outcomeTitle?: string;
  note?: string;
  status?: string;
  diagram?: "seatvault" | "etl";
};

export type CompactProject = {
  name: string;
  summary: string;
  stack: string[];
  repo: string;
  tag: string;
  period: string;
};

export const projects: Project[] = [
  {
    slug: "seatvault",
    name: "SeatVault",
    tagline: "Transaction-safe concurrency engine for high-contention reservations",
    summary:
      "Backend system for high-contention reservations with atomic inventory control, Redis distributed locking, PostgreSQL row locks, and idempotent payment-style workflows.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    repo: "https://github.com/MRoshaan/SeatVault",
    category: "Backend · Distributed Systems",
    problem:
      "Reservations under flash-sale load collapse into overselling and double-bookings. The hard part is keeping inventory consistent while many requests race for the same seat at once.",
    approach: [
      "Set explicit transaction boundaries so inventory deductions were atomic and rollback-safe.",
      "Serialized contention on hot seat keys with Redis distributed locks before touching the database.",
      "Backed the locks with PostgreSQL row-level locking so state stayed correct across split transactions.",
      "Modeled payment-style workflows as idempotent operations finalized in the background with Celery.",
    ],
    outcome: [
      "Prevents overselling under concurrent requests through layered locking.",
      "Idempotent background workflows close the double-book gap.",
      "Distributed locks and row locks each do one defined job.",
    ],
    diagram: "seatvault",
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    tagline: "Real-time fraud detection with explainable AI",
    summary:
      "Fraud-detection service combining real-time event processing, machine learning inference, explainability, and operational monitoring.",
    stack: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Redis",
      "PostgreSQL",
      "Hopsworks",
    ],
    repo: "https://github.com/MRoshaan/sentinel",
    category: "AI/ML · MLOps",
    problem:
      "Fraud detection has to score events in real time and explain itself. A black-box score is not enough when a declined transaction gets reviewed.",
    approach: [
      "Built an inference workflow covering feature preparation, model serving, explainability, and monitoring.",
      "Served predictions through FastAPI with scikit-learn, XGBoost, and LightGBM models.",
      "Used Redis and PostgreSQL for event handling, caching, and persistence.",
      "Added explainability so each decision can be traced and audited.",
    ],
    outcome: [
      "Runs inference in real time with production-oriented ML operations.",
      "Every score ships with an explanation a reviewer can inspect.",
      "Feature, model, and monitoring concerns stay separated in the service.",
    ],
  },
  {
    slug: "booknscore",
    name: "BooknScore",
    tagline: "Offline-first cricket scoring with a dual database",
    summary:
      "Offline-first tape-ball cricket scoring and tournament platform with player and team analytics, authentication, synchronization, and a companion AI service.",
    stack: [
      "Flutter",
      "Supabase",
      "PostgreSQL",
      "SQLite",
      "Python",
      "Gemini",
      "LLM Agents",
    ],
    repo: "https://github.com/MRoshaan/booknscore",
    category: "Full Stack · Offline-First",
    problem:
      "Tape-ball cricket is scored where connections drop. The app had to keep working offline and reconcile every match once it came back online.",
    approach: [
      "Designed the relational schema and scoring engine for offline-first use.",
      "Ran SQLite locally and Supabase/PostgreSQL as the source of truth in the cloud.",
      "Synchronized records on reconnect with a zero-data-loss design.",
      "Built a companion Python and Gemini multimodal AI service that turns match data into cinematic commentary and production scripts.",
    ],
    outcome: [
      "Scoring continues through network interruptions with zero data loss on reconnect.",
      "Player, team, and match analytics come out structured.",
      "The AI service derives commentary and video-ready scripts from raw match events.",
    ],
  },
  {
    slug: "safetyshield",
    name: "SafetyShield",
    tagline: "Bayesian-efficient AI-safety evaluation and guardrail (FYP)",
    summary:
      "Registered final year project (team of 4, SSUET): a Bayesian-efficient AI-safety evaluation platform that detects risky model behavior with far fewer prompt evaluations, plus a guardrail add-on that reduces unsafe outputs.",
    stack: [
      "Python",
      "FastAPI",
      "Bayesian Statistics",
      "LLM Evaluation",
      "Guardrails",
      "React",
    ],
    repo: "https://github.com/MRoshaan/safetyshield",
    category: "AI Safety · Final Year Project",
    status: "Registered · design stage",
    problem:
      "Testing an AI system for unsafe behavior normally takes hundreds or thousands of repeated prompt evaluations. That cost puts careful safety testing out of reach for smaller teams and projects.",
    approach: [
      "Designed the platform architecture: a Bayesian early-stopping evaluation engine, a probe dataset, a guardrail kit, and an examiner dashboard.",
      "Chose Bayesian early stopping to detect risky behavior with a fraction of the prompt evaluations.",
      "Planned a guardrail add-on measured side by side against an unguarded model in a live dashboard.",
      "Explained the architecture to the four-member FYP team to build shared understanding of evals and safety measurement.",
    ],
    outcomeTitle: "Targets",
    outcome: [
      "Detect risk with at least 70% to 80% fewer prompt evaluations than a full sweep.",
      "Agreement of 95% or higher between the full evaluation and the early-stopped one.",
      "Reduce unsafe outputs from roughly 60% to about 10% with the guardrail in place.",
    ],
    note: "These are demo targets for the 2026-2027 build, not measured results.",
  },
  {
    slug: "enterprise-etl",
    name: "Inventory ETL & Alerting Pipeline",
    tagline: "Scheduled ingestion, validation, and threshold alerting",
    summary:
      "Data pipeline that extracts inventory information, transforms and validates records, loads structured output, and generates alerts for operational conditions.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "Docker",
    ],
    repo: "https://github.com/MRoshaan/enterprise-inventory-etl",
    category: "Data Engineering · ETL",
    problem:
      "Inventory data arrives from multiple sources in inconsistent shapes. Loading it reliably, validating every record, and surfacing problems before they become stockouts is the whole job.",
    approach: [
      "Split the pipeline into maintainable stages: ingestion, transformation, validation, persistence, and alerting.",
      "Used SQLAlchemy and structured database access for repeatable loads.",
      "Scheduled processing asynchronously with Celery and Redis so runs were repeatable rather than ad hoc.",
      "Generated alerts when inventory crossed configured thresholds.",
    ],
    outcome: [
      "A maintainable pipeline where each stage does one job.",
      "Repeatable asynchronous runs instead of one-off scripts.",
      "Threshold alerts surface operational conditions early.",
    ],
    diagram: "etl",
  },
];

export const moreProjects: CompactProject[] = [
  {
    name: "Tool-Calling Reliability Benchmark",
    summary:
      "Open-source contribution: merged a GitHub Actions CI workflow that runs the core pytest suite on every push and pull request, and fixed the evaluation summary's diagnostic-label counting with regression tests.",
    stack: ["Python", "pytest", "GitHub Actions"],
    repo: "https://github.com/MRoshaan/tool-calling-reliability-benchmark",
    tag: "Open source · LLM evaluation",
    period: "Aug 2026",
  },
  {
    name: "FlashSale Concurrency Engine",
    summary:
      "High-contention flash-sale backend focused on inventory correctness, atomic reservation logic, and race-condition prevention.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    repo: "https://github.com/MRoshaan/flashsale-concurrency-engine",
    tag: "Backend · Concurrency",
    period: "Dec 2025 - Jan 2026",
  },
  {
    name: "Geospatial Fleet Dispatch API",
    summary:
      "Serverless real-time fleet dispatch ingesting driver coordinates and mapping nearby vehicles through geospatial database queries and a command-center interface.",
    stack: ["FastAPI", "MongoDB", "Cloudflare Workers", "Next.js", "WebSockets"],
    repo: "https://github.com/MRoshaan/edge-logistics-pipeline",
    tag: "Backend · Serverless",
    period: "2025 - 2026",
  },
  {
    name: "Dealer & Vehicle Inventory Module",
    summary:
      "Java Spring Boot modular monolith with tenant-aware data isolation, custom query filtering, and role-based access control.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Maven"],
    repo: "https://github.com/MRoshaan/dealer-inventory-modular-monolith",
    tag: "Backend · Multi-tenant",
    period: "2025 - 2026",
  },
  {
    name: "FastAPI Book Manager API",
    summary:
      "CRUD API for book management using FastAPI, MySQL, SQLAlchemy ORM, and Pydantic validation.",
    stack: ["Python", "FastAPI", "MySQL", "SQLAlchemy", "Pydantic"],
    repo: "https://github.com/MRoshaan/fastapi-book-api",
    tag: "Backend · API",
    period: "2025 - 2026",
  },
  {
    name: "Movie Ticket Booking System",
    summary:
      "Python GUI application for movie ticket booking with relational data management, authentication, and seat reservation logic.",
    stack: ["Python", "MySQL", "GUI"],
    repo: "https://github.com/MRoshaan/movie-ticket-booking-system",
    tag: "Desktop · Database",
    period: "2025 - 2026",
  },
  {
    name: "Netflix Content Analysis",
    summary:
      "Data cleaning, exploration, and visualization project using the Netflix dataset.",
    stack: ["Python", "Jupyter Notebook", "Pandas"],
    repo: "https://github.com/MRoshaan/Netflix-Content-Analysis",
    tag: "Data · Analytics",
    period: "2025 - 2026",
  },
  {
    name: "Shopping Mall Sales & Customer Insights",
    summary:
      "Power BI dashboard analyzing sales and customer behavior through revenue trends, age-group spending, product categories, and payment methods.",
    stack: ["Power BI", "DAX"],
    repo: "https://github.com/MRoshaan/Shopping-Mall-Sales-Customer-Insights---Power-BI-Dashboard",
    tag: "Analytics · BI",
    period: "2025 - 2026",
  },
  {
    name: "Social Sentiment Dashboard",
    summary:
      "Power BI dashboard visualizing sentiment patterns across social media platforms using hashtag-level data.",
    stack: ["Power BI", "DAX"],
    repo: "https://github.com/MRoshaan/social-sentiment",
    tag: "Analytics · BI",
    period: "2025 - 2026",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
