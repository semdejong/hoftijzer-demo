import type { Metadata } from "next";
import { content } from "@/content";
import Blad from "@/components/site/Blad";
import PageIntro from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacyverklaring van deze conceptsite voor Niels Hoftijzer Schilderwerken. Geen cookies. Het formulier opent uw mailprogramma.",
};

export default function PrivacyPage() {
  const { company, contact } = content;
  return (
    <>
      <PageIntro
        title="Privacy"
        lede="Dit is een concept van Sleads en geen officiële website van Niels Hoftijzer Schilderwerken."
      />
      <div data-section="privacy" className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-16 lg:grid-cols-2">
        <Blad klus="Verantwoordelijke" onderdeel="Concept" title={company.name} heading="h2">
          <p>
            {contact.street}
            <br />
            {contact.postal}
          </p>
          <p>
            <a href={contact.emailHref} data-cta="mail" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
              {contact.email}
            </a>
          </p>
          <p>
            <a href={contact.phoneHref} data-cta="bellen" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
              {contact.phone}
            </a>
          </p>
        </Blad>
        <Blad klus="Bezoek" onderdeel="Cookieloos" title="Geen cookies" heading="h2">
          <p>
            Deze conceptsite plaatst geen cookies. Elke pagina laadt een cookieloos script van Sleads dat een paginabezoek registreert.
          </p>
          <p>Er staat op deze pagina geen bewaartermijn, omdat de site zelf geen formuliergegevens opslaat.</p>
        </Blad>
        <Blad klus="Formulier" onderdeel="Uw mailprogramma" title="Niets wordt automatisch verzonden" heading="h2">
          <p>
            Het formulier op de offertepagina verstuurt niets naar een server. Het opent het mailprogramma op uw apparaat, met een bericht gericht aan {contact.email}. U verstuurt dat bericht zelf, als u dat wilt.
          </p>
        </Blad>
      </div>
    </>
  );
}
