import type { ReactNode } from "react";
import Link from "next/link";
import { content } from "@/content";

export const belClass =
  "inline-flex min-h-11 items-center justify-center bg-bel px-4 font-heading text-base tracking-tight text-white hover:opacity-90";

export const offerteClass =
  "inline-flex min-h-11 items-center justify-center bg-buspaars px-4 font-heading text-base tracking-tight text-white hover:opacity-90";

export function PhoneLink({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={content.contact.phoneHref} data-cta="bellen" className={className}>
      {children ?? content.contact.phone}
    </a>
  );
}

export function MailLink({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={content.contact.emailHref} data-cta="mail" className={className}>
      {children ?? content.contact.email}
    </a>
  );
}

export function OfferteLink({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link href="/offerte" data-cta="offerte" className={className}>
      {children ?? "Offerte"}
    </Link>
  );
}

export function CtaPair({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <PhoneLink className={belClass}>{content.hero.primaryCta.label}</PhoneLink>
      <OfferteLink className={offerteClass}>{content.hero.secondaryCta.label}</OfferteLink>
    </div>
  );
}
