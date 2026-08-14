import type { Metadata } from "next";
import { Figtree, Roboto_Flex, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
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
    default: `${site.name} · Backend & Data Engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Muhammad Roshaan — Backend & Data Engineer and final-year CS student. Systems design in distributed systems, ETL, and real-time ML inference.",
  icons: { icon: "/favicon.jpeg" },
  openGraph: {
    title: `${site.name} · Backend & Data Engineer`,
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
      className={`${figtree.variable} ${robotoFlex.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark';if(d)document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}