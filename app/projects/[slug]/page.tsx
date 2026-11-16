import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getProject, projects } from "@/lib/projects";
import { SeatVaultDiagram } from "@/components/diagrams/seatvault-diagram";
import { ETLDiagram } from "@/components/diagrams/etl-diagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.name} case study` : "Project",
    description: project?.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-[10px] text-ink-3 transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-3" strokeWidth={1.5} />
        All work
      </Link>

      <header className="mt-8 border-b border-rule pb-8">
        <p className="font-mono text-[10px] text-ink-3">{project.category}</p>
        <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.02em] text-ink">
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-[17px] leading-7 text-ink-2">
          {project.tagline}
        </p>

        <p className="mt-5 font-mono text-[10px] leading-5 text-ink-3">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="link-quiet inline-flex items-center gap-1.5"
          >
            <GithubIcon className="size-3" />
            Repository
            <ArrowUpRight className="size-3" strokeWidth={1.5} />
          </a>
          {project.status && (
            <span className="font-mono text-[10px] text-ink-3">
              {project.status}
            </span>
          )}
        </div>
      </header>

      {project.diagram && (
        <div className="mt-10">
          {project.diagram === "seatvault" ? (
            <SeatVaultDiagram />
          ) : (
            <ETLDiagram />
          )}
        </div>
      )}

      <div className="mt-12 space-y-10">
        <Block label="Problem">
          <p className="max-w-2xl text-[15.5px] leading-7 text-ink-2">
            {project.problem}
          </p>
        </Block>

        <Block label="Approach">
          <ol className="max-w-2xl space-y-3">
            {project.approach.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="pt-0.5 font-mono text-[10px] text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] leading-7 text-ink-2">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Block>

        <Block label={project.outcomeTitle ?? "Outcome"}>
          <ul className="max-w-2xl space-y-3">
            {project.outcome.map((outcome) => (
              <li
                key={outcome}
                className="text-[15.5px] leading-7 text-ink-2"
              >
                <span className="mr-2 text-ink-3">·</span>
                {outcome}
              </li>
            ))}
          </ul>
          {project.note && (
            <p className="mt-5 max-w-2xl border-l-2 border-rule-strong pl-4 text-[13px] leading-6 text-ink-3">
              {project.note}
            </p>
          )}
        </Block>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[10px] text-ink-3 transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3" strokeWidth={1.5} />
          Back to all work
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group inline-flex items-baseline gap-2 text-[15px] text-ink transition-colors hover:text-accent"
        >
          <span className="font-mono text-[10px] text-ink-3">Next</span>
          {next.name}
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </article>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 border-t border-rule pt-6 md:grid-cols-[120px_minmax(0,1fr)] md:gap-6">
      <h2 className="font-mono text-[10px] text-ink-3">{label}</h2>
      <div>{children}</div>
    </section>
  );
}
