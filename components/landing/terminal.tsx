const lines: { text: string; tone?: "dim" | "ok" | "warn" | "accent" }[] = [
  { text: "$ ocra review --from main", tone: "accent" },
  {
    text: "[ocra] 4 file(s) selected, 1 excluded · risk tier: lite",
    tone: "dim",
  },
  { text: "[ocra] 2 review task(s) (grouped)", tone: "dim" },
  {
    text: "[ocra] correctness-1 started: session handling (2 file(s))",
    tone: "dim",
  },
  {
    text: "[ocra] correctness-1 gemini-3.5-flash: 5 tool calls, $0.0081",
    tone: "dim",
  },
  { text: "[ocra] correctness-2 completed in 7.4s · 0 finding(s)", tone: "ok" },
  { text: "" },
  { text: "src/auth/session.ts" },
  {
    text: "  critical   L42       Every session is treated as expired",
    tone: "warn",
  },
  { text: "    isExpired() compares expiresAt in seconds with Date.now() in" },
  { text: "    milliseconds, so users are logged out right after signing in." },
  { text: "    Suggestion: return session.expiresAt * 1000 < Date.now();" },
  { text: "" },
  {
    text: "1 finding(s) (1 critical) · 21,406 in / 402 out · $0.0143",
    tone: "dim",
  },
];

const tones = {
  dim: "text-zinc-500",
  ok: "text-emerald-400",
  warn: "text-amber-300",
  accent: "text-teal-300",
} as const;

export function Terminal() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30">
      <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-xs text-zinc-500">
          example output
        </span>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap p-4 font-mono text-[12.5px] leading-6 text-zinc-200 sm:whitespace-pre">
        {lines.map((line, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static lines that never reorder
          <div key={i} className={line.tone ? tones[line.tone] : undefined}>
            {line.text || " "}
          </div>
        ))}
        <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-teal-300" />
      </pre>
    </div>
  );
}
