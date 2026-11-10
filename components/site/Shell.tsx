import type { ReactNode } from "react";
import { content } from "@/content";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import MobileBar from "@/components/site/MobileBar";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-wit focus:px-3 focus:py-2"
      >
        Naar inhoud
      </a>
      <Header
        nav={content.nav}
        phone={content.contact.phone}
        phoneHref={content.contact.phoneHref}
        logo={content.company.logoSmall}
      />
      <main id="inhoud" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
