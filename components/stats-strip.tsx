export function StatsStrip() {
  const stats = [
    { value: "2", label: "accepted papers at NeurIPS 2026 workshops" },
    { value: "4", label: "AI safety and LLM evaluation contributions" },
    { value: "3.80", label: "CGPA · BS Computer Science, SSUET" },
    { value: "6", label: "certifications from Udemy, DataCamp, and Cisco" },
  ];

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="py-4 pr-6">
            <p className="display text-4xl font-bold text-accent sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 max-w-[18ch] text-sm leading-snug text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
