"use client";

import { ArrowRight, Check, Copy as CopyIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Copy } from "@/lib/copy";
import { localePath } from "@/lib/shared";

const commands = `git clone https://github.com/jma49/Open-CR-Agent.git
cd Open-CR-Agent && npm install && npm run build
npm link --workspace @open-cr-agent/cli
export GEMINI_API_KEY=...
cd your-repository && ocra review`;

export function GetStarted({
  copy,
  locale,
}: {
  copy: Copy["start"];
  locale: string;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(commands);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative overflow-hidden border-t">
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-fd-muted-foreground">
          {copy.body}
        </p>
        <div className="relative mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-left">
          <button
            type="button"
            onClick={onCopy}
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300 transition hover:bg-zinc-800"
          >
            {copied ? (
              <Check className="size-3.5" />
            ) : (
              <CopyIcon className="size-3.5" />
            )}
            {copied ? copy.copied : copy.copy}
          </button>
          <pre className="overflow-x-auto p-5 pr-20 font-mono text-[13px] leading-7 text-zinc-200">
            {commands}
          </pre>
        </div>
        <Link
          href={localePath(locale, "/docs/quickstart")}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
        >
          {copy.docs}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
