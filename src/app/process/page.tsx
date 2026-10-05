import ProcessGallery from "@/components/ProcessGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso",
  description: "Cómo trabajamos: descubrimiento, diseño, desarrollo y entrega, con tiempos y costos claros desde el principio.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Proceso | INNHOVEX",
    description: "Cómo trabajamos: descubrimiento, diseño, desarrollo y entrega, con tiempos y costos claros desde el principio.",
    url: "/process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proceso | INNHOVEX",
    description: "Cómo trabajamos: descubrimiento, diseño, desarrollo y entrega, con tiempos y costos claros desde el principio.",
  },
};

export default function ProcessPage() {
  return <ProcessGallery />;
}
