"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.07),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5 font-mono text-sm text-accent"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {site.name}
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-4 max-w-2xl text-2xl font-semibold text-muted-foreground sm:text-3xl"
        >
          {site.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-6 max-w-xl text-muted-foreground"
        >
          I build systems that survive contention — distributed locks, ETL
          pipelines bulk-loading half a million rows, and real-time ML
          inference you can actually audit. Final-year CS at SSUET, built for
          backend and data roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants(), "gap-2")}
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
          <a
            href={site.resume}
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <FileText className="size-4" /> Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ variant: "ghost" }), "gap-2")}
          >
            <Mail className="size-4" /> Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }), "gap-2")}
          >
            <LinkedinIcon className="size-4" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}