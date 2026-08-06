export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    blurb: "Where the systems are written.",
    items: ["Python", "Java", "SQL"],
  },
  {
    title: "Backend & APIs",
    blurb: "Services, contracts, and background work.",
    items: [
      "FastAPI",
      "SQLAlchemy",
      "Celery",
      "Pydantic",
      "REST",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    blurb: "Relational, document, and in-memory stores.",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Data & ML",
    blurb: "Pipelines, models, and explainable inference.",
    items: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Hopsworks",
      "Power BI",
    ],
  },
  {
    title: "Tools & Platforms",
    blurb: "The workspace.",
    items: ["Git", "Docker", "Jupyter"],
  },
];