"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Zijstreep from "@/components/site/Zijstreep";
import { belClass, offerteClass } from "@/components/site/Links";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

export default function Header({
  nav,
  phone,
  phoneHref,
  logo,
}: {
  nav: NavItem[];
  phone: string;
  phoneHref: string;
  logo: string;
}) {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [dienstenPath, setDienstenPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const dienstenOpen = dienstenPath === pathname;

  useEffect(() => {
    if (!open && !dienstenOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        setDienstenPath(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dienstenOpen]);

  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header data-section="header" className="sticky top-0 z-40 bg-papier">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="inline-flex min-h-11 items-center" aria-label="Niels Hoftijzer Schilderwerken, naar home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt="Niels Hoftijzer Schilderwerken"
            width={250}
            height={49}
            className="h-9 w-auto max-w-[210px] sm:h-11 sm:max-w-[250px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDienstenPath(pathname)}
                onMouseLeave={() => setDienstenPath(null)}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-11 items-center border-b-2 px-1 ${
                      active(item.href) || item.children.some((child) => active(child.href))
                        ? "border-busoranje"
                        : "border-transparent"
                    }`}
                    aria-current={active(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center"
                    aria-expanded={dienstenOpen}
                    aria-controls="diensten-menu"
                    aria-label="Diensten openen"
                    onClick={() => setDienstenPath(dienstenOpen ? null : pathname)}
                  >
                    <span aria-hidden="true" className="text-busoranje">
                      ▾
                    </span>
                  </button>
                </div>
                {dienstenOpen ? (
                  <div
                    id="diensten-menu"
                    className="absolute left-0 top-full z-50 min-w-52 border border-inkt bg-papier py-1"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex min-h-11 items-center px-4 hover:bg-dagstaat"
                        aria-current={active(child.href) ? "page" : undefined}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 items-center border-b-2 px-1 ${
                  active(item.href) ? "border-busoranje" : "border-transparent"
                }`}
                aria-current={active(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={phoneHref} data-cta="bellen" className={belClass}>
            Bel {phone}
          </a>
          <Link href="/offerte" data-cta="offerte" className={offerteClass}>
            Offerte
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-inkt lg:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-inkt" />
            <span className="h-0.5 w-full bg-inkt" />
            <span className="h-0.5 w-full bg-busoranje" />
          </span>
        </button>
      </div>
      <Zijstreep draw />
      {open ? (
        <nav id="mobiel-menu" aria-label="Mobiel menu" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-inkt bg-papier lg:hidden">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-inkt/15">
              <Link href={item.href} className="flex min-h-11 items-center px-5 font-heading text-2xl">
                {item.label}
              </Link>
              {item.children ? (
                <div className="pb-2">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="flex min-h-11 items-center px-8">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="flex flex-col gap-2 px-5 py-4">
            <a href={phoneHref} data-cta="bellen" className={belClass}>
              Bel {phone}
            </a>
            <Link href="/offerte" data-cta="offerte" className={offerteClass}>
              Offerte
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
