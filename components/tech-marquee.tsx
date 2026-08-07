export function TechMarquee() {
  const items = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Docker",
    "SQLAlchemy",
    "MongoDB",
    "Supabase",
    "scikit-learn",
    "XGBoost",
    "LightGBM",
    "Next.js",
    "Flutter",
    "Java / Spring Boot",
    "Power BI",
  ];

  const row = [...items, ...items];

  return (
    <section className="marquee-mask overflow-hidden border-b border-border py-6">
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display flex shrink-0 items-center gap-8 text-lg font-medium text-muted-foreground/80"
          >
            <span>{item}</span>
            <span className="text-accent/70">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}