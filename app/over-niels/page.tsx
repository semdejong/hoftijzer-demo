import type { Metadata } from "next";
import { content, jobById } from "@/content";
import Blad from "@/components/site/Blad";
import CtaBand from "@/components/site/CtaBand";
import Dagstaat from "@/components/site/Dagstaat";
import PageIntro from "@/components/site/PageIntro";
import Zijstreep from "@/components/site/Zijstreep";

export const metadata: Metadata = {
  title: "Over Niels",
  description:
    "Niels Hoftijzer Schilderwerken is een eenmanszaak uit Borculo, opgericht in 2010. Persoonlijk contact, zonder bedrijfspand.",
};

export default function OverNielsPage() {
  return (
    <>
      <PageIntro
        title="Over Niels"
        lede="Schildersbedrijf Niels Hoftijzer uit Borculo. Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010."
      />
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6">
          <Dagstaat job={jobById("portret")} />
          <Dagstaat job={jobById("niels-deur")} />
          <Dagstaat job={jobById("bus-oprit")} />
        </div>
        <div className="space-y-4 text-[18px] leading-[1.6]">
          <p>
            Als bedrijf sta ik voor vakmanschap en betrouwbaarheid. Voor al uw schilderwerk binnen en/of buiten kunt u bij mij terecht.
          </p>
          {content.about.text.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Bent u geïnteresseerd? Neemt u dan contact op. Niels Hoftijzer Schilderwerken denkt met u mee voor een oplossing die het beste bij u past.
          </p>
        </div>
      </div>

      <section data-section="zin" className="on-inkt mt-16 bg-inkt text-papier">
        <Zijstreep />
        <p className="mx-auto max-w-5xl px-5 py-14 font-heading text-3xl leading-[1.08] sm:text-5xl">
          Niels Hoftijzer is een gedegen professional die vakwerk levert waardoor de kwaliteit van het schilderwerk op een hoog niveau staat, en blijft staan.
        </p>
      </section>

      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-16 lg:grid-cols-2">
        {content.reasons.map((reason) => (
          <article key={reason.label} className="border border-inkt bg-dagstaat px-4 py-4 sm:px-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">{reason.label}</p>
            <p className="mt-2">{reason.text}</p>
          </article>
        ))}
        <Blad klus="Partners" onderdeel="Eerlijk" title="Timmerwerk en stucwerk" heading="h2">
          <p>
            Daarnaast maak ik gebruik van vakkundige bedrijven voor timmerwerken en stucwerk. Dat werk voert Niels niet zelf uit. Het schilderwerk, het behang en het glas blijven bij hem.
          </p>
        </Blad>
      </div>
      <CtaBand />
    </>
  );
}
