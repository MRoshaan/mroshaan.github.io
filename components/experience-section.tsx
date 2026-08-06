import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    role: "Data Science Intern",
    company: "Data Science Intern",
    org: "10Pearls Pakistan (NASTP)",
    program: "10P Shine Internship Program",
    period: "Apr 2026 – Jun 2026",
    location: "Remote",
    stack: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "Hopsworks", "Jupyter"],
    bullets: [
      "Built and evaluated machine learning workflows for practical data science tasks.",
      "Applied data preparation, feature engineering, model evaluation, and experiment tracking concepts.",
      "Worked with Python data and machine learning tooling in a structured internship environment.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Experience"
          blurb="Where I've applied this in a structured setting."
        />
        <div className="space-y-6">
          {experience.map((e) => (
            <div
              key={e.org + e.period}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">
                    Data Science Intern <span className="text-accent">@ 10Pearls Pakistan</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    10P Shine Internship Program · Remote
                  </p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  Apr 2026 – Jun 2026
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.stack.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}