import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Copy } from "@/lib/copy";
import { Heading, Section } from "./section";

export function Status({ copy }: { copy: Copy["status"] }) {
  return (
    <Section>
      <Heading title={copy.title} />
      <ol className="glass divide-y divide-fd-border overflow-hidden rounded-2xl">
        {copy.items.map((item) => (
          <li
            key={item.milestone}
            className="grid gap-2 px-6 py-5 md:grid-cols-[4rem_12rem_1fr_7rem] md:items-baseline"
          >
            <span className="font-mono text-sm text-fd-muted-foreground">
              {item.milestone}
            </span>
            <span className="font-semibold">{item.title}</span>
            <span className="text-sm text-fd-muted-foreground">
              {item.body}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-sm md:justify-end",
                item.done ? "text-fd-primary" : "text-fd-muted-foreground",
              )}
            >
              {item.done ? <Check className="size-4" /> : null}
              {item.state}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
