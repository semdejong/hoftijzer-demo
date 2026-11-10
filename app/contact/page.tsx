import type { Metadata } from "next";
import Link from "next/link";
import { content, jobById } from "@/content";
import Blad from "@/components/site/Blad";
import ContactBlock from "@/components/site/ContactBlock";
import Dagstaat from "@/components/site/Dagstaat";
import { MailLink, PhoneLink } from "@/components/site/Links";
import PageIntro from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bel 06 238 820 27 of mail info@nhschilderwerken.nl. Niels Hoftijzer Schilderwerken, Keizer Ottostraat 38, 7271 VP Borculo.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact met Niels Hoftijzer" lede={content.contact.text} />
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 px-5 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
        <div className="grid gap-5">
          <Blad klus="Bellen" onderdeel="Direct" title="Bel Niels" heading="h2">
            <p>
              Advies of hulp nodig? Neem direct contact op met Niels Hoftijzer Schilderwerken. U kunt bellen naar{" "}
              <PhoneLink className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                {content.contact.phone}
              </PhoneLink>
              .
            </p>
          </Blad>
          <Blad klus="Mail" onderdeel="Zelf versturen" title="Schrijf Niels" heading="h2">
            <p>
              Stuur een e-mail naar{" "}
              <MailLink className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                {content.contact.email}
              </MailLink>
              . Op de offertepagina opent een formulier uw mailprogramma met een leesbare samenvatting. Er wordt niets automatisch verzonden.
            </p>
            <p>
              <Link href="/offerte" data-cta="offerte" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Naar het formulier
              </Link>
            </p>
          </Blad>
          <Blad klus="Adres" onderdeel="Borculo" title="Keizer Ottostraat" heading="h2">
            <p>
              {content.contact.street}
              <br />
              {content.contact.postal}
            </p>
            <p>
              <a href={content.contact.mapsHref} target="_blank" rel="noopener noreferrer" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Open het adres in een kaart
              </a>
            </p>
            <p>
              <a href={content.footer.socials[0].href} target="_blank" rel="noopener noreferrer" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
                Facebook
              </a>
            </p>
          </Blad>
        </div>
        <Dagstaat job={jobById("bus-woning")} />
      </div>
      <ContactBlock />
    </>
  );
}
