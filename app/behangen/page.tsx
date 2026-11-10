import type { Metadata } from "next";
import Link from "next/link";
import { content, jobById } from "@/content";
import Blad from "@/components/site/Blad";
import CtaBand from "@/components/site/CtaBand";
import Dagstaat from "@/components/site/Dagstaat";
import PageIntro from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Behangen",
  description:
    "Behangen van wanden en plafonds in Borculo: van basis tot exclusief behang, fotobehang, muurverf en glasweefsel.",
};

export default function BehangenPage() {
  return (
    <>
      <PageIntro
        title="Behangen"
        lede="Wanden en plafonds kunnen op diverse wijzen afgewerkt worden. U kiest voor basis tot en met exclusief behang, fotobehang, muurverf en glasweefsel, van glad tot gestructureerd."
      />
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="border border-inkt bg-dagstaat">
          <p className="border-b border-inkt/15 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs sm:px-6">
            Van glad tot gestructureerd
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5">
            {content.behangSoorten.map((soort) => (
              <li key={soort} className="border-b border-inkt/15 px-4 py-4 last:border-b-0 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className="font-heading text-2xl leading-tight">{soort}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 grid w-full max-w-6xl items-start gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
        <div className="space-y-6">
          <Blad id="glasweefsel" klus="Behangen" onderdeel="Glasweefsel" title="Glasweefsel" heading="h2">
            <p>
              Glasweefsel is een scheurbestendig basismateriaal, leverbaar in verschillende patronen en designs. Na het aanbrengen van glasweefsel wordt het afgewerkt met muurverf. Na droging van de muurverf is glasweefsel naadloos en desgewenst zeer goed reinigbaar.
            </p>
            <p>
              Glasweefsel wordt steeds meer gebruikt in nieuwbouwwoningen, omdat de muren van nieuwbouwwoningen nog nawerken waardoor er scheuren in de muren kunnen ontstaan. Doordat glasweefsel elastisch is zijn de scheuren niet zichtbaar door de geschilderde of behangen wand.
            </p>
            <p>
              Op de pagina glaszetten staat glasweefsel soms als aparte regel.{" "}
              <Link href="/glaszetten" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Daar leest u over het glas
              </Link>
              . De uitleg over het behang staat hier.
            </p>
          </Blad>
          <Blad klus="Behangen" onderdeel="Fotobehang" title="Fotobehang" heading="h2">
            <p>
              Fotobehang wordt steeds populairder. Steeds meer mensen kiezen ervoor om hun muur te bekleden met fotobehang. Het ziet er erg leuk uit en er is een groot aanbod aan mooi fotobehang. Het is zelfs mogelijk om uw eigen foto af te laten drukken op hoogwaardig behang.
            </p>
          </Blad>
        </div>
        <div className="flex flex-col gap-6">
          <Dagstaat job={jobById("nijntje")} />
          <Dagstaat job={jobById("wand")} />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
