import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/github-icon";
import type { Copy } from "@/lib/copy";
import { localePath, repoUrl } from "@/lib/shared";
import { Terminal } from "./terminal";

export function Hero({ copy, locale }: { copy: Copy; locale: string }) {
  const { hero, proof } = copy;
  return (
    <div className="relative overflow-hidden border-b">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:pt-24 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border bg-fd-card/70 px-3 py-1 font-mono text-xs text-fd-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-fd-primary" />
            {hero.badge}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {hero.title}{" "}
            <span className="inline-block text-fd-primary">
              {hero.highlight}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-fd-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/docs/quickstart")}
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
            >
              {hero.start}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={repoUrl}
              className="inline-flex items-center gap-2 rounded-lg border bg-fd-card px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent"
            >
              <GithubIcon className="size-4" />
              {hero.github}
            </a>
          </div>
        </div>
        <Terminal />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-px overflow-hidden border-t px-4 sm:px-6 md:grid-cols-3">
        {proof.map((item) => (
          <div key={item.title} className="py-8 md:px-6 md:first:pl-0">
            <p className="font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-fd-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
