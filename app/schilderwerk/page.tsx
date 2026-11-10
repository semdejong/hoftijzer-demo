import type { Metadata } from "next";
import { content, jobById } from "@/content";
import Blad from "@/components/site/Blad";
import CtaBand from "@/components/site/CtaBand";
import Dagstaat from "@/components/site/Dagstaat";
import JobBrowser from "@/components/site/JobBrowser";
import PageIntro from "@/components/site/PageIntro";
import Signalen from "@/components/site/Signalen";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Schilderwerk binnen en buiten in Borculo. Kozijnen, deuren, muren, onderhoud en kleuradvies door Niels Hoftijzer.",
};

export default function SchilderwerkPage() {
  return (
    <>
      <PageIntro
        title="Schilderwerk binnen en buiten"
        lede="Voor kleinschalig onderhoud of juist een volledige metamorfose kunt u terecht bij Niels Hoftijzer Schilderwerken. Met ruim 15 jaar ervaring komt uw woning zowel binnen als buiten weer strak uit de lak."
      />
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
        <div className="space-y-10">
          <section data-section="binnen" className="space-y-4">
            <h2 className="text-3xl sm:text-4xl">Schilderwerk binnen</h2>
            <p>
              Het binnenschilderwerk op de kozijnen, ramen en deuren van uw woning of bedrijfspand is de basis voor goed houdend buitenschilderwerk. Zit het binnenschilderwerk goed in de verf of lak, alsmede zijn de verstekken, kitnaden en glasafdichtingen goed afgedicht, dan vertaalt zich dat naar beter houdend schilderwerk aan de buitenzijde.
            </p>
            <p>
              Het binnenschilderwerk in uw huis kan de sfeer van uw interieur sterk bepalen. Strak afgewerkte muren, maar ook kleuren en effecten maken uw huis helemaal af. Ook zijn er speciale verven en coatings om de muren in badkamer en keuken zo te bewerken dat ze afwasbaar zijn, of krijtmat, wat weer een diepe kleur weergeeft.
            </p>
            <ul className="border-t border-inkt/20">
              {content.binnenOnderdelen.map((item) => (
                <li key={item.label} className="border-b border-inkt/15 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">{item.label}</p>
                  <p className="mt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>
          <section id="deuren-kozijnen" data-section="deuren-kozijnen" className="scroll-mt-28 space-y-4">
            <h2 className="text-3xl sm:text-4xl">Deuren en kozijnen</h2>
            <p>
              Een strak gelakte voordeur en mooi buitenschilderwerk is het visitekaartje van uw woning. Met de juiste producten wordt er strak lakwerk geleverd van hoge kwaliteit. Ook buitenmuren kunnen geschilderd worden wat voor een totaal ander aangezicht zorgt. Voor een hoge kwaliteit met een eerlijke prijs bent u aan het juiste adres.
            </p>
            <ul className="border-t border-inkt/20">
              {content.buitenOnderdelen.map((item) => (
                <li key={item.label} className="border-b border-inkt/15 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">{item.label}</p>
                  <p className="mt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="flex flex-col gap-6">
          <Dagstaat job={jobById("kozijn")} />
          <Dagstaat job={jobById("deuren")} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-8">
        <h2 className="text-3xl sm:text-4xl">Buiten, op de klus</h2>
        <p className="mt-3 max-w-2xl">
          Het is van belang om buitenschilderwerk goed te onderhouden. Hieronder een deel van het buitenwerk: steigers, een portiek en de werkbus.
        </p>
      </div>
      <div className="mx-auto w-full max-w-6xl pb-12">
        <JobBrowser
          variant="strip"
          jobs={["berkelstreek", "steiger-dakkapellen", "steiger-gevel", "bus-woning"].map((id) => jobById(id))}
        />
      </div>

      <div className="pb-12">
        <Signalen />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-4 lg:grid-cols-2">
        <Blad klus="Planning" onderdeel="Ruimte" title="Altijd ruimte voor noodwerk" heading="h2">
          <p>
            Mijn visie op goede planning is dat er naast een strakke inplanning van het werk altijd ruimte moet zijn voor onverhoopte extra of noodwerkzaamheden. Het belang van de klant staat immers altijd voorop.
          </p>
        </Blad>
        <Blad id="kleuradvies" klus="Kleuradvies" onderdeel="Smaak" title="Kleur en materiaal" heading="h2">
          <p>
            Ik geef graag kleur- en materiaaladvies op basis van uw smaak en wensen en werk met de nieuwste technieken om tot een mooi eindresultaat te komen.
          </p>
          <p>
            Kleuradvies hoort bij het schilderwerk, net als renovatie en deuren en kozijnen. Voor timmerwerken en stucwerk maak ik gebruik van vakkundige bedrijven.
          </p>
        </Blad>
        <section data-section="btw" className="border border-inkt bg-dagstaat px-5 py-6 lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Informatie van Niels · btw</p>
          <h2 className="mt-3 text-3xl">{content.btw.title}</h2>
          <p className="mt-4">{content.btw.lead}</p>
          <p className="mt-4">Het lage btw-tarief is onder andere geldig op:</p>
          <ul className="mt-3 space-y-2">
            {content.btw.items.map((item) => (
              <li key={item} className="border-t border-inkt/15 pt-2">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
