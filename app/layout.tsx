import type { Metadata } from "next";
import Script from "next/script";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";

const serif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://m-roshaan.me"),
  title: {
    default: `${site.name} · AI safety and systems engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Muhammad Roshaan evaluates language models and builds backend systems. Accepted NeurIPS 2026 workshop papers on tool-calling reliability and agent security.",
  openGraph: {
    title: `${site.name} · AI safety and systems engineer`,
    description:
      "LLM evaluation research and backend systems built to hold under load.",
    url: "https://m-roshaan.me",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Script src="/theme.js" strategy="beforeInteractive" />
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
