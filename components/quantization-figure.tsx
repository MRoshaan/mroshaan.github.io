export function QuantizationFigure() {
  const grid = [20, 74, 128, 182, 236];
  const ticks = [20, 15, 10, 5, 0];

  return (
    <figure className="border border-rule bg-raised p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-ink-3">
          BFCL v4 · tool calling
        </p>
        <div className="hidden items-center gap-3 font-mono text-[10px] text-ink-3 sm:flex">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 bg-accent" />
            FP16
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 bg-clay" />
            NF4
          </span>
        </div>
      </div>

      {/* Phones get the numbers, not a scaled-down plot. */}
      <div className="mt-5 space-y-5 sm:hidden">
        {[
          { model: "Qwen3-1.7B", fp16: 6.0, nf4: 17.3, delta: "+11.3 pp" },
          { model: "Qwen3-4B", fp16: 0.0, nf4: 0.0, delta: "0.0 pp" },
        ].map((row) => (
          <div key={row.model}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-mono text-[11px] text-ink-2">{row.model}</p>
              <p className="font-mono text-[10px] text-ink-3">Δ {row.delta}</p>
            </div>
            <div className="mt-2 space-y-1.5">
              <Bar label="FP16" value={row.fp16} tone="bg-accent" />
              <Bar label="NF4" value={row.nf4} tone="bg-clay" />
            </div>
          </div>
        ))}
      </div>

      <svg
        viewBox="0 0 500 292"
        className="mt-3 hidden w-full sm:block"
        role="img"
        aria-label="Missed required tool calls for Qwen3-1.7B rise from 6.0 percent under FP16 to 17.3 percent under NF4. Qwen3-4B stays at 0.0 percent in both conditions."
      >
        <text x="46" y="10" className="fill-ink-3 font-mono text-[9px]">
          Missed required tool calls (%)
        </text>

        {grid.map((y, i) => (
          <g key={y}>
            <line
              x1="46"
              x2="484"
              y1={y}
              y2={y}
              className={i === grid.length - 1 ? "stroke-rule-strong" : "stroke-rule"}
              strokeWidth="1"
            />
            <text
              x="38"
              y={y + 3.5}
              textAnchor="end"
              className="fill-ink-3 font-mono text-[9px]"
            >
              {ticks[i]}
            </text>
          </g>
        ))}

        {/* Qwen3-1.7B */}
        <line
          x1="124"
          y1="171.2"
          x2="192"
          y2="49.2"
          className="stroke-rule-strong"
          strokeWidth="1.5"
        />
        <circle cx="124" cy="171.2" r="4.5" className="fill-accent" />
        <circle cx="192" cy="49.2" r="4.5" className="fill-clay" />
        <text
          x="118"
          y="160"
          textAnchor="end"
          className="fill-ink-2 font-mono text-[10px]"
        >
          6.0
        </text>
        <text
          x="192"
          y="38"
          textAnchor="middle"
          className="fill-clay font-mono text-[10px]"
        >
          17.3
        </text>

        {/* Qwen3-4B */}
        <line
          x1="318"
          y1="236"
          x2="386"
          y2="236"
          className="stroke-rule-strong"
          strokeWidth="1.5"
        />
        <circle cx="318" cy="236" r="4.5" className="fill-accent" />
        <circle cx="386" cy="236" r="4.5" className="fill-clay" />
        <text
          x="318"
          y="225"
          textAnchor="middle"
          className="fill-ink-2 font-mono text-[10px]"
        >
          0.0
        </text>
        <text
          x="386"
          y="225"
          textAnchor="middle"
          className="fill-ink-2 font-mono text-[10px]"
        >
          0.0
        </text>

        <text
          x="158"
          y="262"
          textAnchor="middle"
          className="fill-ink-2 font-mono text-[10px]"
        >
          Qwen3-1.7B
        </text>
        <text
          x="352"
          y="262"
          textAnchor="middle"
          className="fill-ink-2 font-mono text-[10px]"
        >
          Qwen3-4B
        </text>
        <text
          x="158"
          y="282"
          textAnchor="middle"
          className="fill-accent font-mono text-[10px]"
        >
          Δ +11.3 pp
        </text>
        <text
          x="352"
          y="282"
          textAnchor="middle"
          className="fill-ink-3 font-mono text-[10px]"
        >
          Δ 0.0 pp
        </text>
      </svg>

      <figcaption className="mt-4 border-t border-rule pt-3 text-[12.5px] leading-5 text-ink-3">
        <span className="font-mono text-[10px] text-ink-2">Fig. 1</span> ·{" "}
        Missed tool calls, 150 samples per cell. NF4 against FP16. Paired
        McNemar p=0.0001 at 1.7B; 4B is a powered null. From BitFracture
        (SLM-Agents @ NeurIPS 2026).
      </figcaption>
    </figure>
  );
}

function Bar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-8 font-mono text-[9px] text-ink-3">{label}</span>
      <span className="h-2 flex-1 bg-rule/40">
        <span
          className={`block h-full ${tone}`}
          style={{ width: `${(value / 20) * 100}%` }}
        />
      </span>
      <span className="tabular w-8 text-right font-mono text-[10px] text-ink">
        {value.toFixed(1)}
      </span>
    </div>
  );
}
