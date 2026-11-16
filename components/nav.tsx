import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-[17px] leading-none text-ink transition-colors hover:text-accent"
        >
          Muhammad Roshaan
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-ink-2 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 text-[13px] text-ink-2 transition-colors hover:text-accent sm:inline-flex"
          >
            CV
            <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
          </a>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
