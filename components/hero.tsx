"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const TYPING_LINES = [
  ["$", "docker compose up --scale worker=4"],
  ["▶ ", "scheduler ready  ·  redis connected"],
  ["▶ ", "etl: 540,000 records → postgres (ok)"],
  ["▶ ", "lock/key redis:seat:42 acquired"],
  ["✔", "commit applied — 0 oversell"],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-grid-soft">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(31,111,74,0.28),transparent)] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.25fr_0.75fr] md:items-center md:py-32 lg:px-8">
        {/* copy */}
        <div>
          <motion.p
            {...fade(0)}
            className="eyebrow mb-6 flex items-center gap-3 text-accent"
          >
            <span className="h-px w-8 bg-accent/50" />
            Hi — Muhammad Roshaan · Student · Systems
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Backend data,
            <br />
            <span className="text-accent">engineered</span> to ship.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Final-year CS at SSUET building systems that survive contention —
            distributed locks, ETL pipelines at 540K+ rows, and real-time ML
            inference you can audit.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={site.resume}
              target="_blank"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              <FileText className="size-4" /> Résumé
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <Mail className="size-4" /> Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </motion.div>

          <motion.p {...fade(0.3)} className="mt-8 font-mono text-xs text-muted-foreground">
            <span className="text-accent">~/</span> currently open to backend & data engineering internships
          </motion.p>
        </div>

        {/* console panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="panel glow-accent hidden overflow-hidden md:block"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="size-2.5 rounded-full opacity-80" style={{ background: c }} />
            ))}
            <span className="ml-2 flex-1 text-center font-mono text-[11px] text-muted-foreground">
              dispatch — production
            </span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-7">
            {TYPING_LINES.map(([token, text], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.5 }}
                className="flex gap-2"
              >
                <span className={token === "✔" ? "text-accent" : "text-accent/80"}>{token}</span>
                <span className={token === "✔" ? "text-foreground" : "text-[--copy]"}>{text}</span>
              </motion.div>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block h-4 w-2 bg-accent align-middle"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent md:flex"
        aria-label="Scroll to work"
      >
        <ArrowUpRight className="size-5 rotate-90" />
      </a>
    </section>
  );
}