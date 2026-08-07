import { AnimatedGroup } from "@/components/ui/animated-group";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function StatsStrip() {
  const stats = [
    { value: 540, suffix: "K+", decimals: 0, label: "records through the ETL pipeline" },
    { value: 0.9995, suffix: "", decimals: 4, label: "ROC AUC on a 1.27M-sample fraud set" },
    { value: 6, suffix: "", decimals: 0, label: "systems shipped end-to-end" },
    { value: 3.81, suffix: "", decimals: 2, label: "CGPA — BS Computer Science" },
  ];

  return (
    <section className="border-b border-border">
      <AnimatedGroup preset="slide" className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="py-4 pr-6">
            <p className="display text-4xl font-bold text-accent sm:text-5xl">
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
              />
            </p>
            <p className="mt-2 max-w-[16ch] text-sm leading-snug text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </AnimatedGroup>
    </section>
  );
}