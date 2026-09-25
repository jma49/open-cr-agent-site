import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Heading({
  title,
  body,
  className,
}: {
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-pretty text-fd-muted-foreground md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
