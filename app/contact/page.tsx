import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import ContactBlock from "@/components/site/ContactBlock";
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
      <div className="mx-auto w-full max-w-6xl px-5 pb-10">
        <p className="max-w-2xl">
          Het contactformulier staat op de offertepagina.{" "}
          <Link href="/offerte" data-cta="offerte" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
            Naar het formulier
          </Link>
          .
        </p>
      </div>
      <ContactBlock />
    </>
  );
}
