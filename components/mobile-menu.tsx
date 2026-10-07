"use client";

import { useState } from "react";
import { Dialog } from "radix-ui";
import { FileText, Mail, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";

const quickLinks = [
  { label: "GitHub", href: site.github, icon: GithubIcon, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "Résumé", href: site.resume, icon: FileText, external: false },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-accent md:hidden"
        >
          <Menu className="size-4" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="sheet-content fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col border-l border-border bg-background p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
              <span className="grid size-8 place-items-center rounded-lg border border-border bg-card font-mono text-[13px] font-semibold text-accent">
                MR
              </span>
              {site.name}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-accent"
              >
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>

          <div className="mt-6 flex-1 overflow-y-auto">
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 border-b border-border py-4 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-xs text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-2xl font-semibold">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">Elsewhere</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {quickLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
