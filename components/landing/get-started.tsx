"use client";

import { ArrowRight, Check, Copy as CopyIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Copy } from "@/lib/copy";
import { localePath } from "@/lib/shared";
import { Heading, Section } from "./section";

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
    <Section className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <Heading title={copy.title} body={copy.body} className="mb-8" />
        <Link
          href={localePath(locale, "/docs/quickstart")}
          className="inline-flex items-center gap-2 rounded-full bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background transition hover:opacity-85"
        >
          {copy.docs}
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="glass-ink relative overflow-hidden rounded-2xl">
        <button
          type="button"
          onClick={onCopy}
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/75 transition hover:bg-white/10"
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <CopyIcon className="size-3.5" />
          )}
          {copied ? copy.copied : copy.copy}
        </button>
        <pre className="overflow-x-auto p-6 pr-24 font-mono text-[13px] leading-7 text-white/85">
          {commands}
        </pre>
      </div>
    </Section>
  );
}
