import { skillGroups } from "@/lib/skills";
import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Skills"
          blurb="The tools I reach for when I'm building a backend, a pipeline, or a model."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
                {g.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <Badge key={s} variant="outline" className="border-border text-foreground">
                    {s}
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