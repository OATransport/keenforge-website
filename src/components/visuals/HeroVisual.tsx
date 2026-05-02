/*
  Hero visual: the KeenForge Lead Path.

  A custom editorial brand asset. Three clear moments (Captured, Answered,
  Booked) drawn as a deliberate card, not a fake software UI. One teal action
  moment, one copper outcome accent, generous spacing, no floating chips.
*/

type Stage = {
  index: string;
  title: string;
  caption: string;
  moments: ReadonlyArray<string>;
  variant: "neutral" | "action" | "outcome";
};

const STAGES: ReadonlyArray<Stage> = [
  {
    index: "01",
    title: "Captured",
    caption: "A new lead enters the system.",
    moments: ["Website form", "Phone call", "Chat or ad click"],
    variant: "neutral",
  },
  {
    index: "02",
    title: "Answered",
    caption: "Replied in seconds, owner notified, source logged.",
    moments: ["Instant reply", "Owner alert", "Pipeline updated"],
    variant: "action",
  },
  {
    index: "03",
    title: "Booked",
    caption: "Time on the calendar, follow up running, review on the way.",
    moments: ["Confirmed time", "Sequenced follow up", "Review request"],
    variant: "outcome",
  },
];

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft brand glow behind the card. Keeps the figure feeling lit on the
          page without leaning on shadows. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[44px]"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 18%, rgba(46,143,138,0.18), transparent 62%)",
        }}
      />

      <figure
        className="relative overflow-hidden rounded-[24px] border border-steel-rule bg-warm-ivory shadow-[0_40px_90px_-50px_rgba(11,31,51,0.35)]"
        aria-label="The KeenForge Lead Path: how a new lead becomes a booked appointment."
      >
        {/* Editorial header */}
        <div className="flex items-center justify-between gap-4 border-b border-steel-rule px-7 pt-6 pb-5 sm:px-9">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-7 bg-signal-teal" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-signal-teal">
              Lead Path
            </span>
          </div>
          <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-steel-gray tabular-nums">
            01 / 03
          </span>
        </div>

        <div className="px-7 pt-7 pb-2 sm:px-9">
          <p className="serif-italic text-[22px] sm:text-[26px] leading-[1.2] text-forge-navy">
            From inquiry to booked work,
            <br className="hidden sm:block" /> in three quiet moves.
          </p>
        </div>

        {/* Three stages */}
        <ol className="relative px-7 pb-2 pt-6 sm:px-9">
          {/* Vertical rail behind the markers, lined up with the indicator. */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[40px] top-[36px] bottom-[60px] w-px sm:left-[48px]"
            style={{
              background:
                "linear-gradient(to bottom, var(--steel-rule) 0%, var(--steel-rule) 50%, var(--copper) 100%)",
              opacity: 0.7,
            }}
          />

          {STAGES.map((s, i) => {
            const isLast = i === STAGES.length - 1;
            return (
              <li key={s.index} className={isLast ? "" : "pb-7"}>
                <Stage stage={s} />
              </li>
            );
          })}
        </ol>

        {/* Outcome footer */}
        <div className="border-t border-steel-rule bg-warm-ivory-2 px-7 py-5 sm:px-9">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span aria-hidden className="h-px w-7 shrink-0 bg-copper" />
              <span className="truncate text-[12px] font-medium uppercase tracking-[0.22em] text-copper">
                Outcome
              </span>
            </div>
            <p className="text-right text-[13.5px] font-medium leading-snug text-forge-navy">
              Booked work, every touch accounted for.
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
}

function Stage({ stage }: { stage: Stage }) {
  const isAction = stage.variant === "action";
  const isOutcome = stage.variant === "outcome";

  return (
    <div className="relative flex items-start gap-5">
      <Marker variant={stage.variant} index={stage.index} />

      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex items-baseline gap-3">
          <h3
            className={[
              "text-[17px] font-semibold tracking-tight",
              isAction ? "text-forge-navy" : "text-forge-navy",
            ].join(" ")}
          >
            {stage.title}
          </h3>
          {isAction ? (
            <span className="rounded-full bg-signal-teal px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-ivory">
              In seconds
            </span>
          ) : null}
          {isOutcome ? (
            <span className="rounded-full border border-copper/40 bg-warm-ivory px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-copper">
              On calendar
            </span>
          ) : null}
        </div>

        <p className="mt-1.5 text-[13.5px] leading-snug text-deep-charcoal/80">
          {stage.caption}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {stage.moments.map((m) => (
            <li
              key={m}
              className="inline-flex items-center rounded-full border border-steel-rule bg-warm-ivory px-2.5 py-0.5 text-[11.5px] text-steel-gray"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Marker({
  variant,
  index,
}: {
  variant: Stage["variant"];
  index: string;
}) {
  if (variant === "action") {
    return (
      <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-signal-teal text-[11px] font-semibold tabular-nums text-warm-ivory shadow-[0_8px_20px_-8px_rgba(46,143,138,0.7)]">
        {index}
      </span>
    );
  }
  if (variant === "outcome") {
    return (
      <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-copper/40 bg-warm-ivory text-[11px] font-semibold tabular-nums text-copper">
        {index}
      </span>
    );
  }
  return (
    <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-steel-rule bg-warm-ivory text-[11px] font-semibold tabular-nums text-forge-navy">
      {index}
    </span>
  );
}
