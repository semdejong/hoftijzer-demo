import type { Metadata, Viewport } from "next";
import { Anybody, Bricolage_Grotesque, Fragment_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Shell from "@/components/site/Shell";

const anybody = Anybody({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anybody",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s · ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: {
    icon: [
      { url: "/img/logo/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/img/logo/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/img/logo/apple-touch.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { themeColor: content.colors.papier };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--inkt": c.inkt,
  "--buspaars": c.buspaars,
  "--buspaars-text": c.buspaarsText,
  "--busoranje": c.busoranje,
  "--busoranje-text": c.busoranjeText,
  "--busgroen": c.busgroen,
  "--busgroen-text": c.busgroenText,
  "--bel": c.bel,
  "--papier": c.papier,
  "--dagstaat": c.dagstaat,
  "--wit": c.wit,
  "--kitgrijs": c.kitgrijs,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${anybody.variable} ${bricolage.variable} ${fragment.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Shell>{children}</Shell>
        <SleadsBadge />
      </body>
    </html>
  );
}
