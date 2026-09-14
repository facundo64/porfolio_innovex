import ProcessGallery from "@/components/ProcessGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso — Cómo Trabajamos en INNHOVEX",
  description: "Descubrí nuestro proceso de trabajo — del descubrimiento al deploy. Metodología ágil para desarrollo web y software.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Proceso — Cómo Trabajamos en INNHOVEX",
    description: "Del wireframe al deploy: nuestro proceso de desarrollo web y software.",
    url: "/process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proceso — Cómo Trabajamos en INNHOVEX",
    description: "Del wireframe al deploy: nuestro proceso de desarrollo web y software.",
  },
};

export default function ProcessPage() {
  return <ProcessGallery />;
}
