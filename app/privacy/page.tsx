import type { Metadata } from "next";
import { content } from "@/content";
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
      <div data-section="privacy" className="mx-auto w-full max-w-3xl space-y-4 px-5 pb-16 text-[18px] leading-[1.6]">
        <p>
          {company.name}
          <br />
          {contact.street}
          <br />
          {contact.postal}
          <br />
          <a href={contact.emailHref} data-cta="mail" className="inline-flex min-h-11 items-center text-buspaars-text underline decoration-busoranje underline-offset-4">
            {contact.email}
          </a>
        </p>
        <p>
          Deze conceptsite plaatst geen cookies. Elke pagina laadt een cookieloos script van Sleads dat een paginabezoek registreert. Er staat op deze pagina geen bewaartermijn, omdat de site zelf geen formuliergegevens opslaat.
        </p>
        <p>
          Het formulier op de offertepagina verstuurt niets naar een server. Het opent het mailprogramma op uw apparaat, met een bericht gericht aan {contact.email}. U verstuurt dat bericht zelf, als u dat wilt.
        </p>
        <p>
          <a href={contact.phoneHref} data-cta="bellen" className="inline-flex min-h-11 items-center text-buspaars-text underline decoration-busoranje underline-offset-4">
            Bellen kan naar {contact.phone}
          </a>
          .
        </p>
      </div>
    </>
  );
}
