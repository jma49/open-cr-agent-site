"use client";

import { Bot, Clock, Cog } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Copy, StageKind } from "@/lib/copy";
import { Section, SectionHeading } from "./section";

const kindStyle: Record<StageKind, { icon: typeof Cog; chip: string }> = {
  code: {
    icon: Cog,
    chip: "border-fd-primary/40 bg-fd-primary/10 text-fd-primary",
  },
  model: {
    icon: Bot,
    chip: "border-[var(--model)]/40 bg-[var(--model)]/10 text-[var(--model)]",
  },
  planned: {
    icon: Clock,
    chip: "border-dashed border-fd-border text-fd-muted-foreground",
  },
};

export function Pipeline({ copy }: { copy: Copy["pipeline"] }) {
  const [active, setActive] = useState(3);
  const stage = copy.stages[active] ?? copy.stages[0];
  if (!stage) return null;
  const ActiveIcon = kindStyle[stage.kind].icon;

  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        body={copy.body}
      />
      <div className="mb-6 flex flex-wrap justify-center gap-4 text-xs text-fd-muted-foreground">
        {(Object.keys(kindStyle) as StageKind[]).map((kind) => {
          const Icon = kindStyle[kind].icon;
          return (
            <span
              key={kind}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
                kindStyle[kind].chip,
              )}
            >
              <Icon className="size-3.5" />
              {copy.legend[kind]}
            </span>
          );
        })}
      </div>
      <div
        role="tablist"
        aria-label={copy.title}
        className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7"
      >
        {copy.stages.map((s, i) => {
          const Icon = kindStyle[s.kind].icon;
          const selected = i === active;
          return (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={cn(
                "group relative rounded-xl border p-3 text-left transition",
                s.kind === "planned" && "border-dashed",
                selected
                  ? "bg-fd-card shadow-lg ring-2 ring-fd-primary/50"
                  : "hover:bg-fd-card/60",
              )}
            >
              <span className="flex items-center justify-between font-mono text-[11px] text-fd-muted-foreground">
                {String(i + 1).padStart(2, "0")}
                <Icon
                  className={cn(
                    "size-3.5",
                    s.kind === "model"
                      ? "text-[var(--model)]"
                      : s.kind === "code"
                        ? "text-fd-primary"
                        : "",
                  )}
                />
              </span>
              <span className="mt-2 block font-semibold">{s.name}</span>
              <span className="mt-0.5 block text-xs text-fd-muted-foreground">
                {s.summary}
              </span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        className="mt-4 flex gap-4 rounded-xl border bg-fd-card p-6"
      >
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-lg border",
            kindStyle[stage.kind].chip,
          )}
        >
          <ActiveIcon className="size-5" />
        </span>
        <div>
          <p className="font-semibold">
            {stage.name}{" "}
            <span className="font-normal text-fd-muted-foreground">
              · {copy.legend[stage.kind]}
            </span>
          </p>
          <p className="mt-1 text-fd-muted-foreground">{stage.detail}</p>
        </div>
      </div>
    </Section>
  );
}
