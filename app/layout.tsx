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
  metadataBase: new URL("https://m-roshaan.me"),
  title: {
    default: `${site.name} · AI Safety & Systems Engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Muhammad Roshaan, AI safety and systems engineer in Karachi. Accepted NeurIPS 2026 workshop papers on LLM evaluation, plus concurrency and data systems built to hold under load.",
  icons: { icon: "/favicon.jpeg" },
  openGraph: {
    title: `${site.name} · AI Safety & Systems Engineer`,
    description:
      "AI safety and systems engineering. Published LLM evaluation research and backend systems built to hold under load.",
    url: "https://m-roshaan.me",
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