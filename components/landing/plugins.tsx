import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import type { Copy } from "@/lib/copy";
import { localePath } from "@/lib/shared";
import { Section } from "./section";

const code = [
  ["c", "// tools/ocra-team-rules.mjs"],
  ["k", "export default {"],
  ["", "  name: "],
  ["s", '"team-rules"'],
  ["", ",\n  configure(ctx) {\n    ctx.registerRules([{\n      path: "],
  ["s", '"services/**"'],
  ["", ",\n      rule: "],
  // biome-ignore lint/suspicious/noTemplateCurlyInString: the sample shows a template literal
  ["s", "`${ctx.settings.team}: require idempotency keys`"],
  ["", ",\n    }]);\n  },\n"],
  ["k", "};"],
] as const;

const tone: Record<string, string> = {
  c: "text-zinc-500",
  k: "text-teal-300",
  s: "text-amber-200",
  "": "text-zinc-200",
};

export function Plugins({
  copy,
  locale,
}: {
  copy: Copy["plugins"];
  locale: string;
}) {
  return (
    <div className="border-y bg-fd-card/40">
      <Section className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-primary">
            {copy.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-fd-muted-foreground md:text-lg">
            {copy.body}
          </p>
          <ul className="mt-6 space-y-2">
            {copy.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-fd-primary" />
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
        <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-[13px] leading-6 shadow-xl">
          {code.map(([t, text], i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static fragments that never reorder
            <span key={i} className={tone[t]}>
              {text}
              {t === "c" ? "\n" : ""}
            </span>
          ))}
        </pre>
      </Section>
    </div>
  );
}
