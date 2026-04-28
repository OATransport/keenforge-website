/*
  Hero visual: the KeenForge Lead Path.

  Editorial brand asset. A quiet vertical path from inquiry to booked work,
  with one moment of action highlighted in Signal Teal and a copper detail
  on the outcome. Body copy is one short phrase per stage so the card reads
  at a glance without competing with the headline.

  No floating chips, no overlap, no fake software UI.
*/

type Step = {
  n: string;
  title: string;
  caption: string;
  highlight?: boolean;
  accent?: "copper";
};

const STEPS: ReadonlyArray<Step> = [
  { n: "01", title: "New Lead", caption: "Call, form, chat, or ad click." },
  {
    n: "02",
    title: "Response Sent",
    caption: "Answered in seconds.",
    highlight: true,
  },
  {
    n: "03",
    title: "Pipeline Updated",
    caption: "Owner notified. Source logged.",
  },
  {
    n: "04",
    title: "Follow Up Running",
    caption: "Sequenced texts and reminders.",
  },
  {
    n: "05",
    title: "Appointment Booked",
    caption: "Confirmed time on the calendar.",
  },
  {
    n: "06",
    title: "Review Requested",
    caption: "Customer prompted at the right moment.",
    accent: "copper",
  },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[44px] opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 78% 14%, rgba(46,143,138,0.18), transparent 62%)",
        }}
      />

      <figure className="relative overflow-hidden rounded-[26px] border border-steel-rule bg-warm-ivory-2 shadow-[0_40px_90px_-40px_rgba(11,31,51,0.30)]">
        {/* Editorial header */}
        <div className="border-b border-steel-rule px-7 pt-7 pb-6 sm:px-9">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-7 bg-signal-teal" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-signal-teal">
              The KeenForge Lead Path
            </span>
          </div>
          <p className="serif-italic mt-4 text-[22px] sm:text-[26px] leading-[1.18] text-forge-navy">
            From inquiry to booked work.
          </p>
        </div>

        {/* Vertical path */}
        <ol className="relative px-7 sm:px-9 py-2">
          {/* Single connecting rail behind the dots */}
          <span
            aria-hidden
            className="absolute left-[37px] sm:left-[45px] top-7 bottom-7 w-px bg-steel-rule"
          />

          {STEPS.map((s, i) => {
            const isLast = i === STEPS.length - 1;
            const isHighlight = Boolean(s.highlight);
            return (
              <li
                key={s.n}
                className={!isLast ? "border-b border-steel-rule/60" : ""}
              >
                <div className="relative flex items-center gap-5 py-4">
                  {/* Highlight rail on the left edge of the row */}
                  {isHighlight ? (
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r bg-signal-teal"
                    />
                  ) : null}

                  <span className="relative z-[1] flex h-7 w-7 shrink-0 items-center justify-center">
                    <Dot accent={s.accent} highlight={isHighlight} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10.5px] font-medium tabular-nums tracking-[0.22em] text-steel-gray">
                        {s.n}
                      </span>
                      <span className="text-[15.5px] font-semibold tracking-tight text-forge-navy">
                        {s.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[13px] leading-snug text-steel-gray">
                      {s.caption}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Outcome footer */}
        <div className="border-t border-steel-rule bg-warm-ivory px-7 py-6 sm:px-9">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-copper" />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-copper">
                Outcome
              </span>
            </div>
          </div>
          <p className="mt-3 text-[15px] leading-snug text-forge-navy">
            Booked work, with every touch accounted for.
          </p>
        </div>
      </figure>
    </div>
  );
}

function Dot({
  accent,
  highlight,
}: {
  accent?: "copper";
  highlight?: boolean;
}) {
  if (accent === "copper") {
    return (
      <span className="relative">
        <span className="block h-3 w-3 rounded-full bg-copper" />
        <span
          aria-hidden
          className="absolute inset-0 -m-[5px] rounded-full ring-1 ring-copper/35"
        />
      </span>
    );
  }
  if (highlight) {
    return (
      <span className="relative">
        <span className="block h-3 w-3 rounded-full bg-signal-teal" />
        <span
          aria-hidden
          className="absolute inset-0 -m-[5px] rounded-full ring-2 ring-signal-teal/30"
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="block h-2.5 w-2.5 rounded-full border border-signal-teal bg-warm-ivory"
    />
  );
}
