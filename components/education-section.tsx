import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  certifications,
  education,
  languages,
} from "@/lib/education";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          index="05"
          title="Education"
          note="SSUET · 2023–2027"
        />

        <div className="grid gap-6 border-b border-rule py-8 md:grid-cols-[170px_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-[11px] text-ink-2">
              {education.period}
            </p>
            <p className="mt-1 font-mono text-[10px] text-ink-3">
              {education.location}
            </p>
          </div>

          <div>
            <h3 className="text-[22px] leading-tight text-ink">
              {education.institution}
            </h3>
            <p className="mt-1 text-[14px] text-ink-2">
              {education.degree} · {education.status}
            </p>

            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[10px] text-ink-3">CGPA</dt>
                <dd className="tabular mt-1 text-[15px] text-ink">
                  {education.cgpa}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] text-ink-3">Credits</dt>
                <dd className="tabular mt-1 text-[15px] text-ink">
                  {education.credits}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] text-ink-3">Batch</dt>
                <dd className="mt-1 text-[15px] text-ink">
                  {education.details[0]}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <p className="font-mono text-[10px] text-ink-3">Semester GPA</p>
              <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-3 sm:grid-cols-6">
                {education.semesterGpas.map((semester) => (
                  <div key={semester.term}>
                    <p className="tabular font-mono text-[11px] text-ink">
                      {semester.gpa}
                    </p>
                    <p className="font-mono text-[9px] leading-4 text-ink-3">
                      {semester.term}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[10px] text-ink-3">
                Selected coursework
              </p>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-6 text-ink-2">
                {education.coursework.slice(0, 10).join(" · ")}
              </p>
            </div>

            <p className="mt-4 text-[12.5px] text-ink-3">
              {languages.map((language) => language.name).join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-[21px] text-ink">Certifications</h3>
            <p className="font-mono text-[10px] text-ink-3">
              {certifications.length} completed
            </p>
          </div>

          <div className="mt-2">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="row-link grid gap-1 border-b border-rule px-0 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
              >
                <div className="min-w-0">
                  <span className="text-[14.5px] text-ink">{cert.name}</span>
                  <span className="ml-2 font-mono text-[10px] text-ink-3">
                    {cert.issuer}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[10px] text-ink-3">
                  <span>{cert.completed}</span>
                  <ArrowUpRight className="size-3" strokeWidth={1.5} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
