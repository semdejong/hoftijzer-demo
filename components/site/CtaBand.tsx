import { CtaPair } from "@/components/site/Links";
import Zijstreep from "@/components/site/Zijstreep";

export default function CtaBand({
  text = "Advies of hulp nodig? Neem contact op met Niels Hoftijzer Schilderwerken.",
}: {
  text?: string;
}) {
  return (
    <section data-section="cta" className="on-inkt mt-16 bg-inkt text-papier">
      <Zijstreep />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-xl text-3xl text-papier sm:text-4xl">{text}</h2>
        <CtaPair />
      </div>
    </section>
  );
}
