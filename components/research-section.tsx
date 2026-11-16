import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { peerReview, research, type ResearchEntry } from "@/lib/research";

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          index="01"
          title="Research"
          note="4 papers · 2 accepted"
        />

        {research.map((entry) => (
          <ResearchRow key={entry.slug} entry={entry} />
        ))}

        <div className="grid gap-3 py-7 md:grid-cols-[64px_minmax(0,1fr)_170px]">
          <p className="font-mono text-[11px] text-ink-3">{peerReview.period.slice(-4)}</p>
          <div>
            <h3 className="text-[21px] leading-snug text-ink">
              Reviewer, {peerReview.venue}
            </h3>
            <p className="mt-2 max-w-2xl text-[14.5px] leading-6 text-ink-2">
              {peerReview.note}
            </p>
          </div>
          <p className="font-mono text-[11px] text-ink-3 md:text-right">
            Reviewer · {peerReview.period}
          </p>
        </div>
      </div>
    </section>
  );
}

function ResearchRow({ entry }: { entry: ResearchEntry }) {
  const accepted = entry.status === "accepted";
  const year = entry.period.slice(-4);

  return (
    <article className="grid gap-3 border-b border-rule py-8 md:grid-cols-[64px_minmax(0,1fr)_170px] md:gap-6">
      <p className="font-mono text-[11px] text-ink-3">{year}</p>

      <div className="min-w-0">
        <h3 className="text-[23px] leading-tight text-ink">{entry.name}</h3>
        <p className="mt-1.5 text-[13px] leading-5 text-ink-3">
          {entry.paperTitle}
        </p>
        <div className="mt-2 space-y-0.5 font-mono text-[10px] leading-4 text-ink-3 md:hidden">
          <p className={accepted ? "text-accent" : "text-ink-3"}>
            {entry.statusLabel}
          </p>
          <p>{entry.venue}</p>
          <p>{entry.role}</p>
        </div>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-6 text-ink-2">
          {entry.summary}
        </p>

        <p className="mt-3 max-w-2xl text-[14.5px] leading-6 text-ink-2">
          <span className="mr-2 font-mono text-[10px] text-accent">Result</span>
          {entry.result}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]">
          {entry.repo && (
            <a
              href={entry.repo}
              target="_blank"
              rel="noreferrer"
              className="link-quiet inline-flex items-center gap-1"
            >
              {entry.repoLabel ?? "Repository"}
              <ArrowUpRight className="size-3" strokeWidth={1.5} />
            </a>
          )}
          <details className="group w-full">
            <summary className="inline-flex items-center gap-1.5 font-mono text-[10px] text-ink-3 transition-colors hover:text-ink">
              Findings
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </summary>
            <ul className="mt-3 max-w-2xl space-y-2 text-[13.5px] leading-6 text-ink-2">
              {entry.findings.map((finding) => (
                <li key={finding} className="pl-4 -indent-4">
                  <span className="mr-2 text-ink-3">·</span>
                  {finding}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-[10px] leading-5 text-ink-3">
              Stack: {entry.stack.join(" · ")}
            </p>
          </details>
        </div>
      </div>

      <div className="hidden md:block md:text-right">
        <p
          className={`inline-flex items-center gap-1.5 text-[12px] ${
            accepted ? "text-accent" : "text-ink-3"
          }`}
        >
          <span className="size-1.5 bg-current" />
          {entry.statusLabel}
        </p>
        <p className="mt-2 font-mono text-[10.5px] leading-5 text-ink-3">
          {entry.venue.split(" · ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </p>
        <p className="mt-2 font-mono text-[10.5px] text-ink-3">{entry.role}</p>
      </div>
    </article>
  );
}
