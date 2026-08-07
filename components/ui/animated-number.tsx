"use client";

import { cn } from "@/lib/utils";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  format?: (n: number) => string;
  duration?: number;
};

export function AnimatedNumber({
  value,
  className,
  format = (n) => String(n),
  duration = 1.6,
}: AnimatedNumberProps) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useMotionValueEvent(motionValue, "change", (current) => {
    setDisplay(format(Math.round(current * 100) / 100));
  });

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [motionValue, value, duration]);

  return <span className={cn("tabular-nums", className)}>{display}</span>;
}