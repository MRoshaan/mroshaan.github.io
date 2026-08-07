"use client";

import { cn } from "@/lib/utils";

export function GradientAccent({
  className,
  tones = "from-accent via-accent-100 to-navy",
  children,
}: {
  className?: string;
  tones?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        tones,
        className
      )}
    >
      {children}
    </span>
  );
}