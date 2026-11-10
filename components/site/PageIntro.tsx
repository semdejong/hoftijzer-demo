import VanMark from "@/components/site/VanMark";

export default function PageIntro({
  title,
  lede,
}: {
  title: string;
  lede: string;
}) {
  return (
    <header data-section="pagina" className="mx-auto w-full max-w-6xl px-5 pb-6 pt-10 sm:pt-14">
      <div className="flex items-center gap-3">
        <VanMark className="h-7 w-auto" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-kitgrijs">Borculo</p>
      </div>
      <h1 className="mt-4 max-w-4xl text-4xl text-balance sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-kitgrijs">{lede}</p>
    </header>
  );
}
