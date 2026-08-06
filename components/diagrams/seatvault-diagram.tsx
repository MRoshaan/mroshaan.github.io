"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 6 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.45, duration: 0.35 },
  }),
};

export function SeatVaultDiagram() {
  return (
    <div className="w-full rounded-xl border border-border bg-muted/20 p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          one reservation · layered locking
        </p>
        <span className="flex items-center gap-2 font-mono text-xs text-accent">
          <span className="size-2 animate-pulse rounded-full bg-accent" /> live
        </span>
      </div>

      <div className="space-y-3">
        <motion.div variants={variants} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Node title="Client request" sub="POST /reserve · with idempotency key" tone="neutral" />
        </motion.div>

        <motion.div variants={variants} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Node title="Redis distributed lock" sub="SET key NX EX — hold the seat key" tone="accent" />
        </motion.div>

        <motion.div variants={variants} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Node title="PostgreSQL row lock" sub="SELECT … FOR UPDATE on the seat row" tone="accent" />
        </motion.div>

        <motion.div variants={variants} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Node title="Update inventory" sub="atomic UPDATE inside the transaction" tone="neutral" />
        </motion.div>

        <motion.div variants={variants} custom={4} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Branch
            ok={{ title: "Commit", sub: "release lock → done", tone: "ok" }}
            bad={{ title: "Rollback", sub: "release lock → retry", tone: "muted" }}
          />
        </motion.div>
      </div>

      <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">
        Get the distributed lock first, then the row lock. Commit atomically, release in
        reverse order — the two layers never fight each other.
      </p>
    </div>
  );
}

function Node({
  title,
  sub,
  tone,
}: {
  title: string;
  sub: string;
  tone: "accent" | "neutral" | "ok" | "muted";
}) {
  const border =
    tone === "accent"
      ? "border-accent/60"
      : tone === "ok"
      ? "border-emerald-500/60"
      : "border-border";
  const dot =
    tone === "accent"
      ? "bg-accent"
      : tone === "ok"
      ? "bg-emerald-400"
      : tone === "muted"
      ? "bg-muted-foreground/50"
      : "bg-muted-foreground";
  return (
    <div className={`rounded-lg border ${border.split(" ")[0]} bg-card px-4 py-3`}>
      <p className="flex items-center gap-2 text-sm font-semibold">
        <span className={`size-1.5 rounded-full ${dot}`} />
        {title}
      </p>
      <p className="ml-3.5 mt-0.5 font-mono text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function Branch({
  ok,
  bad,
}: {
  ok: { title: string; sub: string; tone: "ok" };
  bad: { title: string; sub: string; tone: "muted" };
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-3">
        <span className="mx-1 h-3 w-px bg-border" />
        <span className="font-mono text-[10px] uppercase text-muted-foreground">outcome</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div
          className={`rounded-lg border ${
            ok.tone === "ok" ? "border-emerald-500/60" : "border-border"
          } bg-card px-4 py-3`}
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {ok.title}
          </p>
          <p className="ml-3.5 mt-0.5 font-mono text-xs text-muted-foreground">{ok.sub}</p>
        </div>
        <div className="rounded-lg border border-border bg-card px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className="size-1.5 rounded-full bg-muted-foreground/50" />
            {bad.title}
          </p>
          <p className="ml-3.5 mt-0.5 font-mono text-xs text-muted-foreground">{bad.sub}</p>
        </div>
      </div>
    </div>
  );
}