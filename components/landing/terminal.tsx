const lines: { text: string; tone?: "dim" | "ok" | "warn" | "cmd" }[] = [
  { text: "$ ocra review --from main", tone: "cmd" },
  {
    text: "[ocra] 4 file(s) selected, 1 excluded · risk tier: lite",
    tone: "dim",
  },
  { text: "[ocra] 2 review task(s) (grouped)", tone: "dim" },
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
  dim: "text-white/45",
  ok: "text-emerald-300",
  warn: "text-amber-200",
  cmd: "text-teal-200",
} as const;

export function Terminal({ label }: { label: string }) {
  return (
    <div className="glass-ink overflow-hidden rounded-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/25 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs text-white/40">{label}</span>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap p-4 font-mono text-[12.5px] leading-6 text-white/85">
        {lines.map((line, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static lines that never reorder
          <div key={i} className={line.tone ? tones[line.tone] : undefined}>
            {line.text || " "}
          </div>
        ))}
        <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-teal-200" />
      </pre>
    </div>
  );
}
