/**
 * ÉÉN bestand om aan te passen per demo.
 * Gegevens geverifieerd op nhschilderwerken.nl (10 nov 2026).
 * Publieke typos uit de bron zijn hier gecorrigeerd.
 */
export const content = {
  slug: "hoftijzer-demo",

  company: {
    name: "Niels Hoftijzer Schilderwerken",
    owner: "Niels Hoftijzer",
    tagline: "Schildersbedrijf Niels Hoftijzer uit Borculo",
    description:
      "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Voor kleinschalig onderhoud of juist een volledige metamorfose — schilderwerk binnen en buiten, behangen en glaszetten.",
    logo: "/img/logo/niels-hoftijzer-logo.jpg",
    logoSmall: "/img/logo/niels-hoftijzer-logo-250px.jpg",
    city: "Borculo",
    founded: "2010",
  },

  colors: {
    primary: "#4D3694",
    primaryForeground: "#ffffff",
    accent: "#F27228",
    background: "#F4F1EA",
    foreground: "#1A1528",
    muted: "#F8F5EE",
    inkt: "#1A1528",
    buspaars: "#4D3694",
    buspaarsText: "#3A2670",
    busoranje: "#F27228",
    busoranjeText: "#B44512",
    busgroen: "#44B859",
    busgroenText: "#1E7A32",
    bel: "#1E7A32",
    papier: "#F4F1EA",
    dagstaat: "#F8F5EE",
    wit: "#FFFFFF",
    kitgrijs: "#5C5866",
  },

  seo: {
    title: "Niels Hoftijzer Schilderwerken | Schildersbedrijf in Borculo",
    description:
      "Schildersbedrijf Niels Hoftijzer uit Borculo: eenmanszaak sinds 2010, gespecialiseerd in schilderen, behangen en glaszetten, met persoonlijk advies.",
    lang: "nl",
  },

  nav: [
    {
      label: "Diensten",
      href: "/diensten",
      children: [
        { label: "Schilderwerk", href: "/schilderwerk" },
        { label: "Behangen", href: "/behangen" },
        { label: "Glaszetten", href: "/glaszetten" },
      ],
    },
    { label: "Voorbeelden", href: "/voorbeelden" },
    { label: "Over Niels", href: "/over-niels" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Niels schildert in Borculo — eenmanszaak, persoonlijk contact.",
    subtitle:
      "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Met ruim 15 jaar ervaring komt uw woning zowel binnen als buiten weer strak uit de lak.",
    primaryCta: { label: "Bel 06 238 820 27", href: "tel:+31623882027" },
    secondaryCta: { label: "Vrijblijvende offerte", href: "/offerte" },
  },

  facts: ["eenmanszaak", "sinds 2010", "Borculo", "schilder, behang, glas"],

  services: {
    title: "Diensten",
    intro:
      "Voor al uw schilderwerk binnen en/of buiten kunt u bij mij terecht. Niels Hoftijzer Schilderwerken denkt met u mee voor een oplossing die het beste bij u past.",
    items: [
      {
        klus: "Schilderwerken",
        onderdeel: "Binnen en buiten",
        title: "Schilderwerken",
        text: "Voor kleinschalig onderhoud of juist een volledige metamorfose. Kozijnen, ramen, deuren en muren, binnen en buiten. Tijdig onderhoud houdt kozijnen en deuren in goede staat, de kosten laag en de waarde van uw woning op peil.",
        href: "/schilderwerk",
        link: "Naar schilderwerk",
      },
      {
        klus: "Behangen",
        onderdeel: "Wanden en plafonds",
        title: "Behangen",
        text: "Wanden en plafonds, van basis tot exclusief behang, fotobehang, muurverf en glasweefsel, van glad tot gestructureerd. Het is mogelijk om uw eigen foto af te laten drukken op hoogwaardig behang.",
        href: "/behangen",
        link: "Naar behangen",
      },
      {
        klus: "Glaszetten",
        onderdeel: "Beglazing",
        title: "Glaszetten",
        text: "Gespecialiseerd in het zetten van glas, met advies over soorten en mogelijkheden. Vrijwel ieder soort glas is leverbaar en voldoet aan de geldende NEN-normen en/of de NPR richtlijnen.",
        href: "/glaszetten",
        link: "Naar glaszetten",
      },
      {
        klus: "Kleuradvies",
        onderdeel: "Renovatie",
        title: "Kleuradvies, renovatie, deuren en kozijnen",
        text: "Ik geef graag kleur- en materiaaladvies op basis van uw smaak en wensen. Renovatie, deuren en kozijnen horen bij het werk. Voor timmerwerken en stucwerk maak ik gebruik van vakkundige bedrijven.",
        href: "/schilderwerk#kleuradvies",
        link: "Naar kleuradvies",
      },
    ],
  },

  reasons: [
    "Wanneer u uw schilderwerk door Niels Hoftijzer Schilderwerken laat uitvoeren, kiest u voor kwaliteit. Door te kiezen voor kwaliteit bespaart u op termijn in het onderhoud van uw schilderwerk.",
    "Doordat er geen bedrijfspand betaald moet worden, kan Niels een eerlijke prijs-kwaliteit bieden.",
    "Het persoonlijke contact maakt dat het mogelijk is om flexibel te zijn en tot een fantastisch eindresultaat te komen.",
    "Als bedrijf sta ik voor vakmanschap en betrouwbaarheid.",
    "Niels Hoftijzer Schilderwerken denkt met u mee voor een oplossing die het beste bij u past.",
    "Mijn visie op goede planning is dat er naast een strakke inplanning van het werk altijd ruimte moet zijn voor onverhoopte extra of noodwerkzaamheden. Het belang van de klant staat immers altijd voorop.",
  ],

  about: {
    title: "Over Niels",
    text: [
      "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Als bedrijf sta ik voor vakmanschap en betrouwbaarheid. Voor al uw schilderwerk binnen en/of buiten kunt u bij mij terecht.",
      "Goed schilderwerk en goed onderhoud is van essentieel belang voor de duurzaamheid van een pand. Niels Hoftijzer is een gedegen professional die vakwerk levert waardoor de kwaliteit van het schilderwerk op een hoog niveau staat, en blijft staan.",
      "Doordat er geen bedrijfspand betaald moet worden, kan Niels een eerlijke prijs-kwaliteit bieden. Het persoonlijke contact maakt dat het mogelijk is om flexibel te zijn en tot een fantastisch eindresultaat te komen. Daarnaast maak ik gebruik van vakkundige bedrijven voor timmerwerken en stucwerk.",
      "Op deze website kunt u onder meer informatie vinden over mijn diensten en contactgegevens, tevens kunt u ook een vrijblijvende offerte aanvragen voor een bepaalde klus.",
    ],
  },

  faq: [
    {
      q: "Ook behangen en glaszetten?",
      a: "Ja. Naast schilderwerk binnen en buiten werkt Niels aan wanden en plafonds: van basis tot exclusief behang, fotobehang, muurverf en glasweefsel, van glad tot gestructureerd. Niels Hoftijzer Schilderwerken is ook gespecialiseerd in het zetten van glas en geeft advies over soorten en mogelijkheden.",
    },
    {
      q: "Wanneer geldt 9% btw?",
      a: "Volgens Niels Hoftijzer Schilderwerken betaalt u op particuliere woningen ouder dan 2 jaar 9% btw in plaats van 21% over het schilderwerk. Het lage tarief noemt hij onder andere voor het voorbereiden (schoonmaken en ontvetten), voorstrijkmiddelen en grondverf, binnen- en buitenschilderwerk, de arbeidsuren en de materialen. Dit is zijn informatie over het tarief, geen actie.",
    },
    {
      q: "Ook kleuradvies?",
      a: "Ja. Ik geef graag kleur- en materiaaladvies op basis van uw smaak en wensen. Kleuradvies staat ook bij de diensten, naast renovatie en deuren en kozijnen.",
    },
    {
      q: "Werkt Niels alleen?",
      a: "Niels Hoftijzer Schilderwerken is een eenmanszaak opgericht in 2010. Daarnaast maak ik gebruik van vakkundige bedrijven voor timmerwerken en stucwerk. Timmerwerk en stucwerk voert hij niet zelf uit.",
    },
  ],

  btw: {
    title: "9% btw op particuliere woningen ouder dan 2 jaar",
    lead: "Volgens Niels Hoftijzer Schilderwerken betaalt u op particuliere woningen ouder dan 2 jaar 9% btw in plaats van 21% over het schilderwerk. Dit is zijn informatie over het tarief, geen actie.",
    items: [
      "het voorbereiden van het schilderwerk, zoals het schoonmaken en ontvetten van de ondergrond",
      "de voorbereiding, zoals het aanbrengen van voorstrijkmiddelen en grondverf",
      "binnen- en buitenschilderwerk",
      "de arbeidsuren en de materialen",
    ],
  },

  glassTypes: [
    "Enkel glas",
    "Brandwerend beglazing",
    "Isolerende beglazing",
    "Veiligheidsglas (gelaagd of gehard)",
    "Geslepen glas",
    "Monumentenglas",
  ],

  offerteDiensten: [
    "Schilderwerk binnen",
    "Schilderwerk buiten",
    "Behangen",
    "Glasweefsel",
    "Glaszetten",
    "Kleuradvies",
    "Renovatie",
    "Deuren of kozijnen",
    "Anders",
  ],

  contact: {
    title: "Neem contact op",
    text: "Heeft u hulp of advies nodig bij schilderwerken, glaszetten of behangen? Vul het contactformulier in en wij nemen zo snel mogelijk contact met u op. U kunt ook bellen naar 06 238 820 27 of een e-mail sturen naar info@nhschilderwerken.nl.",
    phone: "06 238 820 27",
    phoneHref: "tel:+31623882027",
    email: "info@nhschilderwerken.nl",
    emailHref: "mailto:info@nhschilderwerken.nl",
    street: "Keizer Ottostraat 38",
    postal: "7271 VP Borculo",
    address: "Keizer Ottostraat 38, 7271 VP Borculo",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Keizer%20Ottostraat%2038%2C%207271%20VP%20Borculo",
    cta: { label: "Bel 06 238 820 27", href: "tel:+31623882027" },
  },

  footer: {
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/Niels-Hoftijzer-Schilderwerken-326039510870797/",
      },
    ],
  },
};

export type JobGroup = "buiten" | "binnen" | "behang" | "niels";

export type JobPhoto = {
  id: string;
  src: string;
  alt: string;
  klus: string;
  onderdeel: string;
  caption: string;
  group: JobGroup;
};

export const jobs: JobPhoto[] = [
  {
    id: "portret",
    src: "/img/werk/nh-schilderwerken-foto1-1.jpg",
    alt: "Niels Hoftijzer met kwast, witte polo met paarse naamband",
    klus: "Niels",
    onderdeel: "Portret",
    caption: "Niels Hoftijzer, met kwast en een witte polo met paarse naamband.",
    group: "niels",
  },
  {
    id: "niels-deur",
    src: "/img/werk/nh-schilderwerken-niels-1.jpg",
    alt: "Niels schildert een deur",
    klus: "Niels aan het werk",
    onderdeel: "Deur",
    caption: "Niels schildert een deur.",
    group: "niels",
  },
  {
    id: "bus-oprit",
    src: "/img/werk/nh-schilderwerken-foto2-1.jpg",
    alt: "Rode steiger, spandoek Niels Hoftijzer en de witte werkbus op de oprit",
    klus: "Buitenschilderwerk",
    onderdeel: "Werkbus",
    caption:
      "Rode steiger, een spandoek met Niels Hoftijzer, en de witte werkbus met paarse belettering op de oprit.",
    group: "buiten",
  },
  {
    id: "bus-woning",
    src: "/img/werk/nh-schilderwerken-foto3-1.jpg",
    alt: "Witte werkbus met paarse belettering voor een bakstenen woning met steiger",
    klus: "Buitenschilderwerk",
    onderdeel: "Werkbus",
    caption:
      "Bakstenen woning met steiger. De witte werkbus met paarse belettering staat ervoor.",
    group: "buiten",
  },
  {
    id: "berkelstreek",
    src: "/img/werk/nh-schilderwerken-foto4-1.jpg",
    alt: "Rieten portiek met geveltekst DE BERKELSTREEK en een werkplatform",
    klus: "Buitenschilderwerk",
    onderdeel: "DE BERKELSTREEK",
    caption: "Rieten portiek met de geveltekst DE BERKELSTREEK en een werkplatform.",
    group: "buiten",
  },
  {
    id: "steiger-dakkapellen",
    src: "/img/werk/nh-schilderwerken-buiten-1.jpg",
    alt: "Steiger voor een woning met dakkapellen en een doek Niels Hoftijzer",
    klus: "Buitenschilderwerk",
    onderdeel: "Steiger",
    caption:
      "Steiger voor een woning met dakkapellen. Op de steiger een doek met Niels Hoftijzer.",
    group: "buiten",
  },
  {
    id: "steiger-gevel",
    src: "/img/werk/nh-schilderwerken-buiten-schilderwerken-1.jpg",
    alt: "Steiger voor een gevel met dakkapel, voordeur en kozijnen",
    klus: "Buitenschilderwerk",
    onderdeel: "Dakkapel",
    caption: "Steiger voor een gevel met dakkapel, voordeur en kozijnen.",
    group: "buiten",
  },
  {
    id: "deuren",
    src: "/img/werk/nh-schilderwerken-binnen-schilderwerken-1.jpg",
    alt: "Witte binnendeuren, waaronder een stel deuren met glas",
    klus: "Binnenschilderwerk",
    onderdeel: "Deuren",
    caption: "Witte binnendeuren: een opdekdeur en een stel deuren met glas.",
    group: "binnen",
  },
  {
    id: "kozijn",
    src: "/img/werk/nh-schilderwerken-kozijnen-schilderwerken-1.jpg",
    alt: "Geschilderd kozijndetail in wit en crème langs de dakpannen",
    klus: "Kozijnen",
    onderdeel: "Detail",
    caption: "Geschilderd kozijndetail in wit en crème, langs de dakpannen.",
    group: "binnen",
  },
  {
    id: "trap",
    src: "/img/werk/nh-schilderwerken-trap-schilderen-1.jpg",
    alt: "Houten trap met donkere treden en wit geschilderde wangen",
    klus: "Binnenschilderwerk",
    onderdeel: "Trap",
    caption: "Houten trap met donkere treden en wit geschilderde wangen.",
    group: "binnen",
  },
  {
    id: "nijntje",
    src: "/img/werk/nh-schilderwerken-nijntje-1.jpg",
    alt: "Nijntje-behang: wit konijn met oranje shirt en een gele beer",
    klus: "Behangwerk",
    onderdeel: "Nijntje-behang",
    caption: "Nijntje-behang.",
    group: "behang",
  },
  {
    id: "wand",
    src: "/img/werk/nh-schilderwerken-behangen-1.jpg",
    alt: "Binnenwand in een blauwgroene tint tussen twee witte deuren",
    klus: "Binnen",
    onderdeel: "Wand",
    caption: "Binnenwand in een blauwgroene tint, tussen twee witte deuren.",
    group: "behang",
  },
];

export const jobGroups: { id: JobGroup; title: string }[] = [
  { id: "buiten", title: "Buiten en bus" },
  { id: "binnen", title: "Binnen" },
  { id: "behang", title: "Behang" },
  { id: "niels", title: "Niels aan het werk" },
];

export const homeJobIds = [
  "bus-oprit",
  "bus-woning",
  "berkelstreek",
  "trap",
  "nijntje",
  "kozijn",
  "niels-deur",
  "deuren",
];

export function jobById(id: string): JobPhoto {
  const job = jobs.find((item) => item.id === id);
  if (!job) throw new Error(`Onbekende foto: ${id}`);
  return job;
}

export type Content = typeof content;
