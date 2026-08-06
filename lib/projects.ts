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
  diagram?: "seatvault" | "etl";
};

export const projects: Project[] = [
  {
    slug: "seatvault",
    name: "SeatVault",
    tagline: "Transaction-safe concurrency engine for high-contention reservations",
    summary:
      "Backend system for high-contention reservations with atomic inventory control, Redis distributed locking, PostgreSQL row locks, and idempotent payment-style workflows.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    repo: "https://github.com/MRoshaan/SeatVault",
    category: "Backend · Distributed Systems",
    problem:
      "Reservations under flash-sale load collapse into overselling and double-bookings. The core difficulty is keeping inventory internally consistent while many requests race for the same seat at once.",
    approach: [
      "Designed explicit transaction boundaries so inventory deductions were atomic and rollback-safe.",
      "Used Redis distributed locks to serialize contention on hot seat keys before touching the database.",
      "Backed them with PostgreSQL row-level locks so state stayed correct even under split transactions.",
      "Implemented idempotent payment-style workflows and background processing with Celery for reliable finalization.",
    ],
    outcome: [
      "Prevents overselling under concurrent requests via layered locking.",
      "Idempotency + background wrkers close the double-charge / double-book gap.",
      "Squates distributed-locking and row-locking responsibilities deliberately.",
    ],
    diagram: "seatvault",
  },
  {
    slug: "enterprise-etl",
    name: "Enterprise ETL & Inventory Pipeline",
    tagline: "540K+ records, scheduled processing, threshold alerts",
    summary:
      "A data pipeline that ingests inventory, transforms and validates records, bulk-loads structured output into Supabase/PostgreSQL, and emits alerts for operational conditions.",
    stack: ["FastAPI", "PostgreSQL", "Supabase", "SQLAlchemy", "Celery", "Redis"],
    repo: "https://github.com/MRoshaan/enterprise-inventory-etl",
    category: "Data Engineering · ETL",
    problem:
      "Bulk-loading half a million inventory records reliably, keeping scheduling repeatable, and surfacing operational anomalies before they become stockouts.",
    approach: [
      "Split the work into maintainable stages: ingestion, transformation, validation, persistence, and alerting.",
      "Used Pandas + SQLAlchemy to clean and bulk-load 540K+ records into Supabase/PostgreSQL.",
      "Scheduled processing with Celery + Redis so the pipeline runs repeatably, not ad-hoc.",
      "Generated real-time alerts when inventory crossed configured thresholds.",
    ],
    outcome: [
      "540K+ records bulk-loaded into Supabase/PostgreSQL.",
      "Structured, repeatable data operations for daily inventory runs.",
      "Asynchronous task processing keeps ingestion off the request path.",
    ],
    diagram: "etl",
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    tagline: "Real-time fraud detection with explainable AI",
    summary:
      "Fraud-detection service combining real-time event processing, ML inference via a max-vote ensemble, explainability, and operational monitoring.",
    repo: "https://github.com/MRoshaan/sentinel",
    stack: ["FastAPI", "scikit-learn", "XGBoost", "LightGBM", "Redis", "PostgreSQL", "Hopsworks"],
    category: "AI/ML · MLOps",
    problem:
      "Fraud detection needs both real-time inference and a reason a human can read. Black-box scores alone don't cut it when a declined transaction gets reviewed.",
    approach: [
      "Built a max-vote ensemble of Random Forest, XGBoost, and LightGBM for the scoring layer.",
      "Served FastAPI prediction endpoints with in-memory velocity rate limiting.",
      "Applied heuristic overrides to hard-rule obvious cases.",
      "Reported Euclidean anomaly tracing surfaced per-prediction explanations (XAI).",
    ],
    outcome: [
      "Ensemble reported ~0.9995 ROC AUC on a 1.27M-sample test set (PaySim).",
      "Rate limiting + overrides keep the API honest under bursts.",
      "Anomaly tracing turns predictions into auditable explanations.",
    ],
  },
  {
    slug: "booknscore",
    name: "BooknScore",
    tagline: "Offline-first cricket scoring with a dual database",
    summary:
      "Offline-first tape-ball cricket scoring with player and team analytics, authentication, synchronization, and a companion Python + Gemini AI service.",
    repo: "https://github.com/MRoshaan/booknscore",
    stack: ["Flutter", "Supabase", "PostgreSQL", "SQLite", "Python", "Gemini"],
    category: "Full Stack · Offline-First",
    problem:
      "Cricket scoring is most needed where the connection drops. The app had to keep working locally and reconcile perfectly once it came back online.",
    approach: [
      "Designed the relational schema and scoring engine for offline-first use.",
      "Ran SQLite locally and Supabase/PostgreSQL as the sync target.",
      "Synchronized on reconnect with a zero-data-loss design across network interruptions.",
      "Built a Python + Gemini multimodal AI service using agents to turn match data into commentary scripts.",
    ],
    outcome: [
      "App continues scoring offline with zero data loss on reconnect.",
      "Dual DB gives local speed with cloud durability.",
      "AI commentary service derives story from raw match events.",
    ],
  },
  {
    slug: "fleet-dispatch",
    name: "Geospatial Fleet Dispatch API",
    tagline: "Proximity dispatch over MongoDB 2dsphere + WebSockets",
    summary:
      "Serverless real-time fleet dispatch ingesting driver coordinates and mapping nearby vehicles via geospatial database queries, surfaced in a Next.js command center over WebSockets.",
    repo: "https://github.com/MRoshaan/edge-logistics-pipeline",
    stack: ["FastAPI", "MongoDB", "Cloudflare Workers", "Next.js", "WebSockets"],
    category: "Backend · Geospatial",
    problem:
      "Continuously tracking drivers and answering 'who is near this point' in real-time is a geometry problem as much as a networking one.",
    approach: [
      "Indexed locations with MongoDB 2dsphere for proximity lookups.",
      "Solved 'nearest vehicles' with $geoNear queries.",
      "Pushed live driver updates through a Next.js command-center UI over WebSockets.",
    ],
    outcome: [
      "Real-time proximity mapping instead of brute-force scanning.",
      "Live updates over WebSockets keep the command center current.",
      "Serverless ingestion (Cloudflare Workers) side-steps tighten on the write path.",
    ],
  },
  {
    slug: "dealer-inventory",
    name: "Dealer & Vehicle Inventory Module",
    tagline: "Multi-tenant isolation with X-Tenant-Id",
    summary:
      "Java Spring Boot modular monolith with tenant-aware data isolation, custom query filtering, and role-based access control.",
    repo: "https://github.com/MRoshaan/dealer-inventory-modular-monolith",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Maven"],
    category: "Backend · Multi-Tenant",
    problem:
      "One codebase serving many dealers means every query must be scoped to the right tenant — and only the right roles get the keys.",
    approach: [
      "Built a modular monolith with Clean Architecture to keep tenant boundaries explicit.",
      "Propagated X-Tenant-Id header to isolate data per tenant.",
      "Implemented custom query filtering and role-based access control around the module.",
    ],
    outcome: [
      "Layered modules around clear domain responsibilities.",
      "Data isolation scoped per tenant on every read.",
      "RBAC gates actions that cross tenant or role lines.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}