import type { ReactNode } from "react";
import Zijstreep from "@/components/site/Zijstreep";

export default function Blad({
  klus,
  onderdeel,
  title,
  heading = "h2",
  id,
  children,
}: {
  klus: string;
  onderdeel?: string;
  title?: string;
  heading?: "h2" | "h3";
  id?: string;
  children: ReactNode;
}) {
  const Title = heading;
  return (
    <article id={id} className="scroll-mt-28 border border-inkt bg-dagstaat">
      <Zijstreep />
      <div className="px-4 py-5 sm:px-6">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span>Klus</span>
          <span className="text-busoranje" aria-hidden="true">
            /
          </span>
          <span className="text-kitgrijs">{klus}</span>
          {onderdeel ? (
            <>
              <span className="text-busoranje" aria-hidden="true">
                ·
              </span>
              <span>Onderdeel</span>
              <span className="text-busoranje" aria-hidden="true">
                /
              </span>
              <span className="text-kitgrijs">{onderdeel}</span>
            </>
          ) : null}
        </p>
        {title ? <Title className="mt-3 text-3xl sm:text-4xl">{title}</Title> : null}
        <div className="mt-4 max-w-3xl space-y-4 text-[18px] leading-[1.6]">{children}</div>
        <div className="mt-5 flex justify-end">
          <div className="border border-inkt px-2 py-1">
            <span className="font-heading text-sm leading-none">Niels</span>
          </div>
        </div>
      </div>
    </article>
  );
}
