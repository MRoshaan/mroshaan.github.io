"use client";

import { useState } from "react";
import { Dialog } from "radix-ui";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";

const elsewhere = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
  { label: "CV", href: site.resume, external: true },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-8 place-items-center text-ink-3 transition-colors hover:text-ink md:hidden"
        >
          <Menu className="size-4" strokeWidth={1.5} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay fixed inset-0 z-50 bg-black/30" />
        <Dialog.Content className="sheet-content fixed inset-y-0 right-0 z-50 flex w-[88vw] max-w-sm flex-col border-l border-rule bg-paper p-6">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-serif text-[17px] text-ink">
              {site.name}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="grid size-8 place-items-center text-ink-3 transition-colors hover:text-ink"
              >
                <X className="size-4" strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-10 flex flex-col" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-serif text-2xl text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-rule pt-5">
            <p className="font-mono text-[10px] text-ink-3">Elsewhere</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {elsewhere.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="link-quiet text-[13px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] text-ink-3">
              {site.location}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
