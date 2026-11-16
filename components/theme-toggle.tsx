"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid size-8 place-items-center text-ink-3 transition-colors hover:text-ink"
    >
      <Moon className="size-4 dark:hidden" strokeWidth={1.5} />
      <Sun className="hidden size-4 dark:block" strokeWidth={1.5} />
    </button>
  );
}
