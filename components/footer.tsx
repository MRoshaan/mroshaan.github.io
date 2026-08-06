import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Footer() {
  const links = [
    { label: "GitHub", href: site.github, icon: GithubIcon },
    { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon },
    { label: "Email", href: `mailto:${site.email}`, icon: Mail },
    { label: "Resume", href: site.resume, icon: FileText },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 font-mono text-sm text-accent">/04 · Contact</p>
        <h2 className="text-4xl font-bold sm:text-5xl">Get in touch.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          I am open to backend and data engineering internship and junior roles. If you are
          building something that needs to survive load, my inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 border-t border-border pt-8">
        <p className="mx-auto max-w-6xl px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind &amp; Framer Motion.
        </p>
      </div>
    </section>
  );
}