import Link from "next/link";
import { content, homeJobIds, jobById } from "@/content";
import ContactBlock from "@/components/site/ContactBlock";
import Dagstaat from "@/components/site/Dagstaat";
import FaqList from "@/components/site/FaqList";
import JobBrowser from "@/components/site/JobBrowser";
import { CtaPair } from "@/components/site/Links";
import Signalen from "@/components/site/Signalen";
import VanMark from "@/components/site/VanMark";
import Zijstreep from "@/components/site/Zijstreep";

export default function Home() {
  const portret = jobById("portret");
  const aanHetWerk = jobById("niels-deur");
  const bus = jobById("bus-oprit");
  const strip = homeJobIds.map((id) => jobById(id));

  return (
    <>
      <section data-section="hero" className="mx-auto grid w-full max-w-6xl items-end gap-10 px-5 pb-24 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:pb-32 lg:pt-16">
        <div className="rise max-w-xl">
          <p className="text-[18px] leading-snug text-kitgrijs">{content.company.tagline}.</p>
          <h1 className="mt-4 text-[2.55rem] text-balance sm:text-6xl lg:text-[4.15rem]">
            {content.hero.title}
          </h1>
          <p className="mt-6 text-[18px] leading-[1.6]">{content.hero.subtitle}</p>
          <CtaPair className="mt-8" />
          <div className="mt-8 max-w-sm">
            <Zijstreep draw />
          </div>
        </div>
        <Dagstaat job={portret} className="rise" />
      </section>

      <section data-section="feiten" aria-label="Kern">
        <Zijstreep />
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 sm:grid-cols-4">
          {[
            ["Zaak", "eenmanszaak"],
            ["Sinds", "2010"],
            ["Plaats", "Borculo"],
            ["Werk", "schilder, behang, glas"],
          ].map(([label, value]) => (
            <div key={label} className="px-5 py-4 sm:border-l sm:border-inkt/15 sm:first:border-l-0">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">{label}</dt>
              <dd className="mt-1 font-heading text-xl leading-tight">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section data-section="bus" className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
        <div>
          <VanMark />
          <h2 className="mt-4 max-w-xl text-4xl sm:text-6xl">Eerlijke prijs-kwaliteit, zonder bedrijfspand.</h2>
          <p className="mt-5 max-w-xl text-[18px] leading-[1.6]">
            Doordat er geen bedrijfspand betaald moet worden, kan Niels een eerlijke prijs-kwaliteit bieden. Het persoonlijke contact maakt dat het mogelijk is om flexibel te zijn en tot een fantastisch eindresultaat te komen.
          </p>
          <p className="mt-4 max-w-xl text-[18px] leading-[1.6]">
            Als bedrijf sta ik voor vakmanschap en betrouwbaarheid. Voor al uw schilderwerk binnen en/of buiten kunt u bij mij terecht.
          </p>
        </div>
        <Dagstaat job={bus} />
      </section>

      <section data-section="diensten" className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl">{content.services.title}</h2>
          <VanMark className="h-8 w-auto shrink-0" />
        </div>
        <p className="mt-4 max-w-2xl text-[18px] leading-[1.6]">{content.services.intro}</p>
        <div className="mt-8 flex flex-col gap-5">
          {content.services.items.map((item, index) => (
            <article
              key={item.href}
              className={`border border-inkt bg-dagstaat ${index % 2 === 1 ? "lg:ml-24" : "lg:mr-16"}`}
            >
              <Zijstreep />
              <div className="px-4 py-5 sm:px-6">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span>Klus</span>
                  <span className="text-busoranje" aria-hidden="true">/</span>
                  <span className="text-kitgrijs">{item.klus}</span>
                  <span className="text-busoranje" aria-hidden="true">·</span>
                  <span>Onderdeel</span>
                  <span className="text-busoranje" aria-hidden="true">/</span>
                  <span className="text-kitgrijs">{item.onderdeel}</span>
                </p>
                <h3 className="mt-3 text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-3xl text-[18px] leading-[1.6]">{item.text}</p>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center font-heading text-lg text-buspaars-text underline decoration-busoranje underline-offset-4"
                  >
                    {item.link}
                  </Link>
                  <div className="border border-inkt px-2 py-1">
                    <span className="font-heading text-sm leading-none">Niels</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-section="voorbeelden" className="py-4">
        <div className="mx-auto w-full max-w-6xl px-5">
          <h2 className="text-4xl sm:text-5xl">Voorbeelden</h2>
          <p className="mt-3 max-w-2xl text-[18px] leading-[1.6]">
            Hieronder ziet u een selectie voorbeelden. De foto&apos;s staan op het formaat waarop ze zijn gemaakt.
          </p>
          <Link
            href="/voorbeelden"
            className="mt-2 inline-flex min-h-11 items-center font-heading text-lg text-buspaars-text underline decoration-busoranje underline-offset-4"
          >
            Alle voorbeelden
          </Link>
        </div>
        <div className="mx-auto mt-6 w-full max-w-6xl">
          <JobBrowser jobs={strip} variant="strip" />
        </div>
      </section>

      <Signalen />

      <section data-section="waarom" className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="max-w-xl text-4xl sm:text-5xl">Waarom Niels</h2>
        <div className="mt-8 flex flex-col gap-4">
          {content.reasons.map((reason, index) => (
            <article
              key={reason.label}
              className={`max-w-3xl border border-inkt bg-dagstaat px-4 py-4 sm:px-5 ${index % 2 === 1 ? "lg:ml-auto" : ""}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">{reason.label}</p>
              <p className="mt-2 text-[18px] leading-[1.6]">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-section="zin" className="on-inkt bg-inkt text-papier">
        <Zijstreep />
        <p className="mx-auto max-w-5xl px-5 py-14 font-heading text-3xl leading-[1.08] sm:text-5xl">
          Goed schilderwerk en goed onderhoud is van essentieel belang voor de duurzaamheid van een pand.
        </p>
      </section>

      <section data-section="over-niels" className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 py-8 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)]">
        <Dagstaat job={aanHetWerk} />
        <div>
          <h2 className="text-4xl sm:text-5xl">{content.about.title}</h2>
          <div className="mt-5 space-y-4 text-[18px] leading-[1.6]">
            {content.about.text.slice(0, 3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/over-niels"
            className="mt-6 inline-flex min-h-11 items-center font-heading text-lg text-buspaars-text underline decoration-busoranje underline-offset-4"
          >
            Meer over Niels
          </Link>
        </div>
      </section>

      <section data-section="faq" className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="text-4xl sm:text-5xl">Vragen</h2>
        <div className="mt-6">
          <FaqList items={content.faq} />
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
