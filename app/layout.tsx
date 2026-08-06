import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mroshaan.vercel.app"),
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
    url: "https://mroshaan.vercel.app",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}