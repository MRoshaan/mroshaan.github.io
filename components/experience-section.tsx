import { SectionHeading } from "@/components/section-heading";

const experience = [
  {
    role: "Research Mentee",
    org: "SPAR AI (Supervised Program for Alignment Research)",
    detail: "RLVR safety evaluation · Remote",    period: "Sep 2026 – Present",
    stack: ["Python", "RLVR", "GRPO", "Bootstrap Statistics", "Gemini"],
    bullets: [
      "Contribute to an RLVR safety-evaluation study separating changed behavior from changed measurement along a GRPO training trajectory (Tulu 3.1 8B, 12 pinned checkpoints, 6,912 responses).",
      "Work on a 24-source counterbalanced safety instrument (72 wordings × 6 orderings) with frozen claim gates and blinded AI-reviewer scoring.",
    ],
  },
  {
    role: "AI/LLM Evaluator",
    org: "Turing",
    detail: "Scientific AI Evaluation · Remote",
    period: "Sep 2026 – Present",
    stack: ["Python", "Jupyter", "NumPy", "LaTeX", "Gemini", "GPT", "Claude"],
    bullets: [
      "Analyze Physics and Materials Science papers to design LLM benchmarks that require scientific reasoning and computation.",
      "Develop Python and Jupyter prompts, reference solutions, and executable tests for numerical accuracy and reproducibility.",
      "Benchmark Gemini, GPT, and Claude across repeated runs; diagnose failures and refine tasks and tests.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "10Pearls Pakistan",
    detail: "10Pearls Shine Internship · Remote",
    period: "Apr 2026 – Jun 2026",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Hopsworks",
    ],
    bullets: [
      "Built and evaluated machine learning workflows covering data preparation, feature engineering, model evaluation, and experiment tracking.",
      "Worked with Python data and machine learning tooling in a structured internship environment.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          index="04"
          title="Experience"
          note="3 roles · 2 current"
        />

        {experience.map((job) => (
          <article
            key={`${job.role}-${job.org}`}
            className="grid gap-2 border-b border-rule py-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-6"
          >
            <div>
              <p className="font-mono text-[11px] text-ink-2">{job.period}</p>
              <p className="mt-1 font-mono text-[10px] text-ink-3">{job.detail}</p>
            </div>

            <div>
              <h3 className="text-[22px] leading-tight text-ink">{job.role}</h3>
              <p className="mt-1 text-[13px] text-ink-2">{job.org}</p>

              <ul className="mt-4 max-w-2xl space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="pl-4 -indent-4 text-[14.5px] leading-6 text-ink-2"
                  >
                    <span className="mr-2 text-ink-3">·</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-[10px] leading-5 text-ink-3">
                {job.stack.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
