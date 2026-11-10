import type { Metadata } from "next";
import { content } from "@/content";
import OfferteForm from "@/components/offerte/OfferteForm";
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
      <div data-section="offerte" className="mx-auto w-full max-w-3xl px-5 pb-8">
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
        <aside className="mt-8 border border-inkt bg-dagstaat px-5 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Informatie van Niels · btw</p>
          <p className="mt-3">{content.btw.lead}</p>
        </aside>
      </div>
    </>
  );
}
