export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-inkt/20">
      {items.map((item) => (
        <details key={item.q} className="border-b border-inkt/20">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-4 font-heading text-xl sm:text-2xl">
            {item.q}
            <span aria-hidden="true" className="faq-plus font-mono text-busoranje">
              +
            </span>
            <span aria-hidden="true" className="faq-minus font-mono text-busoranje">
              −
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-[18px] leading-[1.6]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
