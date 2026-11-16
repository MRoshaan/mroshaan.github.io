import { FlowFigure } from "@/components/diagrams/flow-figure";

export function ETLDiagram() {
  return (
    <FlowFigure
      title="Inventory pipeline · one pass"
      steps={[
        { label: "Extract", detail: "inventory feeds" },
        { label: "Transform", detail: "Pandas, normalize" },
        { label: "Validate", detail: "integrity checks" },
        { label: "Load", detail: "PostgreSQL" },
        { label: "Alert", detail: "Celery + Redis thresholds" },
      ]}
      caption="Celery and Redis stage each record through every gate. Only validated rows reach Postgres, and threshold breaches raise alerts instead of waiting for the next run."
    />
  );
}
