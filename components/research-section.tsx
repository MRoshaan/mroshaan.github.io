import { ArrowUpRight } from "lucide-react";
import { peerReview, research, type ResearchEntry } from "@/lib/research";
import { SectionHeading } from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";
import { AnimatedGroup } from "@/components/ui/animated-group";

export function ResearchSection() {
  return (
    <section id="research" className="border-b border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Research"
          title="Evaluations that measure what matters"
          blurb="Work on LLM tool calling, agent tracing, and safety measurement, plus reviewing for a NeurIPS 2026 workshop."
        />

        <AnimatedGroup preset="blur-slide" className="grid gap-5 lg:grid-cols-2">
          {research.map((entry) => (
            <ResearchCard key={entry.slug} entry={entry} />
          ))}
        </AnimatedGroup>

        <div className="panel mt-5 flex flex-wrap items-center justify-between gap-4 p-6 sm:p-7">
          <div>
            <p className="eyebrow text-accent">Peer review</p>
            <h3 className="display mt-2 text-xl font-semibold">
              {peerReview.role}, {peerReview.venue}
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {peerReview.note}
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {peerReview.period}
          </span>
        </div>
      </div>
    </section>
  );
}

function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <article className="panel flex h-full flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {entry.venue}
        </span>
        <Badge
          variant={entry.status === "accepted" ? "default" : "secondary"}
          className={
            entry.status === "accepted"
              ? "border-accent/30"
              : "border-border"
          }
        >
          {entry.statusLabel}
        </Badge>
      </div>

      <h3 className="display mt-5 text-2xl font-semibold tracking-tight">
        {entry.name}
      </h3>
      <p className="mt-1.5 text-sm italic leading-relaxed text-muted-foreground">
        {entry.paperTitle}
      </p>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        {entry.role} · {entry.period}
      </p>

      <p className="mt-5 leading-relaxed text-[color:var(--copy)]">
        {entry.summary}
      </p>

      <ul className="mt-5 space-y-3">
        {entry.findings.map((finding) => (
          <li key={finding} className="flex gap-3">
            <span className="mt-[9px] size-1 shrink-0 rounded-full bg-accent" />
            <span className="text-sm leading-relaxed text-muted-foreground">
              {finding}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-1.5">
          {entry.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="border-border">
              {tech}
            </Badge>
          ))}
        </div>
        {entry.repo && (
          <a
            href={entry.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            {entry.repoLabel ?? "Repository"}
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
