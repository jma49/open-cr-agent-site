import type { Copy } from "@/lib/copy";
import { Heading, Section } from "./section";

export function Decisions({ copy }: { copy: Copy["decisions"] }) {
  return (
    <Section>
      <Heading title={copy.title} body={copy.body} />
      <ol className="grid gap-x-14 md:grid-cols-2">
        {copy.items.map((item, i) => (
          <li
            key={item.title}
            className="flex gap-5 border-t border-fd-border py-7"
          >
            <span className="font-mono text-xs text-fd-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em]">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-fd-muted-foreground">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
