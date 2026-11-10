import Link from "next/link";
import { content, homeJobIds, jobById } from "@/content";
import ContactBlock from "@/components/site/ContactBlock";
import Dagstaat from "@/components/site/Dagstaat";
import FaqList from "@/components/site/FaqList";
import JobBrowser from "@/components/site/JobBrowser";
import { CtaPair } from "@/components/site/Links";
import VanMark from "@/components/site/VanMark";
import Zijstreep from "@/components/site/Zijstreep";

export default function Home() {
  const portret = jobById("portret");
  const aanHetWerk = jobById("niels-deur");
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
        <p className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-3 gap-y-2 px-5 py-4 text-[18px]">
          {content.facts.map((fact, index) => (
            <span key={fact} className="inline-flex items-center gap-3">
              {index > 0 ? <span aria-hidden="true" className="text-busoranje">·</span> : null}
              {fact}
            </span>
          ))}
        </p>
      </section>

      <section data-section="diensten" className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl">{content.services.title}</h2>
          <VanMark className="h-8 w-auto shrink-0" />
        </div>
        <p className="mt-4 max-w-2xl text-[18px] leading-[1.6]">{content.services.intro}</p>
        <div className="mt-8 flex flex-col gap-5">
          {content.services.items.map((item) => (
            <article key={item.href} className="border border-inkt bg-dagstaat">
              <Zijstreep />
              <div className="px-4 py-5 sm:px-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span>Klus</span>
                  <span className="mx-2 text-busoranje" aria-hidden="true">/</span>
                  <span className="text-kitgrijs">{item.klus}</span>
                  <span className="mx-3 text-busoranje" aria-hidden="true">·</span>
                  <span>Onderdeel</span>
                  <span className="mx-2 text-busoranje" aria-hidden="true">/</span>
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
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-4 px-5">
          <div>
            <h2 className="text-4xl sm:text-5xl">Voorbeelden</h2>
            <p className="mt-3 max-w-2xl text-[18px] leading-[1.6]">
              Hieronder ziet u een selectie voorbeelden. De foto&apos;s staan op het formaat waarop ze zijn gemaakt.
            </p>
          </div>
          <Link
            href="/voorbeelden"
            className="inline-flex min-h-11 items-center font-heading text-lg text-buspaars-text underline decoration-busoranje underline-offset-4"
          >
            Alle voorbeelden
          </Link>
        </div>
        <div className="mx-auto mt-6 w-full max-w-6xl">
          <JobBrowser jobs={strip} variant="strip" />
        </div>
      </section>

      <section data-section="waarom" className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="max-w-xl text-4xl sm:text-5xl">Waarom Niels</h2>
        <ul className="mt-8 max-w-3xl border-y border-inkt/20">
          {content.reasons.map((reason) => (
            <li key={reason} className="border-b border-inkt/15 py-4 text-[18px] leading-[1.6] last:border-b-0">
              {reason}
            </li>
          ))}
        </ul>
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
