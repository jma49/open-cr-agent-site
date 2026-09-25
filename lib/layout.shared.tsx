import { uiTranslations } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";
import { i18n } from "./i18n";
import { localePath, repoUrl } from "./shared";
import { zhUi } from "./ui-zh";

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({ en: { displayName: "English" }, zh: zhUi });

const docsLabel: Record<string, string> = { en: "Docs", zh: "文档" };

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: localePath(locale, "/"),
    },
    githubUrl: repoUrl,
    links: [
      {
        text: docsLabel[locale] ?? "Docs",
        url: localePath(locale, "/docs"),
        active: "nested-url",
      },
    ],
  };
}
