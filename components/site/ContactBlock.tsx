import Link from "next/link";
import { content } from "@/content";
import { MailLink, PhoneLink, offerteClass } from "@/components/site/Links";
import Zijstreep from "@/components/site/Zijstreep";

export default function ContactBlock() {
  const { contact, footer } = content;
  return (
    <section data-section="contact" className="on-inkt bg-inkt text-papier">
      <Zijstreep />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start">
        <div>
          <h2 className="text-4xl text-papier sm:text-5xl">{contact.title}</h2>
          <p className="mt-5 max-w-xl text-[18px] leading-[1.6] text-papier">{contact.text}</p>
          <PhoneLink className="mt-8 inline-flex min-h-11 items-center font-heading text-4xl tracking-tight text-papier underline decoration-busoranje decoration-2 underline-offset-8 sm:text-5xl">
            {contact.phone}
          </PhoneLink>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/offerte" data-cta="offerte" className={offerteClass}>
              Vrijblijvende offerte
            </Link>
            <MailLink className="inline-flex min-h-11 items-center justify-center border border-papier px-4 font-heading text-base tracking-tight text-papier">
              {contact.email}
            </MailLink>
          </div>
        </div>
        <dl className="border border-papier bg-dagstaat text-inkt">
          <div className="border-b border-inkt/15 px-4 py-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Adres</dt>
            <dd className="mt-1">
              {contact.street}
              <br />
              {contact.postal}
            </dd>
          </div>
          <div className="border-b border-inkt/15 px-4 py-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Telefoon</dt>
            <dd className="mt-1">
              <PhoneLink className="inline-flex min-h-11 items-center text-buspaars-text underline decoration-busoranje underline-offset-4">
                {contact.phone}
              </PhoneLink>
            </dd>
          </div>
          <div className="border-b border-inkt/15 px-4 py-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">E-mail</dt>
            <dd className="mt-1">
              <MailLink className="inline-flex min-h-11 items-center break-all text-buspaars-text underline decoration-busoranje underline-offset-4">
                {contact.email}
              </MailLink>
            </dd>
          </div>
          <div className="border-b border-inkt/15 px-4 py-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Facebook</dt>
            <dd className="mt-1">
              {footer.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-buspaars-text underline decoration-busoranje underline-offset-4"
                >
                  {social.label}
                </a>
              ))}
            </dd>
          </div>
          <div className="px-4 py-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Kaart</dt>
            <dd className="mt-1">
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-buspaars-text underline decoration-busoranje underline-offset-4"
              >
                {contact.address}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
