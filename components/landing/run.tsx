"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Copy, StageKind } from "@/lib/copy";
import { Heading, Section } from "./section";

const dot: Record<StageKind, string> = {
  code: "bg-fd-primary",
  model: "bg-[var(--model)]",
  planned: "border border-fd-muted-foreground/60",
};

export function Run({ copy }: { copy: Copy["run"] }) {
  const [active, setActive] = useState(3);
  const stage = copy.stages[active] ?? copy.stages[0];
  if (!stage) return null;

  return (
    <Section id="how-it-works">
      <Heading title={copy.title} body={copy.body} />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <ol className="border-l border-fd-border">
          {copy.stages.map((s, i) => {
            const selected = i === active;
            return (
              <li key={s.name}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  className={cn(
                    "-ml-px flex w-full items-baseline gap-4 border-l-2 py-3 pl-5 text-left transition",
                    selected
                      ? "border-fd-primary"
                      : "border-transparent hover:border-fd-border",
                  )}
                >
                  <span className="w-6 font-mono text-xs text-fd-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={cn(
                        "font-medium",
                        s.kind === "planned" && "text-fd-muted-foreground",
                      )}
                    >
                      {s.name}
                    </span>
                    <span className="ml-3 text-sm text-fd-muted-foreground">
                      {s.summary}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "size-2 shrink-0 translate-y-[-2px] rounded-full",
                      dot[s.kind],
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ol>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="glass rounded-2xl p-7">
            <p className="flex items-center gap-2 text-xs text-fd-muted-foreground">
              <span className={cn("size-2 rounded-full", dot[stage.kind])} />
              {copy.legend[stage.kind]}
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
              {stage.name}
            </p>
            <p className="mt-3 leading-relaxed text-fd-muted-foreground">
              {stage.detail}
            </p>
          </div>
          <div className="mt-4 flex gap-5 px-1 text-xs text-fd-muted-foreground">
            {(Object.keys(dot) as StageKind[]).map((kind) => (
              <span key={kind} className="flex items-center gap-2">
                <span className={cn("size-2 rounded-full", dot[kind])} />
                {copy.legend[kind]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
