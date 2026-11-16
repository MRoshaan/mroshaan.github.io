import { ReactNode } from "react";

export type FlowStep = {
  label: string;
  detail: string;
};

export function FlowFigure({
  title,
  steps,
  caption,
}: {
  title: string;
  steps: FlowStep[];
  caption: ReactNode;
}) {
  return (
    <figure className="border border-rule bg-raised p-5">
      <p className="font-mono text-[10px] text-ink-3">{title}</p>

      <ol className="mt-5 grid gap-3 sm:grid-flow-col sm:auto-cols-fr">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="relative border border-rule bg-paper p-3 sm:after:absolute sm:after:-right-3 sm:after:top-1/2 sm:after:z-10 sm:after:-translate-y-1/2 sm:after:bg-raised sm:after:px-0.5 sm:after:text-[13px] sm:after:leading-none sm:after:text-ink-2 sm:after:content-['→'] last:sm:after:hidden"
          >
            <p className="font-mono text-[9px] text-ink-3">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[13.5px] font-medium leading-5 text-ink">
              {step.label}
            </p>
            <p className="mt-1 font-mono text-[10px] leading-4 text-ink-3">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>

      <figcaption className="mt-4 border-t border-rule pt-3 text-[12.5px] leading-5 text-ink-3">
        <span className="font-mono text-[10px] text-ink-2">Fig. 1</span>{" "}
        · {caption}
      </figcaption>
    </figure>
  );
}
