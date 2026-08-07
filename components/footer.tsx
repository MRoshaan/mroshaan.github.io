import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Footer() {
  const links = [
    { label: "GitHub", href: site.github, icon: GithubIcon },
    { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon },
    { label: "Email", href: `mailto:${site.email}`, icon: Mail },
    { label: "Résumé", href: site.resume, icon: FileText },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(197,0,0,0.14),transparent)] blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow mb-4 text-accent">
          04 — Contact
        </p>
        <h2 className="display text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s build something that survives.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
          Open to backend and data engineering internships and junior roles. If
          that&apos;s you, my inbox is open.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          {site.email} <ArrowUpRight className="size-4" />
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-20 border-t border-border pt-8">
        <p className="mx-auto max-w-6xl px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name} · Built with Next.js,
          Tailwind &amp; Framer Motion
        </p>
      </div>
    </section>
  );
}