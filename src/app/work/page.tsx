import WorkGallery from "@/components/WorkGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabajos",
  description: "Casos reales de INNHOVEX: marca, sitios y sistemas para empresas de Buenos Aires, Neuquén y Tierra del Fuego.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Trabajos | INNHOVEX",
    description: "Casos reales de INNHOVEX: marca, sitios y sistemas para empresas de Buenos Aires, Neuquén y Tierra del Fuego.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabajos | INNHOVEX",
    description: "Casos reales de INNHOVEX: marca, sitios y sistemas para empresas de Buenos Aires, Neuquén y Tierra del Fuego.",
  },
};

export default function WorkPage() {
  return <WorkGallery />;
}
