import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import BottomDock from "@/components/BottomDock";
import PageTransition, { TransitionProvider } from "@/components/PageTransition";
import TopHeader from "@/components/TopHeader";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import ConditionalDockSpacer from "@/components/ConditionalDockSpacer";
import ChatBot from "@/components/ChatBot";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { headers } from "next/headers";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://innhovex.com"),
  title: {
    default: "INNHOVEX — Desarrollo Web & Software a medida",
    template: "%s | INNHOVEX",
  },
  description:
    "Estudio de desarrollo web y software. Creamos experiencias digitales premium para marcas que quieren destacarse. Especialistas en Next.js, React y arquitecturas de alto rendimiento.",
  keywords: ["desarrollo web", "software a medida", "INNHOVEX", "agencia digital", "TypeScript", "Next.js", "diseño UX/UI", "Argentina"],
  authors: [{ name: "INNHOVEX", url: "https://innhovex.com" }],
  creator: "INNHOVEX",
  publisher: "INNHOVEX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INNHOVEX — Desarrollo Web & Software a medida",
    description: "Estudio de desarrollo web y software. Creamos experiencias digitales premium para marcas que quieren destacarse.",
    url: "/",
    siteName: "INNHOVEX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INNHOVEX — Estudio de desarrollo web y software",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  twitter: {
    card: "summary_large_image",
    title: "INNHOVEX — Desarrollo Web & Software a medida",
    description: "Creamos experiencias digitales premium para marcas que quieren destacarse.",
    images: ["/og-image.jpg"],
  },
  appleWebApp: {
    title: "INNHOVEX",
    statusBarStyle: "default",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Setea el lang attr ANTES del React mount para evitar flash y mantener accesibilidad */}
        <script
          nonce={nonce || undefined}
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('innhovex:locale');if(l==='es'||l==='en')document.documentElement.lang=l;}catch(e){}})();`,
          }}
        />
        {/* Schema.org JSON-LD para SEO */}
        <script
          type="application/ld+json"
          nonce={nonce || undefined}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "INNHOVEX",
              "alternateName": "IEX",
              "url": "https://innhovex.com",
              "logo": "https://innhovex.com/logo-innhovex.svg",
              "image": "https://innhovex.com/og-image.jpg",
              "description": "Estudio de desarrollo web y software. Creamos experiencias digitales premium para marcas que quieren destacarse.",
              "sameAs": [
                "https://instagram.com/innhovex",
                "https://linkedin.com/company/innhovex",
                "https://github.com/facundo64"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-9-11-7058-8887",
                "contactType": "sales",
                "areaServed": ["AR", "US", "ES", "MX", "CL"],
                "availableLanguage": ["Spanish", "English"],
                "email": "innhovex@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "INNHOVEX Team"
                }
              ],
              "knowsAbout": [
                "Desarrollo Web",
                "Software a Medida",
                "Next.js",
                "React",
                "TypeScript",
                "Diseño UX/UI",
                "Aplicaciones Web",
                "SaaS"
              ],
              "serviceType": [
                "Desarrollo Web",
                "Desarrollo de Software",
                "Consultoría Tecnológica",
                "Diseño UX/UI"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF7] text-[#0A0A0A] antialiased overflow-x-hidden">
        <LocaleProvider>
          <TransitionProvider>
            <Preloader />
            <SmoothScroll />
            <TopHeader />
            <PageTransition>{children}</PageTransition>
            <ConditionalDockSpacer />
            <BottomDock />
            <ChatBot />
          </TransitionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
