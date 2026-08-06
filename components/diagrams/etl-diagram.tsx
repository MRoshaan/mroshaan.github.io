"use client";

import { motion } from "framer-motion";

const stages = [
  { label: "Extract", sub: "inventory feeds", note: "pull raw" },
  { label: "Transform", sub: "Pandas · normalize", note: "clean" },
  { label: "Validate", sub: "integrity checks", note: "guard" },
  { label: "Load", sub: "Supabase / PostgreSQL · 540K+", note: "bulk" },
  { label: "Alert", sub: "Celery + Redis scheduled", note: "watch" },
];

export function ETLDiagram() {
  return (
    <div className="w-full rounded-xl border border-border bg-muted/20 p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          extract → transform → validate → load → alert
        </p>
        <span className="flex items-center gap-2 font-mono text-xs text-accent">
          <span className="size-2 animate-pulse rounded-full bg-accent" /> live
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {stages.map((s, i) => (
          <FragmentPulse key={s.label} index={i}>
            <motion.div
              className="group flex-1 rounded-lg border border-border bg-card px-3 py-3"
              whileHover={{ borderColor: "var(--accent)" }}
            >
              <p className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </p>
              <p className="mt-1 text-sm font-semibold">{s.label}</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{s.sub}</p>
              <p className="mt-1 inline-block rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {s.note}
              </p>
            </motion.div>
          </FragmentPulse>
        ))}
      </div>

      <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">
        Async workers (Celery + Redis) stage each record through every gate; only validated
        rows reach Postgres, and anomalies fire real-time threshold alerts.
      </p>
    </div>
  );
}

function FragmentPulse({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.25 }}
      animate={{ opacity: [0.25, 1, 0.25] }}
      transition={{
        delay: index * 0.6,
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="contents"
    >
      {children}
    </motion.div>
  );
}