"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { AnimatedNumber } from "@/components/ui/animated-number";

export type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  duration = 1600,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className={className}>
      {started && (
        <AnimatedNumber
          value={value}
          duration={duration}
          className="tabular-nums"
          format={(n: number) =>
            n.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          }
        />
      )}
      {started ? null : "0"}
      {suffix}
    </span>
  );
}