import type { Metadata } from "next";
import { content } from "@/content";
import OfferteForm from "@/components/offerte/OfferteForm";
import Blad from "@/components/site/Blad";
import PageIntro from "@/components/site/PageIntro";
import { PhoneLink } from "@/components/site/Links";

export const metadata: Metadata = {
  title: "Offerte",
  description:
    "Vraag een vrijblijvende offerte aan bij Niels Hoftijzer Schilderwerken in Borculo. Het formulier opent uw mailprogramma.",
};

export default function OffertePage() {
  return (
    <>
      <PageIntro
        title="Vrijblijvende offerte"
        lede="Heeft u hulp of advies nodig bij schilderwerken, glaszetten of behangen? Vul hieronder het contactformulier in. Dit is een concept: uw mailprogramma opent met het bericht, er wordt niets automatisch verzonden."
      />
      <div data-section="offerte" className="mx-auto grid w-full max-w-6xl items-start gap-8 px-5 pb-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <div className="space-y-5">
          <Blad klus="Invulling" onderdeel="Vrijblijvend" title="Wat u kunt noemen" heading="h2">
            <p>Naam, telefoon en e-mail zijn nodig. Adres of plaats en een korte toelichting mogen erbij.</p>
            <ul className="border-t border-inkt/20">
              {content.offerteDiensten.map((dienst) => (
                <li key={dienst} className="border-b border-inkt/15 py-2">
                  {dienst}
                </li>
              ))}
            </ul>
            <p>Vink aan wat bij de klus hoort. Meerdere diensten kunnen samen.</p>
          </Blad>
          <Blad klus="Btw" onderdeel="Informatie van Niels" heading="h3">
            <p>{content.btw.lead}</p>
            <ul className="list-disc space-y-1 pl-5">
              {content.btw.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Blad>
        </div>
        <div>
        <p className="mb-6">
          U kunt ook bellen naar{" "}
          <PhoneLink className="inline-flex min-h-11 items-center text-buspaars-text underline decoration-busoranje underline-offset-4">
            {content.contact.phone}
          </PhoneLink>{" "}
          of een e-mail sturen naar{" "}
          <a href={content.contact.emailHref} data-cta="mail" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
            {content.contact.email}
          </a>
          .
        </p>
        <OfferteForm
          email={content.contact.email}
          phone={content.contact.phone}
          phoneHref={content.contact.phoneHref}
          diensten={content.offerteDiensten}
        />
        </div>
      </div>
    </>
  );
}
