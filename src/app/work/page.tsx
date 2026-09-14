import WorkGallery from "@/components/WorkGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Proyectos INNHOVEX",
  description: "Casos de éxito y proyectos desarrollados por INNHOVEX. Portfolio de desarrollo web, software a medida y aplicaciones digitales.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work — Proyectos INNHOVEX",
    description: "Descubre nuestros casos de éxito en desarrollo web y software a medida.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Proyectos INNHOVEX",
    description: "Descubre nuestros casos de éxito en desarrollo web y software a medida.",
  },
};

export default function WorkPage() {
  return <WorkGallery />;
}
