import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roshaanportfolio.vercel.app"),
  title: {
    default: `${site.name} — Backend & Data Engineer`,
    template: `%s — ${site.name}`,
  },
  description:
    "Muhammad Roshaan — Backend & Data Engineer and final-year CS student. Systems design in distributed systems, ETL, and real-time ML inference.",
  icons: { icon: "/favicon.jpeg" },
  openGraph: {
    title: `${site.name} — Backend & Data Engineer`,
    description:
      "Backend & Data Engineer, final-year CS student. Proved by building systems, not slides.",
    url: "https://roshaanportfolio.vercel.app",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}