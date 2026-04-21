import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import BottomDock from "@/components/BottomDock";
import PageTransition, { TransitionProvider } from "@/components/PageTransition";
import TopHeader from "@/components/TopHeader";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import ConditionalDockSpacer from "@/components/ConditionalDockSpacer";

const geistSans = Geist({
  variable: "--font-sans-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "INNHOVEX — Desarrollo Web & Software a medida",
  description:
    "Estudio de desarrollo web y software. Creamos experiencias digitales premium para marcas que quieren destacarse.",
  keywords: ["desarrollo web", "software", "INNHOVEX", "agencia", "TypeScript", "Next.js"],
  authors: [{ name: "INNHOVEX" }],
  robots: "index, follow",
  openGraph: {
    title: "INNHOVEX — Desarrollo Web & Software",
    description: "Estudio de desarrollo web y software a medida.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF7] text-[#0A0A0A] antialiased overflow-x-hidden">
        <TransitionProvider>
          <Preloader />
          <SmoothScroll />
          <TopHeader />
          <PageTransition>{children}</PageTransition>
          <ConditionalDockSpacer />
          <BottomDock />
        </TransitionProvider>
      </body>
    </html>
  );
}
