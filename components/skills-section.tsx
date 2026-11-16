import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          index="03"
          title="Skills"
          note="8 groups"
        />

        <dl>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-1 border-b border-rule py-3 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6"
            >
              <dt className="text-[13px] font-medium leading-6 text-ink">
                {group.title}
              </dt>
              <dd className="text-[14px] leading-6 text-ink-2">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
