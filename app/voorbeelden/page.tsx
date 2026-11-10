import type { Metadata } from "next";
import { jobGroups, jobs } from "@/content";
import CtaBand from "@/components/site/CtaBand";
import JobBrowser from "@/components/site/JobBrowser";
import PageIntro from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Voorbeelden",
  description:
    "Een selectie voorbeelden van schilderwerk, behang en de werkbus van Niels Hoftijzer Schilderwerken in Borculo.",
};

export default function VoorbeeldenPage() {
  return (
    <>
      <PageIntro
        title="Voorbeelden"
        lede="Bent u benieuwd welke mogelijkheden u heeft bij Niels Hoftijzer Schilderwerken? Hieronder ziet u een selectie voorbeelden van onze diensten."
      />
      <div data-section="voorbeelden" className="mx-auto w-full max-w-6xl pb-4">
        <JobBrowser jobs={jobs} variant="grid" groups={jobGroups} />
      </div>
      <CtaBand text="Ook hulp nodig, of liever advies? Neem contact op met Niels Hoftijzer Schilderwerken." />
    </>
  );
}
