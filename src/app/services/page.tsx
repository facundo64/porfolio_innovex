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
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios — INNHOVEX",
    description: "Desarrollo web, software a medida y consultoría tecnológica para empresas ambiciosas.",
  },
};

export default function ServicesPage() {
  return <ServicesGallery />;
}
