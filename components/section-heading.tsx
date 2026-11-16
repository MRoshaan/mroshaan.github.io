export function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-ink-3">{index}</span>
        <h2 className="text-[30px] leading-none text-ink sm:text-[34px]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="font-mono text-[11px] text-ink-3">{note}</p>
      )}
    </div>
  );
}
