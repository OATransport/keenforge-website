"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FAQ as FAQ_DATA } from "@/lib/content";

export function FAQ({
  items = FAQ_DATA,
  title = "Common Questions Before You Book a Review",
}: {
  items?: ReadonlyArray<{ q: string; a: string }>;
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <Section tone="bone" bordered>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 className="display text-[34px] sm:text-[42px] lg:text-[48px] text-ink">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-rule rounded-2xl border border-rule bg-paper">
              {items.map((it, i) => {
                const isOpen = open === i;
                return (
                  <li key={it.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                    >
                      <span className="text-[16.5px] font-medium tracking-tight text-ink">
                        {it.q}
                      </span>
                      <span
                        className={[
                          "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                          isOpen
                            ? "border-ember bg-ember text-white"
                            : "border-rule bg-bone text-ink-2",
                        ].join(" ")}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    <div
                      className={[
                        "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        <p className="px-7 pb-7 text-[15.5px] leading-relaxed text-ink-2">
                          {it.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
