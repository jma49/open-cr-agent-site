import Link from "next/link";
import { Logo } from "@/components/logo";
import type { Copy } from "@/lib/copy";
import { localePath, repoUrl } from "@/lib/shared";

export function Footer({
  copy,
  locale,
}: {
  copy: Copy["footer"];
  locale: string;
}) {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-fd-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2">{copy.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          <Link
            href={localePath(locale, "/docs")}
            className="hover:text-fd-foreground"
          >
            {copy.manual}
          </Link>
          <a href={repoUrl} className="hover:text-fd-foreground">
            {copy.github}
          </a>
          <a
            href={`${repoUrl}/blob/main/LICENSE`}
            className="hover:text-fd-foreground"
          >
            {copy.license}
          </a>
        </nav>
      </div>
    </footer>
  );
}
