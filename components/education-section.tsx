import { ArrowUpRight, Award, GraduationCap, Languages } from "lucide-react";
import {
  certifications,
  education,
  languages,
} from "@/lib/education";
import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";
import { AnimatedGroup } from "@/components/ui/animated-group";

export function EducationSection() {
  return (
    <section id="education" className="border-b border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Foundations"
          title="Education and certifications"
          blurb="The degree in progress, the courses behind it, and the credentials collected along the way."
        />

        {/* education */}
        <div className="panel relative overflow-hidden p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-accent">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <h3 className="display text-xl font-semibold text-pretty sm:text-2xl">
                {education.institution}
              </h3>
              <div className="mt-1 flex flex-col gap-0.5 font-mono text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-2">
                <span>{education.degree}</span>
                <span className="hidden sm:inline">·</span>
                <span>{education.location}</span>
              </div>
              <div className="mt-1 flex flex-col gap-0.5 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 sm:text-sm">
                {education.details.map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    {i > 0 && <span className="hidden sm:inline">·</span>}
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-1.5 font-mono text-xs text-muted-foreground/60">
                {education.period}
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <Stat label="Status" value={education.status} />
            <Stat label="CGPA" value={education.cgpa} />
            <Stat label="Progress" value={education.credits} />
          </div>

          <div className="mt-7 border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Semester GPAs</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {education.semesterGpas.map((s) => (
                <span
                  key={s.term}
                  className="font-mono text-xs text-muted-foreground"
                >
                  <span className="text-foreground">{s.gpa}</span> {s.term}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Selected coursework</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {education.coursework.map((course) => (
                <Badge key={course} variant="outline" className="border-border">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            <Languages className="size-4 text-accent" />
            {languages.map((language) => (
              <span key={language.name} className="text-sm text-muted-foreground">
                <span className="text-foreground">{language.name}</span>
                {" · "}
                {language.level}
              </span>
            ))}
          </div>
        </div>

        {/* certifications */}
        <h3 className="display mt-16 flex items-center gap-3 text-2xl font-semibold tracking-tight">
          <Award className="size-5 text-accent" />
          Certifications
        </h3>

        <AnimatedGroup preset="slide" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="group panel flex h-full flex-col p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <h4 className="display mt-3 leading-snug font-semibold">
                {cert.name}
              </h4>
              <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground">
                {cert.completed}
                {cert.duration ? ` · ${cert.duration}` : ""}
              </p>
            </a>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="eyebrow text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm leading-snug text-foreground">{value}</p>
    </div>
  );
}
