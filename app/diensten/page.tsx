import type { Metadata } from "next";
import Link from "next/link";
import { jobById } from "@/content";
import Blad from "@/components/site/Blad";
import CtaBand from "@/components/site/CtaBand";
import Dagstaat from "@/components/site/Dagstaat";
import PageIntro from "@/components/site/PageIntro";
import Zijstreep from "@/components/site/Zijstreep";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Schilderen, behangen, glasweefsel, glaszetten, kleuradvies, renovatie en deuren en kozijnen. Niels Hoftijzer Schilderwerken in Borculo.",
};

const lines = [
  { label: "Schilderen", href: "/schilderwerk", note: "Binnen en buiten, van onderhoud tot een volledige metamorfose." },
  { label: "Behangen", href: "/behangen", note: "Wanden en plafonds, van basis tot exclusief behang en fotobehang." },
  { label: "Glasweefsel behang", href: "/behangen#glasweefsel", note: "Scheurbestendig basismateriaal, afgewerkt met muurverf." },
  { label: "Glaszetten", href: "/glaszetten", note: "Advies en het zetten van glas, passend bij de geldende normen." },
  { label: "Kleuradvies", href: "/schilderwerk#kleuradvies", note: "Kleur- en materiaaladvies op basis van uw smaak en wensen." },
  { label: "Renovatie", href: "/schilderwerk", note: "Renovatie staat bij de diensten, samen met schilderwerk, behang en glas." },
  { label: "Deuren en kozijnen", href: "/schilderwerk#deuren-kozijnen", note: "Kozijnen, ramen en deuren, binnen en buiten." },
];

export default function DienstenPage() {
  return (
    <>
      <PageIntro
        title="Diensten"
        lede="Wanneer u uw schilderwerk door Niels Hoftijzer Schilderwerken laat uitvoeren, kiest u voor kwaliteit. Niels denkt met u mee voor een oplossing die het beste bij u past."
      />
      <div className="mx-auto w-full max-w-6xl px-5 pb-8">
        <p className="max-w-2xl text-[18px] leading-[1.6]">
          Doordat er geen bedrijfspand betaald moet worden, kan Niels een eerlijke prijs-kwaliteit bieden. Het persoonlijke contact maakt dat het mogelijk is om flexibel te zijn en tot een fantastisch eindresultaat te komen.
        </p>
        <div className="mt-8 border border-inkt bg-dagstaat">
          <Zijstreep />
          <ul>
            {lines.map((line) => (
              <li key={line.label} className="border-b border-inkt/15 last:border-b-0">
                <Link href={line.href} className="grid min-h-11 gap-1 px-4 py-4 sm:grid-cols-[18rem_minmax(0,1fr)] sm:items-baseline sm:px-6">
                  <span className="font-heading text-2xl">{line.label}</span>
                  <span className="text-[18px] leading-snug">{line.note}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end px-4 py-3 sm:px-6">
            <div className="border border-inkt px-2 py-1">
              <span className="font-heading text-sm leading-none">Niels</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-5 pb-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
        <Blad klus="Partners" onderdeel="Eerlijk" title="Timmerwerk en stucwerk" heading="h2">
          <p>
            Daarnaast maak ik gebruik van vakkundige bedrijven voor timmerwerken en stucwerk. Timmerwerk en stucwerk voert Niels niet zelf uit. Het schilderwerk, het behang en het glas blijven bij hem.
          </p>
        </Blad>
        <div className="flex flex-col gap-6">
          <Dagstaat job={jobById("niels-deur")} />
          <Dagstaat job={jobById("nijntje")} />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
