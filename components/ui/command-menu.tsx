"use client";

import * as React from "react";
import { Dialog } from "radix-ui";
import { Search } from "lucide-react";
import { projects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  hint: string;
  href: string;
  group: string;
};

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items: Item[] = React.useMemo(() => {
    const projectItems: Item[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      label: p.name,
      hint: p.category,
      href: `/projects/${p.slug}`,
      group: "Projects",
    }));
    const skillItems: Item[] = skillGroups.flatMap((g) =>
      g.items.map((s) => ({
        id: `skill-${s}`,
        label: s,
        hint: g.title,
        href: "/#skills",
        group: "Skills",
      }))
    );
    return [...projectItems, ...skillItems];
  }, []);

  const filtered = items.filter((i) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return `${i.label} ${i.hint}`.toLowerCase().includes(q);
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-muted/40 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Open command menu"
        >
          <Search className="size-4" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="ml-auto hidden rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] sm:inline">
            ⌘K
          </kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4">
            <Search className="size-4 text-muted-foreground" />
            <input
              ref={inputRef}
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or skills…"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {filtered.length === 0 && (
              <p className="px-2 py-6 text-center text-sm text-muted-foreground">
                No results for “{query}”.
              </p>
            )}
            {filtered.slice(0, 24).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.location.href = item.href;
                }}
                className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      item.group === "Projects" ? "bg-accent" : "bg-muted-foreground/50"
                    )}
                  />
                  {item.label}
                </span>
                <span className="text-xs text-muted-foreground">{item.hint}</span>
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}