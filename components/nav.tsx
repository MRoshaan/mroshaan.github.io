"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CommandMenu } from "@/components/ui/command-menu";
import { site } from "@/lib/site";

const links = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/#top" className="font-semibold tracking-tight">
          {site.name.replace("Muhammad ", "")}
          <span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <CommandMenu />
      </nav>
    </header>
  );
}