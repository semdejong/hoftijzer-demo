import type { Metadata } from "next";
import { jobById } from "@/content";
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
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
        <div className="space-y-10">
          <section id="glasweefsel" data-section="glasweefsel" className="scroll-mt-28 space-y-4">
            <h2 className="text-3xl sm:text-4xl">Glasweefsel</h2>
            <p>
              Glasweefsel is een scheurbestendig basismateriaal, leverbaar in verschillende patronen en designs. Na het aanbrengen van glasweefsel wordt het afgewerkt met muurverf. Na droging van de muurverf is glasweefsel naadloos en desgewenst zeer goed reinigbaar.
            </p>
            <p>
              Glasweefsel wordt steeds meer gebruikt in nieuwbouwwoningen, omdat de muren van nieuwbouwwoningen nog nawerken waardoor er scheuren in de muren kunnen ontstaan. Doordat glasweefsel elastisch is zijn de scheuren niet zichtbaar door de geschilderde of behangen wand.
            </p>
          </section>
          <section data-section="fotobehang" className="space-y-4">
            <h2 className="text-3xl sm:text-4xl">Fotobehang</h2>
            <p>
              Fotobehang wordt steeds populairder. Steeds meer mensen kiezen ervoor om hun muur te bekleden met fotobehang. Het ziet er erg leuk uit en er is een groot aanbod aan mooi fotobehang. Het is zelfs mogelijk om uw eigen foto af te laten drukken op hoogwaardig behang.
            </p>
          </section>
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
