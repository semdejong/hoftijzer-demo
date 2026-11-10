import Link from "next/link";
import { content } from "@/content";
import Zijstreep from "@/components/site/Zijstreep";

export default function MobileBar() {
  return (
    <div data-section="mobiel" className="fixed inset-x-0 bottom-0 z-40 bg-papier lg:hidden print:hidden">
      <Zijstreep />
      <div className="grid grid-cols-2">
        <a
          href={content.contact.phoneHref}
          data-cta="bellen"
          className="inline-flex min-h-12 items-center justify-center bg-bel px-2 text-center font-heading text-[15px] tracking-tight text-white"
        >
          Bel {content.contact.phone}
        </a>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="inline-flex min-h-12 items-center justify-center bg-buspaars px-2 text-center font-heading text-base tracking-tight text-white"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
