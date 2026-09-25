import {
  Crosshair,
  Gauge,
  Layers,
  Puzzle,
  Repeat,
  ShieldCheck,
} from "lucide-react";
import type { Copy } from "@/lib/copy";
import { Section, SectionHeading } from "./section";

const icons = [Crosshair, Layers, Repeat, Gauge, ShieldCheck, Puzzle];

export function Features({ copy }: { copy: Copy["features"] }) {
  return (
    <div className="border-y bg-fd-card/40">
      <Section>
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        <div className="grid gap-px overflow-hidden rounded-2xl border bg-fd-border sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, i) => {
            const Icon = icons[i] ?? Crosshair;
            return (
              <div key={item.title} className="bg-fd-background p-6">
                <Icon className="size-5 text-fd-primary" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
