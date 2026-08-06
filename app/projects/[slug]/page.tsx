import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4" /> All projects
      </Link>

      <header className="mt-8">
        <p className="mb-2 font-mono text-sm text-accent">{project.category}</p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          {project.tagline}
        </p>
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.stack.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:border-accent/50 hover:text-accent"
        >
          <GithubIcon className="size-4" /> Repo
        </a>
      </div>

      {project.diagram && (
        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-3 text-xl font-semibold">
            How it works
            <span className="h-px flex-1 bg-border" />
          </h2>
          {project.diagram === "seatvault" ? (
            <SeatVaultDiagram />
          ) : (
            <ETLDiagram />
          )}
        </section>
      )}

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold">The problem</h2>
        <p className="text-muted-foreground">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Approach</h2>
        <ul className="space-y-3">
          {project.approach.map((a, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Outcomes</h2>
        <ul className="space-y-3">
          {project.outcome.map((o, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-muted-foreground">{o}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}