import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const elsewhere = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Résumé", href: site.resume },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-14">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          index="06"
          title="Contact"
          note={site.location}
        />

        <div className="grid gap-8 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="max-w-2xl text-balance font-serif text-[clamp(1.7rem,3vw,2.25rem)] leading-tight text-ink">
              Email is the fastest way to reach me.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-baseline gap-2 text-[18px] text-ink underline decoration-rule-strong decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent sm:text-[21px]"
            >
              {site.email}
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {elsewhere.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="link-quiet text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-5">
          <p className="font-mono text-[10px] text-ink-3">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[10px] text-ink-3">
            Next.js · Tailwind · set in Source Serif 4 and IBM Plex
          </p>
        </div>
      </div>
    </footer>
  );
}
