import { ArrowUpRight } from "lucide-react";
import { QuantizationFigure } from "@/components/quantization-figure";
import { site } from "@/lib/site";

const links = [
  { label: "Email", href: `mailto:${site.email}`, external: false },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Résumé", href: site.resume, external: true },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:py-20 lg:min-h-[calc(100vh-3.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-8">
        <div className="rise">
          <p className="font-mono text-[11px] text-ink-3">
            Muhammad Roshaan · AI safety and systems engineer
          </p>

          <h1 className="mt-6 max-w-xl text-balance text-[clamp(2.4rem,4.6vw,3.75rem)] leading-[1.06] tracking-[-0.02em] text-ink">
            I evaluate language models and build the systems around them.
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-7 text-ink-2">
            Final-year CS at SSUET. First author of an accepted SLM-Agents
            paper at NeurIPS 2026. I currently evaluate scientific reasoning at
            Turing and contribute to RLVR safety evals with SPAR AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={
                  link.label === "Email"
                    ? "inline-flex items-center gap-1 text-ink underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    : "inline-flex items-center gap-1 text-ink-2 transition-colors hover:text-accent"
                }
              >
                {link.label}
                {link.external && (
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                )}
              </a>
            ))}
          </div>

          <p className="mt-10 font-mono text-[11px] text-ink-3">
            {site.location} · Open to research internships
          </p>
        </div>

        <div className="rise-late">
          <QuantizationFigure />
        </div>
      </div>
    </section>
  );
}
