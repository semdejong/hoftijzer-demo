import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import { PhoneLink, offerteClass } from "@/components/site/Links";
import { content } from "@/content";

export default function NotFound() {
  return (
    <>
      <PageIntro
        title="Deze pagina bestaat niet"
        lede="Het adres klopt niet op deze conceptsite. Ga terug naar home, of bel Niels."
      />
      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-3 px-5 pb-16">
        <Link href="/" className="inline-flex min-h-11 items-center border border-inkt px-4 font-heading text-base">
          Naar home
        </Link>
        <PhoneLink className="inline-flex min-h-11 items-center bg-bel px-4 font-heading text-base text-white">
          Bel {content.contact.phone}
        </PhoneLink>
        <Link href="/offerte" data-cta="offerte" className={offerteClass}>
          Offerte
        </Link>
      </div>
    </>
  );
}
