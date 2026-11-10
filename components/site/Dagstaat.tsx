import type { JobPhoto } from "@/content";

/* Foto's blijven op hun eigen bestand, nooit breder dan 500 px. */
/* eslint-disable @next/next/no-img-element */

function SheetBody({ job }: { job: JobPhoto }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-inkt/20 px-4 py-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-inkt">Klus</span>
          <span className="mx-2 text-busoranje" aria-hidden="true">
            /
          </span>
          <span className="text-kitgrijs">{job.klus}</span>
        </p>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-inkt/15 px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-inkt">Onderdeel</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">{job.onderdeel}</span>
      </div>
      <div className="flex justify-center px-5 py-6 sm:px-8">
        <img
          src={job.src}
          alt={job.alt}
          width={500}
          height={400}
          className="job-photo"
        />
      </div>
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-inkt/15 px-4 py-3">
        <p className="max-w-[36ch] text-[16px] leading-snug text-inkt sm:text-[17px]">{job.caption}</p>
        <div className="shrink-0 border border-inkt px-2 py-1">
          <span className="font-heading text-sm leading-none">Niels</span>
        </div>
      </div>
    </>
  );
}

export default function Dagstaat({
  job,
  className = "",
  onOpen,
}: {
  job: JobPhoto;
  className?: string;
  onOpen?: (id: string) => void;
}) {
  const frame = `dagstaat flex h-full flex-col border border-inkt text-left text-inkt ${className}`;
  if (onOpen) {
    return (
      <button type="button" onClick={() => onOpen(job.id)} className={`${frame} cursor-pointer`}>
        <SheetBody job={job} />
      </button>
    );
  }
  return (
    <article className={frame}>
      <SheetBody job={job} />
    </article>
  );
}
