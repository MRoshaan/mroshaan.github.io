import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";
import { AnimatedGroup } from "@/components/ui/animated-group";

const experience = [
  {
    role: "AI/LLM Evaluator",
    org: "Scientific AI Evaluation",
    program: "Physics & Materials Science",
    period: "Sep 2026 - Present",
    location: "Remote",
    stack: [
      "Python",
      "NumPy",
      "Jupyter",
      "Google Colab",
      "LaTeX",
      "Gemini",
      "GPT",
      "Claude",
    ],
    bullets: [
      "Review Physics and Materials Science research papers to find problems that need real numerical or computational work, not formula substitution.",
      "Design self-contained Jupyter Notebook benchmarks with a main problem, two sub-problems, reference solutions, and executable test suites.",
      "Validate scientific correctness, numerical accuracy, domain boundaries, and reproducibility with appropriate floating-point tolerances.",
      "Evaluate Gemini, GPT, and Claude across repeated runs, diagnosing failures and refining prompts, reference implementations, and test coverage.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "10Pearls Pakistan",
    program: "10Pearls Shine Internship Program",
    period: "Apr 2026 - Jun 2026",
    location: "Remote",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Hopsworks",
      "Jupyter",
    ],
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
          index="04"
          eyebrow="Experience"
          title="Where the work happens"
          blurb="Scientific benchmark evaluation in progress, applied data science completed, both remote."
        />

        <AnimatedGroup preset="slide" className="space-y-6">
          {experience.map((e) => (
            <div key={`${e.role}-${e.org}`} className="panel relative overflow-hidden p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 className="display text-2xl font-semibold leading-snug">
                  {e.role} <span className="text-accent">@ {e.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {e.period}
                </span>
              </div>
              <p className="mt-1.5 font-mono text-sm text-muted-foreground">
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
    </section>
  );
}
