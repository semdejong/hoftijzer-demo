"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

export default function OfferteForm({
  email,
  phone,
  phoneHref,
  diensten,
}: {
  email: string;
  phone: string;
  phoneHref: string;
  diensten: string[];
}) {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const gekozen = data.getAll("diensten").map(String);
    const lines = [
      "Offerteaanvraag",
      "",
      `Naam: ${String(data.get("naam") ?? "")}`,
      `Telefoon: ${String(data.get("telefoon") ?? "")}`,
      `E-mail: ${String(data.get("email") ?? "")}`,
      `Adres/plaats: ${String(data.get("adres") || "niet ingevuld")}`,
      `Diensten: ${gekozen.length ? gekozen.join(", ") : "niet ingevuld"}`,
      "",
      "Toelichting:",
      String(data.get("toelichting") || "niet ingevuld"),
    ];
    const href = `mailto:${email}?subject=${encodeURIComponent("Offerteaanvraag Niels Hoftijzer Schilderwerken")}&body=${encodeURIComponent(lines.join("\n"))}`;
    setOpened(true);
    window.location.href = href;
  }

  const field =
    "mt-1 w-full min-h-12 border border-inkt bg-wit px-3 text-[18px] text-inkt";

  return (
    <form onSubmit={onSubmit} className="border border-inkt bg-dagstaat">
      <div className="border-b border-inkt/20 px-4 py-3 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
          <span>Klus</span>
          <span className="mx-2 text-busoranje" aria-hidden="true">
            /
          </span>
          <span className="text-kitgrijs">Offerte</span>
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-kitgrijs">
          Onderdeel · vrijblijvend
        </p>
      </div>

      <div className="grid gap-5 px-4 py-6 sm:px-6">
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Naam *</span>
          <input name="naam" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Telefoon *</span>
          <input name="telefoon" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">E-mail *</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Adres of plaats</span>
          <input name="adres" autoComplete="street-address" className={field} />
        </label>

        <fieldset>
          <legend className="font-mono text-[11px] uppercase tracking-[0.14em]">Diensten</legend>
          <div className="mt-2 grid gap-1 sm:grid-cols-2">
            {diensten.map((dienst) => (
              <label key={dienst} className="flex min-h-11 items-center gap-3">
                <input type="checkbox" name="diensten" value={dienst} className="size-5 accent-buspaars" />
                <span>{dienst}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Toelichting</span>
          <textarea name="toelichting" rows={5} className={`${field} py-3`} />
        </label>

        <label className="flex min-h-11 items-start gap-3">
          <input type="checkbox" name="privacy" required className="mt-1.5 size-5 accent-buspaars" />
          <span>
            Ik heb de <Link href="/privacy" className="text-buspaars-text underline decoration-busoranje underline-offset-4">privacyverklaring</Link> gelezen. *
          </span>
        </label>

        <p className="border border-inkt bg-wit px-4 py-3 text-[17px] leading-snug">
          Dit is een concept; uw mailprogramma opent met het bericht. Er wordt niets automatisch verzonden.
          Liever bellen?{" "}
          <a href={phoneHref} data-cta="bellen" className="text-buspaars-text underline decoration-busoranje underline-offset-4">
            Bel {phone}
          </a>
          .
        </p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <button type="submit" data-cta="offerte" className="inline-flex min-h-11 items-center bg-buspaars px-5 font-heading text-lg tracking-tight text-white">
            Open het bericht in mijn mailprogramma
          </button>
          <div className="border border-inkt px-2 py-1">
            <span className="font-heading text-sm leading-none">Niels</span>
          </div>
        </div>

        <p role="status" className="min-h-6 text-[17px]">
          {opened
            ? "Uw mailprogramma opent met het bericht. Controleer het en verstuur het zelf. Er is vanaf deze website niets verzonden."
            : ""}
        </p>
      </div>
    </form>
  );
}
