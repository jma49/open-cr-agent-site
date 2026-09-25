import type { Copy } from "@/lib/copy";
import { Heading, Section } from "./section";

function Marker({ n }: { n: number }) {
  return (
    <span className="ml-2 inline-flex size-5 items-center justify-center rounded-full bg-fd-primary align-middle font-mono text-[10px] text-fd-primary-foreground">
      {n}
    </span>
  );
}

export function Anatomy({ copy }: { copy: Copy["anatomy"] }) {
  const { callouts } = copy;
  return (
    <Section>
      <Heading title={copy.title} body={copy.body} />
      <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_1fr]">
        <div className="glass overflow-hidden rounded-2xl font-mono text-[13px]">
          <div className="flex items-center justify-between border-b border-fd-border px-5 py-3 text-xs text-fd-muted-foreground">
            <span>
              src/auth/session.ts · L42
              <Marker n={2} />
            </span>
            <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-red-600 dark:text-red-300">
              critical
            </span>
          </div>
          <div className="border-b border-fd-border px-5 py-3 leading-6">
            <div className="text-fd-muted-foreground">
              41 export function isExpired(session: Session) {"{"}
            </div>
            <div className="-mx-5 bg-red-500/10 px-5">
              42 + return session.expiresAt {"<"} Date.now(); <Marker n={1} />
            </div>
            <div className="text-fd-muted-foreground">43 {"}"}</div>
          </div>
          <div className="space-y-3 px-5 py-5 font-sans text-sm">
            <p className="text-base font-semibold">
              Every session is treated as expired
            </p>
            <p className="leading-relaxed text-fd-muted-foreground">
              expiresAt is stored in seconds but compared with Date.now() in
              milliseconds, so every session counts as expired and users are
              logged out right after signing in.
            </p>
            <p className="rounded-lg border-l-2 border-fd-primary bg-fd-primary/5 px-3 py-2 text-xs text-fd-muted-foreground">
              Evidence: token.ts:18 sets expiresAt = Math.floor(Date.now() /
              1000) + ttl
              <Marker n={3} />
            </p>
            <pre className="rounded-lg bg-fd-background/60 px-3 py-2 font-mono text-xs">
              <span className="text-emerald-700 dark:text-emerald-300">
                + return session.expiresAt * 1000 {"<"} Date.now();
              </span>
              <Marker n={4} />
            </pre>
          </div>
        </div>
        <ol className="space-y-6 lg:pt-4">
          {[
            callouts.quote,
            callouts.lines,
            callouts.evidence,
            callouts.suggestion,
          ].map((text, i) => (
            <li key={text} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fd-primary font-mono text-xs text-fd-primary-foreground">
                {i + 1}
              </span>
              <span className="text-fd-muted-foreground">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
