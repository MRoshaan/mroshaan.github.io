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

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-grid-soft">
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(197,0,0,0.14),transparent)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <motion.p {...fade(0)} className="eyebrow mb-6 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent/60" />
            Muhammad Roshaan · Backend &amp; Data Engineer
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Backend data, engineered to ship.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Final-year CS at SSUET building systems that survive contention — distributed
            locks, ETL pipelines at 540K+ rows, and real-time ML inference you can audit.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={site.resume}
              target="_blank"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
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
        </div>
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