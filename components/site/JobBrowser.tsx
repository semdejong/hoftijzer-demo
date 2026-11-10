"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { JobPhoto } from "@/content";
import Dagstaat from "@/components/site/Dagstaat";

export default function JobBrowser({
  jobs,
  variant,
  groups,
}: {
  jobs: JobPhoto[];
  variant: "strip" | "grid";
  groups?: { id: JobPhoto["group"]; title: string }[];
}) {
  const ordered = groups
    ? groups.flatMap((group) => jobs.filter((job) => job.group === group.id))
    : jobs;
  const [current, setCurrent] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opened = useRef(false);
  const titleId = useId();
  const job = current === null ? null : ordered[current];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (current !== null) {
      if (!dialog.open) dialog.showModal();
      if (!opened.current) closeRef.current?.focus();
      opened.current = true;
    } else if (dialog.open) {
      dialog.close();
      opened.current = false;
    }
  }, [current]);

  useEffect(() => {
    if (current === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setCurrent((index) => (index === null ? index : (index + 1) % ordered.length));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setCurrent((index) => (index === null ? index : (index - 1 + ordered.length) % ordered.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, ordered.length]);

  const frameClass =
    variant === "strip"
      ? "w-[min(86vw,34rem)] shrink-0 snap-start lg:w-full"
      : "w-full";

  const listClass =
    variant === "strip"
      ? "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 py-2 pb-4 lg:grid lg:grid-cols-2 lg:overflow-visible"
      : "grid gap-6 sm:grid-cols-2";

  function openId(id: string) {
    const index = ordered.findIndex((item) => item.id === id);
    if (index >= 0) setCurrent(index);
  }

  const cards = (list: JobPhoto[]) => (
    <div className={listClass}>
      {list.map((item) => (
        <Dagstaat key={item.id} job={item} onOpen={openId} className={frameClass} />
      ))}
    </div>
  );

  return (
    <>
      {groups ? (
        <div className="flex flex-col gap-12 px-5">
          {groups.map((group) => {
            const list = ordered.filter((item) => item.group === group.id);
            if (!list.length) return null;
            return (
              <section key={group.id} data-section={group.id}>
                <h2 className="text-3xl sm:text-4xl">{group.title}</h2>
                <div className="mt-5">{cards(list)}</div>
              </section>
            );
          })}
        </div>
      ) : (
        cards(ordered)
      )}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={() => setCurrent(null)}
        onClick={(event) => {
          const dialog = dialogRef.current;
          if (!dialog) return;
          const rect = dialog.getBoundingClientRect();
          const inside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
          if (!inside) setCurrent(null);
        }}
      >
        {job ? (
          <div className="dagstaat">
            <div className="flex items-start justify-between gap-3 border-b border-inkt/20 px-4 py-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">
                  Blad {current === null ? 0 : current + 1}/{ordered.length}
                </p>
                <h2 id={titleId} className="mt-1 font-heading text-2xl">
                  {job.klus}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex min-h-11 items-center border border-inkt px-3 font-heading text-base"
                onClick={() => setCurrent(null)}
              >
                Sluiten
              </button>
            </div>
            <div className="flex justify-center px-4 py-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={job.src} alt={job.alt} width={500} height={400} className="job-photo" />
            </div>
            <p className="px-4 text-[17px] leading-snug">{job.caption}</p>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-inkt/15 px-4 py-3">
              <button
                type="button"
                className="inline-flex min-h-11 items-center border border-inkt px-3 font-heading text-base"
                onClick={() =>
                  setCurrent((index) =>
                    index === null ? index : (index - 1 + ordered.length) % ordered.length,
                  )
                }
              >
                Vorige
              </button>
              <div className="border border-inkt px-2 py-1">
                <span className="font-heading text-sm leading-none">Niels</span>
              </div>
              <button
                type="button"
                className="inline-flex min-h-11 items-center border border-inkt px-3 font-heading text-base"
                onClick={() =>
                  setCurrent((index) => (index === null ? index : (index + 1) % ordered.length))
                }
              >
                Volgende
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
