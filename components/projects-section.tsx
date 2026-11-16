import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { moreProjects, projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          index="02"
          title="Selected work"
          note="5 case studies"
        />

        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid gap-3 border-b border-rule py-8 md:grid-cols-[64px_minmax(0,1fr)] md:gap-6"
          >
            <p className="font-mono text-[11px] text-ink-3">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[23px] leading-tight text-ink">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="font-mono text-[10px] text-ink-3">
                  {project.category}
                </p>
              </div>

              <p className="mt-2 max-w-2xl text-[14.5px] leading-6 text-ink-2">
                {project.summary}
              </p>

              <p className="mt-3 font-mono text-[10px] leading-5 text-ink-3">
                {project.stack.join(" · ")}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="link-quiet inline-flex items-center gap-1"
                >
                  Case study
                  <ArrowUpRight className="size-3" strokeWidth={1.5} />
                </Link>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet inline-flex items-center gap-1.5"
                >
                  <GithubIcon className="size-3" />
                  Repo
                </a>
                {project.status && (
                  <span className="font-mono text-[10px] text-ink-3">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-[21px] text-ink">More on GitHub</h3>
            <p className="font-mono text-[10px] text-ink-3">
              open source · smaller builds
            </p>
          </div>

          <div className="mt-2">
            {moreProjects.map((project) => (
              <a
                key={project.name}
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="row-link grid gap-1 border-b border-rule px-0 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
              >
                <div className="min-w-0">
                  <span className="text-[15px] text-ink">{project.name}</span>
                  <span className="ml-2 font-mono text-[10px] text-ink-3">
                    {project.tag}
                  </span>
                </div>
                <div className="flex items-center gap-4 font-mono text-[10px] text-ink-3">
                  <span>{project.period}</span>
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
