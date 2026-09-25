import type { Copy } from "@/lib/copy";
import { Section, SectionHeading } from "./section";

function Callout({ n, text }: { n: number; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fd-primary font-mono text-xs text-fd-primary-foreground">
        {n}
      </span>
      <span className="text-sm text-fd-muted-foreground">{text}</span>
    </li>
  );
}

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
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        body={copy.body}
      />
      <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-xl border bg-fd-card font-mono text-[13px] shadow-lg">
          <div className="flex items-center justify-between border-b px-4 py-2.5 text-xs text-fd-muted-foreground">
            <span>
              src/auth/session.ts · L42
              <Marker n={2} />
            </span>
            <span className="rounded bg-red-500/15 px-1.5 py-0.5 text-red-600 dark:text-red-400">
              critical
            </span>
          </div>
          <div className="border-b bg-fd-background/60 px-4 py-3 leading-6">
            <div className="text-fd-muted-foreground">
              41 export function isExpired(session: Session) {"{"}
            </div>
            <div className="bg-red-500/10">
              42 + return session.expiresAt {"<"} Date.now(); <Marker n={1} />
            </div>
            <div className="text-fd-muted-foreground">43 {"}"}</div>
          </div>
          <div className="space-y-3 px-4 py-4 font-sans text-sm">
            <p className="font-semibold">Every session is treated as expired</p>
            <p className="text-fd-muted-foreground">
              expiresAt is stored in seconds but compared with Date.now() in
              milliseconds, so every session counts as expired and users are
              logged out right after signing in.
            </p>
            <p className="rounded-md border-l-2 border-fd-primary bg-fd-primary/5 px-3 py-2 text-xs text-fd-muted-foreground">
              Evidence: token.ts:18 sets expiresAt = Math.floor(Date.now() /
              1000) + ttl
              <Marker n={3} />
            </p>
            <pre className="rounded-md bg-fd-background px-3 py-2 font-mono text-xs">
              <span className="text-emerald-600 dark:text-emerald-400">
                + return session.expiresAt * 1000 {"<"} Date.now();
              </span>
              <Marker n={4} />
            </pre>
          </div>
        </div>
        <ol className="space-y-5 lg:pt-6">
          <Callout n={1} text={callouts.quote} />
          <Callout n={2} text={callouts.lines} />
          <Callout n={3} text={callouts.evidence} />
          <Callout n={4} text={callouts.suggestion} />
        </ol>
      </div>
    </Section>
  );
}
