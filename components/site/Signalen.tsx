import { content } from "@/content";
import Zijstreep from "@/components/site/Zijstreep";

export default function Signalen() {
  const { signalen } = content;
  return (
    <section data-section="onderhoud" className="mx-auto w-full max-w-6xl px-5">
      <div className="border border-inkt bg-dagstaat">
        <Zijstreep />
        <div className="px-4 py-5 sm:px-6">
          <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]">
            Klus <span className="text-busoranje">/</span> <span className="text-kitgrijs">Onderhoud</span>
            <span className="mx-3 text-busoranje">·</span>
            Onderdeel <span className="text-busoranje">/</span> <span className="text-kitgrijs">Zichtbaar</span>
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">Wanneer een onderhoudsbeurt aan te raden is</h2>
          <p className="mt-4 max-w-3xl">{signalen.lead}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {signalen.items.map((item) => (
              <li key={item} className="border border-inkt bg-wit px-3 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">Zichtbaar</p>
                <p className="mt-2 font-heading text-2xl leading-tight">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl">{signalen.slot}</p>
        </div>
      </div>
    </section>
  );
}
