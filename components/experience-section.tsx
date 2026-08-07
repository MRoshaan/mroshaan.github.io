import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";
import { AnimatedGroup } from "@/components/ui/animated-group";

const experience = [
  {
    role: "Data Science Intern",
    org: "10Pearls Pakistan",
    program: "10P Shine Internship Program · NASTP",
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
    <section id="experience" className="border-b border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Path"
          title="Where it's being applied"
          blurb="A structured setting to turn what YouTube-style learning into something repeatable."
        />

        <div className="panel relative overflow-hidden p-6 sm:p-8">
          <span className="pointer-events-none absolute right-6 top-6 font-mono text-xs text-muted-foreground/40">
            APR—JUN 2026
          </span>
          <AnimatedGroup preset="slide">
            {experience.map((e) => (
              <div key={e.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="display text-2xl font-semibold">
                    {e.role}{" "}
                    <span className="text-accent">@ {e.org}</span>
                  </h3>
                </div>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {e.program} · {e.location}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-1">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-[color:var(--copy)]">
                      <span className="mt-[9px] size-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-1.5">
                  {e.stack.map((t) => (
                    <Badge key={t} variant="secondary" className="border-border">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}