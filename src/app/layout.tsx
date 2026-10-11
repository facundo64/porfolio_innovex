import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
// CSS obligatorio de Lenis: entre otras cosas fuerza height:auto en <html>/<body>
// (el html lleva h-full). Sin esto la rueda del mouse puede trabarse o
// sentirse antinatural en navegadores menos tolerantes que Chrome.
import "lenis/dist/lenis.css";
import "./lapiz.css";
import BottomDock from "@/components/BottomDock";
import PageTransition, { TransitionProvider } from "@/components/PageTransition";
import TopHeader from "@/components/TopHeader";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import ChatBot from "@/components/ChatBot";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { headers } from "next/headers";
import { kalam } from "@/lib/fonts/expedientes";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/sitio";

// URL base para las metatags absolutas (og:image, canonical, etc.): ver lib/sitio.

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "INNHOVEX — Desarrollo Web & Software a medida",
    template: "%s | INNHOVEX",
  },
  description:
    "Diseñamos webs, desarrollamos software a medida y nos ocupamos de la parte digital de tu empresa. Estudio de Buenos Aires que trabaja con empresas de todo el país.",
  keywords: ["diseño web", "software a medida", "gestión digital", "INNHOVEX", "estudio digital", "Buenos Aires", "Argentina"],
  authors: [{ name: "INNHOVEX", url: siteUrl }],
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
    // La imagen la aporta src/app/opengraph-image.tsx (convención de archivo de Next).
    title: "INNHOVEX — Desarrollo Web & Software a medida",
    description: "Diseñamos webs, desarrollamos software a medida y nos ocupamos de la parte digital de tu empresa. Estudio de Buenos Aires que trabaja con empresas de todo el país.",
    url: "/",
    siteName: "INNHOVEX",
    locale: "es_AR",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  twitter: {
    // La imagen la aporta src/app/twitter-image.tsx.
    card: "summary_large_image",
    title: "INNHOVEX — Desarrollo Web & Software a medida",
    description: "Diseñamos webs, desarrollamos software a medida y nos ocupamos de la parte digital de tu empresa. Estudio de Buenos Aires que trabaja con empresas de todo el país.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${kalam.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Setea el lang attr ANTES del React mount para evitar flash y mantener accesibilidad */}
        <script
          nonce={nonce || undefined}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('innhovex:locale');if(l==='es'||l==='en')document.documentElement.lang=l;}catch(e){}})();`,
          }}
        />
        {/* Schema.org JSON-LD para SEO */}
        <script
          type="application/ld+json"
          nonce={nonce || undefined}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "INNHOVEX",
              "alternateName": "IEX",
              "url": siteUrl,
              "logo": `${siteUrl}/logo-innhovex.svg`,
              "image": `${siteUrl}/opengraph-image`,
              "description": "Estudio digital de Buenos Aires: diseño y web, software a medida, gestión digital e integraciones con IA para empresas de todo el país.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-9-11-7058-8887",
                "contactType": "sales",
                "areaServed": "AR",
                "availableLanguage": ["Spanish", "English"],
                "email": "innhovex@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "foundingDate": "2024",
              "knowsAbout": ["Diseño web", "Identidad de marca", "Software a medida", "Gestión digital", "Integraciones con IA"],
              "serviceType": ["Diseño y web", "Software a medida", "Gestión digital", "Integraciones con IA"]
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
            <Footer />
            <BottomDock />
            <ChatBot />
          </TransitionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
