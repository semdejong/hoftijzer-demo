/**
 * ÉÉN bestand om aan te passen per demo.
 * Gegevens geverifieerd op nhschilderwerken.nl (10 nov 2026).
 */
export const content = {
  // Slug = Vercel-project- en GitHub-reponaam (eindigt op "-demo").
  // Ook de "data-demo" voor de Sleads demo-analytics tracker.
  slug: "hoftijzer-demo",

  company: {
    name: "Niels Hoftijzer Schilderwerken",
    tagline: "Schildersbedrijf Niels Hoftijzer uit Borculo",
    description:
      "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Voor kleinschalig onderhoud of juist een volledige metamorfose — schilderwerk binnen en buiten, behangen en glaszetten.",
    logo: "/img/logo/niels-hoftijzer-logo.jpg",
    city: "Borculo",
  },

  colors: {
    primary: "#4D3694",
    primaryForeground: "#ffffff",
    accent: "#F27228",
    background: "#F4F1EA",
    foreground: "#1A1528",
    muted: "#F8F5EE",
  },

  seo: {
    title: "Niels Hoftijzer Schilderwerken | Schildersbedrijf in Borculo",
    description:
      "Schildersbedrijf Niels Hoftijzer uit Borculo: eenmanszaak sinds 2010, gespecialiseerd in schilderen, behangen en glaszetten, met persoonlijk advies.",
    lang: "nl",
  },

  nav: [
    { label: "Diensten", href: "/diensten" },
    { label: "Voorbeelden", href: "/voorbeelden" },
    { label: "Over Niels", href: "/over-niels" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Niels schildert in Borculo — eenmanszaak, persoonlijk contact.",
    subtitle:
      "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Met ruim 15 jaar ervaring komt uw woning zowel binnen als buiten weer strak uit de lak.",
    primaryCta: { label: "Bel 06 238 820 27", href: "tel:+31623882027" },
    secondaryCta: { label: "Offerte aanvragen", href: "/offerte" },
    image: "/img/werk/nh-schilderwerken-foto1-1.jpg",
    highlights: ["Eenmanszaak sinds 2010", "Borculo", "Schilder, behang en glas"],
  },

  services: {
    title: "Onze diensten",
    intro: "Schilderen, behangen, glaszetten, kleuradvies en renovatie — Niels denkt met u mee voor een oplossing die het beste bij u past.",
    items: [
      { icon: "", title: "Schilderwerken", text: "Voor kleinschalig onderhoud of juist een volledige metamorfose. Binnen- en buitenschilderwerk, deuren en kozijnen, kleur- en materiaaladvies." },
      { icon: "", title: "Behangen", text: "Wanden en plafonds, van basis tot exclusief behang, fotobehang, muurverf en glasweefsel, van glad tot gestructureerd." },
      { icon: "", title: "Glaszetten", text: "Van enkel glas tot brandwerend en van geslepen glas tot isolerende beglazing. Vrijwel ieder soort glas is leverbaar en voldoet aan de geldende NEN-normen en/of NPR-richtlijnen." },
    ],
  },

  about: {
    title: "Over Niels",
    text: [
      "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Als bedrijf sta ik voor vakmanschap en betrouwbaarheid. Voor al uw schilderwerk binnen en/of buiten kunt u bij mij terecht.",
      "Doordat er geen bedrijfspand betaald moet worden, kan Niels een eerlijke prijs-kwaliteit bieden. Het persoonlijke contact maakt dat het mogelijk is om flexibel te zijn en tot een fantastisch eindresultaat te komen. Daarnaast maak ik gebruik van vakkundige bedrijven voor timmerwerken en stucwerk.",
    ],
    image: "/img/werk/nh-schilderwerken-niels-1.jpg",
    stats: [] as { value: string; label: string }[],
  },

  reviews: {
    title: "",
    items: [] as { name: string; text: string; rating: number }[],
  },

  contact: {
    title: "Neem contact op",
    text: "Heeft u hulp of advies nodig bij schilderwerken, glaszetten of behangen? Bel of mail Niels, of vraag een vrijblijvende offerte aan.",
    phone: "06 238 820 27",
    email: "info@nhschilderwerken.nl",
    address: "Keizer Ottostraat 38, 7271 VP Borculo",
    openingHours: [] as string[],
    whatsapp: "",
    cta: { label: "Bel 06 238 820 27", href: "tel:+31623882027" },
  },

  footer: {
    kvk: "",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/Niels-Hoftijzer-Schilderwerken-326039510870797/" },
    ] as { label: string; href: string }[],
  },
};

export type Content = typeof content;
