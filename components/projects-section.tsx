"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function SectionHeading({
  index,
  eyebrow,
  title,
  blurb,
  align,
}: {
  index: string;
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      <p className="eyebrow mb-3 flex items-center gap-3 text-accent">
        {index} — {eyebrow}
      </p>
      <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {blurb && (
        <p
          className={`mt-4 max-w-2xl leading-relaxed text-muted-foreground ${
            centered ? "mx-auto" : ""
          }`}
        >
          {blurb}
        </p>
      )}
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Systems, chosen to explain themselves"
          blurb="Case studies over links. Each project has a page walking through the problem, the approach, and what actually changed."
        />

        <AnimatedGroup preset="blur-slide" className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} i={i} />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <SpotlightCard className="h-full rounded-2xl">
      <Link
        href={`/projects/${project.slug}`}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.8)] ${
          i < 2 ? "" : ""
        }`}
      >
        {/* hover accent wash */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-accent/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <Card className="flex h-full flex-col border-0 bg-transparent shadow-none">
          <CardHeader className="border-b border-border/70">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
                <span className="text-border-strong"> / </span>
                {project.category}
              </span>
              <span className="grid size-7 place-items-center rounded-md border border-border text-muted-foreground transition-all group-hover:border-accent/50 group-hover:text-accent">
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>
            <CardTitle className="display mt-4 text-2xl font-semibold tracking-tight">
              {project.name}
            </CardTitle>
            <CardDescription className="leading-relaxed text-[color:var(--copy)]">
              {project.summary}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <Badge key={t} variant="secondary" className="border-border">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </SpotlightCard>
  );
}