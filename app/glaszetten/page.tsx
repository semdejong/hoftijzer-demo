import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import CtaBand from "@/components/site/CtaBand";
import PageIntro from "@/components/site/PageIntro";
import Zijstreep from "@/components/site/Zijstreep";

export const metadata: Metadata = {
  title: "Glaszetten",
  description:
    "Glaszetten in Borculo. Enkel glas, isolerende beglazing, veiligheidsglas, monumentenglas en advies van Niels Hoftijzer.",
};

export default function GlaszettenPage() {
  return (
    <>
      <PageIntro
        title="Glaszetten"
        lede="Niels Hoftijzer Schilderwerken is gespecialiseerd in het zetten van glas. Ook kunnen wij u voorzien van advies en informatie over de soorten glas en de mogelijkheden."
      />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div className="space-y-4">
          <p>
            Wij bieden verschillende glassoorten; van enkel glas tot brandwerend en van geslepen glas tot isolerende beglazing. Vrijwel ieder soort glas is leverbaar en voldoet aan de geldende NEN-normen en/of de NPR richtlijnen.
          </p>
          <p>Diverse glassoorten kunnen op bestelling geleverd worden.</p>
          <p>
            U heeft ook de mogelijkheid om glas te laten plaatsen. Niels geeft daarbij advies en informatie over de soorten en de mogelijkheden.
          </p>
          <p>
            Veiligheidsglas staat op de lijst als gelaagd of gehard. Monumentenglas staat apart, naast isolerende beglazing.
          </p>
        </div>
        <div className="border border-inkt bg-dagstaat">
          <Zijstreep />
          <div className="px-4 py-4 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
              Klus <span className="text-busoranje">/</span> <span className="text-kitgrijs">Glaszetten</span>
            </p>
            <h2 className="mt-3 text-3xl">Soorten</h2>
            <ul className="mt-4">
              {content.glassTypes.map((type) => (
                <li key={type} className="border-t border-inkt/15 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Soort</p>
                  <p className="mt-1 font-heading text-2xl leading-tight sm:text-3xl">{type}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end px-4 pb-4 sm:px-6">
            <div className="border border-inkt px-2 py-1">
              <span className="font-heading text-sm leading-none">Niels</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 pt-10">
        <p className="max-w-2xl border border-inkt bg-dagstaat px-5 py-5">
          Bij de glassoorten wordt glasweefsel soms apart genoemd. Dat is behang, geen glassoort.{" "}
          <Link href="/behangen#glasweefsel" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
            De uitleg staat bij behangen
          </Link>
          .
        </p>
      </div>
      <CtaBand />
    </>
  );
}
