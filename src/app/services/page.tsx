import ServicesGallery from "@/components/ServicesGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Diseño y web, software a medida, gestión digital e integraciones con IA para empresas de todo el país.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Servicios | INNHOVEX",
    description: "Diseño y web, software a medida, gestión digital e integraciones con IA para empresas de todo el país.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | INNHOVEX",
    description: "Diseño y web, software a medida, gestión digital e integraciones con IA para empresas de todo el país.",
  },
};

export default function ServicesPage() {
  return <ServicesGallery />;
}
