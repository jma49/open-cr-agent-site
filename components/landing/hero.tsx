import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/github-icon";
import { cn } from "@/lib/cn";
import type { Copy } from "@/lib/copy";
import { localePath, repoUrl } from "@/lib/shared";
import { Terminal } from "./terminal";

export function Hero({ copy, locale }: { copy: Copy["hero"]; locale: string }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pt-20 pb-24 sm:px-8 md:pt-28 lg:grid-cols-[1fr_1.05fr]">
      <div>
        <p className="flex items-center gap-2 text-sm text-fd-muted-foreground">
          <span className="size-1.5 rounded-full bg-fd-primary" />
          {copy.status}
        </p>
        <h1
          className={cn(
            "mt-6 whitespace-pre-line text-balance font-semibold leading-[1.08] tracking-[-0.04em]",
            locale === "zh"
              ? "text-[2.2rem] sm:text-[3.25rem]"
              : "text-[2.6rem] sm:text-6xl",
          )}
        >
          {copy.title}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-fd-muted-foreground">
          {copy.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href={localePath(locale, "/docs/quickstart")}
            className="inline-flex items-center gap-2 rounded-full bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background transition hover:opacity-85"
          >
            {copy.start}
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={repoUrl}
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent/60"
          >
            <GithubIcon className="size-4" />
            {copy.github}
          </a>
        </div>
        <p className="mt-5 text-xs text-fd-muted-foreground">{copy.note}</p>
      </div>
      <Terminal label={locale === "zh" ? "示例输出" : "example output"} />
    </div>
  );
}
