export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    blurb: "Services, contracts, and background work.",
    items: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "REST APIs",
      "WebSockets",
      "SQLAlchemy",
      "Pydantic",
    ],
  },
  {
    title: "Concurrency & Distributed Systems",
    blurb: "Keeping state correct when requests race.",
    items: [
      "Distributed Locking",
      "Race-Condition Prevention",
      "Atomic Transactions",
      "Idempotent Workflows",
      "Asynchronous Processing",
      "Celery",
      "Redis",
    ],
  },
  {
    title: "Databases & Cloud",
    blurb: "Relational, document, and in-memory stores.",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Supabase",
      "SQL",
      "Database Design",
      "Data Synchronization",
      "Docker",
      "Cloudflare Workers",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    blurb: "Pipelines, validation, and reporting.",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "ETL Pipelines",
      "Data Cleaning",
      "Data Validation",
      "Power BI",
      "DAX",
      "Jupyter",
    ],
  },
  {
    title: "Machine Learning & MLOps",
    blurb: "Models from feature to deployment.",
    items: [
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Feature Engineering",
      "Model Evaluation",
      "Hopsworks",
      "Model Deployment",
      "MLOps",
    ],
  },
  {
    title: "Generative AI",
    blurb: "LLM features and agent workflows.",
    items: [
      "Gemini",
      "LLM Agents",
      "Multimodal AI",
      "Prompt Engineering",
      "Model Deployment",
    ],
  },
  {
    title: "AI Safety & LLM Evaluation",
    blurb: "Measuring models honestly.",
    items: [
      "LLM Evaluation",
      "Tool Calling",
      "Fault Injection",
      "Bayesian Statistics",
      "Guardrails",
      "AI Alignment Concepts",
    ],
  },
  {
    title: "Systems Engineering",
    blurb: "Designing for load and failure.",
    items: [
      "High-Concurrency System Design",
      "Zero-Data-Loss Pipelines",
      "Data Integrity",
      "System Stability Under Load",
      "Load Balancing",
      "Horizontal & Vertical Scaling",
    ],
  },
];
