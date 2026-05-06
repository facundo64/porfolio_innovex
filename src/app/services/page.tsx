import ServicesGallery from "@/components/ServicesGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — INNHOVEX",
  description: "Desarrollo web premium, software a medida, producto digital y escala. Servicios especializados de INNHOVEX para tu negocio.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Servicios — INNHOVEX",
    description: "Desarrollo web, software a medida y consultoría tecnológica para empresas ambiciosas.",
    url: "/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios INNHOVEX — Desarrollo web y software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios — INNHOVEX",
    description: "Desarrollo web, software a medida y consultoría tecnológica para empresas ambiciosas.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesGallery />;
}
