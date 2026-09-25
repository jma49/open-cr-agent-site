import { cn } from "@/lib/cn";
import type { Copy } from "@/lib/copy";
import { Section, SectionHeading } from "./section";

export function Roadmap({ copy }: { copy: Copy["roadmap"] }) {
  return (
    <Section>
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
      <ol className="grid gap-4 md:grid-cols-4">
        {copy.items.map((item) => (
          <li
            key={item.milestone}
            className={cn(
              "rounded-xl border p-5",
              item.done
                ? "border-fd-primary/50 bg-fd-primary/5"
                : "border-dashed",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-fd-muted-foreground">
                {item.milestone}
              </span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  item.done
                    ? "bg-fd-primary text-fd-primary-foreground"
                    : "border text-fd-muted-foreground",
                )}
              >
                {item.status}
              </span>
            </div>
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-fd-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
