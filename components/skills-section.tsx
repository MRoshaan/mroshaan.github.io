import { skillGroups } from "@/lib/skills";
import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="The stack I reach for"
          blurb="Languages, frameworks, and runtimes, grouped by where they earn their keep in my work."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className="group panel relative overflow-hidden p-6 transition-colors hover:border-accent/30"
            >
              <span className="pointer-events-none absolute right-5 top-4 font-mono text-xs text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display flex items-center gap-2 text-lg font-semibold text-accent">
                {g.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{g.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
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