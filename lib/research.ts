export type ResearchEntry = {
  slug: string;
  name: string;
  paperTitle: string;
  venue: string;
  status: "accepted" | "under-review";
  statusLabel: string;
  role: string;
  period: string;
  summary: string;
  findings: string[];
  stack: string[];
  repo?: string;
  repoLabel?: string;
};

export const research: ResearchEntry[] = [
  {
    slug: "bitfracture",
    name: "BitFracture",
    paperTitle:
      "Compression Breaks Discipline: Quantization Increases Missed Tool Calls in Small Language Models, but Not Mid-Size Ones",
    venue: "SLM-Agents @ NeurIPS 2026 · Paris",
    status: "accepted",
    statusLabel: "Accepted · poster",
    role: "First author",
    period: "Jul 2026 - Oct 2026",
    summary:
      "A pre-registered audit of how 4-bit NF4 quantization changes the distribution of tool-calling errors in small models, instead of reporting a single accuracy number.",
    findings: [
      "Qwen3-1.7B missed required tool calls nearly tripled under NF4 (6.0% to 17.3%, paired McNemar p=0.0001), and 13 of the 26 NF4 misses were correct under FP16.",
      "Qwen3-4B showed a powered null, and a direct size x format interaction test confirmed the asymmetry (-11.3pp, 95% CI [-20.0, -3.3], p=0.006).",
      "Method: controlled FP16 vs NF4 comparison, a 7-class error taxonomy, bootstrap 95% CIs, and a phase-gated pilot (n=50) followed by a powered run (n=150 per cell).",
    ],
    stack: ["Python", "bitsandbytes", "BFCL", "Qwen3", "Kaggle"],
    repo: "https://github.com/MRoshaan/bitfracture",
    repoLabel: "Paper and analysis",
  },
  {
    slug: "canarygame",
    name: "CanaryGame",
    paperTitle:
      "Shared-Memory Honeytokens in Multi-Agent LLM Systems: A Controlled Simulation",
    venue: "AIWILD @ NeurIPS 2026 · Sydney",
    status: "accepted",
    statusLabel: "Accepted · poster",
    role: "Co-author",
    period: "Aug 2026 - Dec 2026",
    summary:
      "A controlled simulation testing whether shared-memory coalitions defeat honeytoken decoys in multi-agent LLM teams, run fully locally with no real credentials or network egress.",
    findings: [
      "Brokered containment pinned post-trigger harm at exactly zero (95% CI [0, 0]) with the highest trap activation (0.80), across Qwen3-4B, Qwen3-8B, and Gemma3-4B.",
      "Shared-memory coalitions pooled decoy fingerprints (contagion up to 16) and raised mean harm over baseline.",
    ],
    stack: ["Python", "vLLM", "Qwen3", "Gemma3", "Agent Simulation"],
  },
  {
    slug: "agent-watchtower",
    name: "Agent Watchtower",
    paperTitle: "CausalTrace: Order-Invariant Causal Trace Verification",
    venue: "Verify-Agents and AIWILD @ NeurIPS 2026",
    status: "under-review",
    statusLabel: "Under review",
    role: "Primary author",
    period: "Aug 2026",
    summary:
      "Collaborative research on CausalTrace, an order-invariant verification engine for concurrent multi-agent traces: a Go canonicalizer, a Python serialization sweep, and an LLM-judge study.",
    findings: [
      "Built a Go canonical causal-DAG renderer with byte-stable checksums and a 160-cell sweep over 40 seeded traces across 4 fault conditions.",
      "Deterministic verdicts were order-invariant (0% flips across topological serializations), while live LLM judges flipped on 55% to 75% of identical facts (cross-family kappa 0.08 to 0.29).",
      "Ran 240 live judge calls across Gemini, DeepSeek, and Kimi, kept 127+ offline tests green, and merged the contribution upstream.",
    ],
    stack: ["Go", "Python", "OpenTelemetry", "Gemini", "DeepSeek", "Kimi"],
    repo: "https://github.com/aaliyan1230/agent-watchtower",
    repoLabel: "Repository",
  },
  {
    slug: "when-the-judge-drifts",
    name: "When the Judge Drifts",
    paperTitle: "RLVR Safety Evaluation (title withheld during double-blind review)",
    venue: "NeurIPS 2026 submission · SPAR AI mentee project",
    status: "under-review",
    statusLabel: "Under review",
    role: "Contributor",
    period: "Aug 2026",
    summary:
      "An RLVR safety-evaluation study that separates changed behavior from changed measurement along a GRPO training trajectory (Tulu 3.1 8B, 12 pinned checkpoints, 6,912 structured responses).",
    findings: [
      "The marginalized safety score never left its prespecified ±0.10 band, while measurement properties drifted (permutation invariance -0.146, answer-order range +0.188).",
      "The study attributes the change to measurement drift rather than safety drift.",
      "Built on a 24-source counterbalanced safety instrument (72 wordings x 6 orderings) with frozen claim gates and blinded AI reviewers.",
    ],
    stack: ["Python", "RLVR", "GRPO", "Bootstrap Statistics", "Gemini"],
  },
];

export const peerReview = {
  role: "Reviewer",
  venue: "Verify-Agents Workshop @ NeurIPS 2026",
  period: "Aug 2026",
  note: "Nominated by the program committee and accepted to review for the workshop on reliable agent development.",
} as const;
