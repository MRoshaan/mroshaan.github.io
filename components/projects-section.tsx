import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          title="Featured Projects"
          blurb="Systems built for correctness under load. Each has a case-study page."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} featured={i < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/40 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_-10%,rgba(52,211,153,0.08),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <Card className="h-full border-0 bg-transparent shadow-none">
        <CardHeader className="border-b border-border/60">
          <div className="flex items-center justify-between">
            <CardTitle className="font-mono text-sm text-accent">
              {project.category}
            </CardTitle>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>
          <CardTitle className="mt-2 text-2xl font-bold">
            {project.name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {project.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function SectionHeading({
  index,
  title,
  blurb,
}: {
  index: string;
  title: string;
  blurb?: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-accent">/{index}</p>
      <h2 className="flex items-center gap-4 text-3xl font-bold sm:text-4xl">
        {title}
        <span className="h-px flex-1 bg-border" />
      </h2>
      {blurb && <p className="mt-3 max-w-2xl text-muted-foreground">{blurb}</p>}
    </div>
  );
}