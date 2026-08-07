import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getProject, projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
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
    title: project ? `${project.name} — case study` : "Project",
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

  return (
    <article className="relative mx-auto max-w-4xl overflow-hidden px-6 py-20 md:py-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(31,111,74,0.2),transparent)] blur-3xl" />

      <div className="relative">
        {/* back */}
        <Link
          href="/#projects"
          className="group eyebrow inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          All projects
        </Link>

        {/* header */}
        <header className="mt-10 border-b border-border pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Case study — {project.category}
            </p>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <GithubIcon className="size-4" /> Repo
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <h1 className="display mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <Badge key={t} variant="secondary" className="border-border">
                {t}
              </Badge>
            ))}
          </div>
        </header>

        {/* diagram */}
        {project.diagram && (
          <section className="mt-12">
            <h2 className="eyebrow mb-4 flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-8 bg-accent/50" />
              How it works
            </h2>
            {project.diagram === "seatvault" ? (
              <SeatVaultDiagram />
            ) : (
              <ETLDiagram />
            )}
          </section>
        )}

        {/* body org */}
        <div className="mt-14 space-y-14">
          <Block index="01" title="The problem">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </Block>

          <Block index="02" title="Approach">
            <ul className="space-y-4">
              {project.approach.map((a, i) => (
                <li key={i} className="flex gap-4">
                  <span className="pt-px font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed text-muted-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block index="03" title="Outcomes">
            <ul className="space-y-4">
              {project.outcome.map((o, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed text-muted-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        {/* footer cta */}
        <div className="mt-20 border-t border-border pt-8">
          <Link
            href="/#projects"
            className="group eyebrow inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>
      </div>
    </article>
  );
}

function Block({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="display mb-5 flex items-baseline gap-4 text-2xl font-semibold tracking-tight">
        <span className="font-mono text-sm text-accent">{index}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}