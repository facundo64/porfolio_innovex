import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INNHOVEX — Desarrollo Web & Software",
  description:
    "Portfolio de Facundo, desarrollador web y de software. Proyectos reales, tecnología moderna y soluciones a medida bajo la marca INNHOVEX.",
  keywords: ["desarrollador web", "software", "INNHOVEX", "portfolio", "TypeScript", "Next.js"],
  authors: [{ name: "Facundo — INNHOVEX" }],
  robots: "index, follow",
  openGraph: {
    title: "INNHOVEX — Desarrollo Web & Software",
    description: "Portfolio de Facundo, desarrollador web y de software.",
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
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f0f0f0] antialiased">
        {children}
      </body>
    </html>
  );
}
