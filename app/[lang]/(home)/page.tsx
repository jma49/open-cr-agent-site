import { Anatomy } from "@/components/landing/anatomy";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { GetStarted } from "@/components/landing/get-started";
import { Hero } from "@/components/landing/hero";
import { Pipeline } from "@/components/landing/pipeline";
import { Plugins } from "@/components/landing/plugins";
import { Roadmap } from "@/components/landing/roadmap";
import { getCopy } from "@/lib/copy";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const copy = getCopy(lang);
  return (
    <main className="flex flex-1 flex-col">
      <Hero copy={copy} locale={lang} />
      <Pipeline copy={copy.pipeline} />
      <Features copy={copy.features} />
      <Anatomy copy={copy.anatomy} />
      <Plugins copy={copy.plugins} locale={lang} />
      <Roadmap copy={copy.roadmap} />
      <GetStarted copy={copy.start} locale={lang} />
      <Footer copy={copy.footer} locale={lang} />
    </main>
  );
}
