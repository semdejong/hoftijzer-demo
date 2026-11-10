/** Platte zijaanzicht van een bestelbus. Geen mascotte. */
export default function VanMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 48" className={className} aria-hidden="true">
      <path fill="#1A1528" d="M6 34V20h22l10-10h62v10h22v14H6z" />
      <path fill="#F4F1EA" d="M40 12h28v8H34l6-8z" />
      <path fill="#F4F1EA" d="M74 13h22v7H74z" />
      <path fill="#4D3694" d="M8 23h112v2.2H8z" />
      <path fill="#F27228" d="M8 25.2h112v2.2H8z" />
      <path fill="#44B859" d="M8 27.4h112v2.2H8z" />
      <circle cx="34" cy="36" r="6" fill="#1A1528" />
      <circle cx="100" cy="36" r="6" fill="#1A1528" />
      <circle cx="34" cy="36" r="2" fill="#F4F1EA" />
      <circle cx="100" cy="36" r="2" fill="#F4F1EA" />
    </svg>
  );
}
