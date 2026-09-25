import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Copy } from "@/lib/copy";
import { localePath } from "@/lib/shared";
import { Heading, Section } from "./section";

const code = [
  ["c", "// tools/ocra-team-rules.mjs\n"],
  ["k", "export default"],
  ["", " {\n  name: "],
  ["s", '"team-rules"'],
  ["", ",\n  configure(ctx) {\n    ctx.registerRules([{\n      path: "],
  ["s", '"services/**"'],
  ["", ",\n      rule: "],
  // biome-ignore lint/suspicious/noTemplateCurlyInString: the sample shows a template literal
  ["s", "`${ctx.settings.team}: require idempotency keys`"],
  ["", ",\n    }]);\n  },\n};"],
] as const;

const tone: Record<string, string> = {
  c: "text-white/40",
  k: "text-teal-200",
  s: "text-amber-100",
  "": "text-white/85",
};

export function Plugins({
  copy,
  locale,
}: {
  copy: Copy["plugins"];
  locale: string;
}) {
  return (
    <Section className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <Heading title={copy.title} body={copy.body} className="mb-8" />
        <ul className="space-y-3 text-sm">
          {copy.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-px w-4 shrink-0 bg-fd-primary" />
              {point}
            </li>
          ))}
        </ul>
        <Link
          href={localePath(locale, "/docs/plugins")}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fd-primary hover:underline"
        >
          {copy.cta}
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="glass-ink overflow-hidden rounded-2xl">
        <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-6">
          {code.map(([t, text], i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static fragments that never reorder
            <span key={i} className={tone[t]}>
              {text}
            </span>
          ))}
        </pre>
      </div>
    </Section>
  );
}
