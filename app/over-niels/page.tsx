import type { Metadata } from "next";
import { content, jobById } from "@/content";
import CtaBand from "@/components/site/CtaBand";
import Dagstaat from "@/components/site/Dagstaat";
import PageIntro from "@/components/site/PageIntro";

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
        lede="Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Schildersbedrijf Niels Hoftijzer uit Borculo."
      />
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6">
          <Dagstaat job={jobById("portret")} />
          <Dagstaat job={jobById("bus-oprit")} />
        </div>
        <div className="space-y-4 text-[18px] leading-[1.6]">
          {content.about.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Bent u geïnteresseerd? Neemt u dan contact op. Niels Hoftijzer Schilderwerken denkt met u mee voor een oplossing die het beste bij u past.
          </p>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
