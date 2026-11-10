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
                <Link href={line.href} className="grid gap-1 px-4 py-4 sm:grid-cols-[16rem_minmax(0,1fr)] sm:items-baseline sm:px-6">
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
        <p className="mt-8 max-w-2xl text-[18px] leading-[1.6]">
          Daarnaast maak ik gebruik van vakkundige bedrijven voor timmerwerken en stucwerk. Timmerwerk en stucwerk voert Niels niet zelf uit.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-5 pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
        <div className="space-y-6">
          <Blad klus="Schilderen" onderdeel="Binnen en buiten" title="Van onderhoud tot metamorfose" heading="h2">
            <p>
              Voor kleinschalig onderhoud of juist een volledige metamorfose kunt u terecht bij Niels Hoftijzer Schilderwerken. Met ruim 15 jaar ervaring komt uw woning zowel binnen als buiten weer strak uit de lak.
            </p>
            <p>
              Binnen: kozijnen, ramen, deuren en muren, ook afwasbare of krijtmatte verven in badkamer en keuken. Buiten: een strak gelakte voordeur, buitenmuren en onderhoud wanneer bladders, kale of rotte plekken, openstaande naden of slechte kitnaden zichtbaar zijn.
            </p>
            <p>
              <Link href="/schilderwerk" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Lees het schilderwerk
              </Link>
            </p>
          </Blad>
          <Blad klus="Behangen" onderdeel="Wanden en plafonds" title="Van basis tot fotobehang" heading="h2">
            <p>
              Wanden en plafonds kunnen op diverse wijzen afgewerkt worden. U kiest voor basis tot en met exclusief behang, fotobehang, muurverf en glasweefsel, van glad tot gestructureerd.
            </p>
            <p>
              Glasweefsel is een scheurbestendig basismateriaal, naadloos en desgewenst zeer goed reinigbaar. Fotobehang kan ook met uw eigen foto.
            </p>
            <p>
              <Link href="/behangen" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Lees over behangen
              </Link>
            </p>
          </Blad>
          <Blad klus="Glaszetten" onderdeel="Normen" title="Glas, met advies" heading="h2">
            <p>
              Niels Hoftijzer Schilderwerken is gespecialiseerd in het zetten van glas. Ook kunnen wij u voorzien van advies en informatie over de soorten glas en de mogelijkheden.
            </p>
            <p>
              Vrijwel ieder soort glas is leverbaar en voldoet aan de geldende NEN-normen en/of de NPR richtlijnen. Diverse glassoorten kunnen op bestelling geleverd worden.
            </p>
            <p>
              <Link href="/glaszetten" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Lees over glaszetten
              </Link>
            </p>
          </Blad>
        </div>
        <div className="flex flex-col gap-6">
          <Dagstaat job={jobById("niels-deur")} />
          <Dagstaat job={jobById("nijntje")} />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
