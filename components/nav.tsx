"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { CommandMenu } from "@/components/ui/command-menu";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Path", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="relative">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/#top" className="group flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg border border-border bg-card font-mono text-[13px] font-semibold text-accent transition-colors group-hover:border-accent/50">
              MR
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              Muhammad Roshaan
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="grid size-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-accent"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <CommandMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}