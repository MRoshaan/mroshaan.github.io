import { FlowFigure } from "@/components/diagrams/flow-figure";

export function SeatVaultDiagram() {
  return (
    <FlowFigure
      title="One reservation · layered locking"
      steps={[
        { label: "Request", detail: "POST /reserve, idempotency key" },
        { label: "Redis lock", detail: "SET NX EX on the seat key" },
        { label: "Row lock", detail: "SELECT … FOR UPDATE" },
        { label: "Atomic update", detail: "decrement the seat row" },
        { label: "Commit or retry", detail: "release locks in reverse" },
      ]}
      caption="The distributed lock is taken before the row lock and released in reverse order, so the two layers never deadlock each other. Idempotent background work finalizes payment-style flows."
    />
  );
}
