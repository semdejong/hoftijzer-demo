import Link from "next/link";
import { content } from "@/content";
import VanMark from "@/components/site/VanMark";
import Zijstreep from "@/components/site/Zijstreep";

const links = [
  { label: "Diensten", href: "/diensten" },
  { label: "Schilderwerk", href: "/schilderwerk" },
  { label: "Behangen", href: "/behangen" },
  { label: "Glaszetten", href: "/glaszetten" },
  { label: "Voorbeelden", href: "/voorbeelden" },
  { label: "Over Niels", href: "/over-niels" },
  { label: "Contact", href: "/contact" },
  { label: "Offerte", href: "/offerte" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  const { company, contact, footer } = content;
  return (
    <footer data-section="footer" className="mt-auto pb-40 lg:pb-24">
      <Zijstreep />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <VanMark />
          <p className="mt-4 max-w-xs text-kitgrijs">
            {company.tagline}. Eenmanszaak sinds {company.founded}.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={company.logoSmall}
            alt=""
            width={250}
            height={49}
            className="mt-5 h-10 w-auto max-w-[250px]"
          />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Pagina&apos;s</p>
          <ul className="mt-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center underline decoration-busoranje underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Contact</p>
          <p className="mt-3">
            {contact.street}
            <br />
            {contact.postal}
          </p>
          <p className="mt-3">
            <a href={contact.phoneHref} data-cta="bellen" className="inline-flex min-h-11 items-center underline decoration-busoranje underline-offset-4">
              {contact.phone}
            </a>
          </p>
          <p>
            <a href={contact.emailHref} data-cta="mail" className="inline-flex min-h-11 items-center break-all underline decoration-busoranje underline-offset-4">
              {contact.email}
            </a>
          </p>
          {footer.socials.map((social) => (
            <p key={social.href}>
              <a href={social.href} className="inline-flex min-h-11 items-center underline decoration-busoranje underline-offset-4" target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </p>
          ))}
          <p className="mt-4 text-[16px]">
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline decoration-busoranje underline-offset-4">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
