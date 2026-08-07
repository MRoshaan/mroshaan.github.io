"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  className,
  children,
  radius = 420,
}: {
  className?: string;
  children: React.ReactNode;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at " +
            position.x +
            "px " +
            position.y +
            "px, var(--accent), transparent " +
            radius +
            "px)",
        }}
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transition-opacity duration-300",
          active ? "opacity-[0.08]" : "opacity-0"
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}