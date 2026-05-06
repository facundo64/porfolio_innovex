import ContactGallery from "@/components/ContactGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — INNHOVEX",
  description: "Contactanos para empezar tu próximo proyecto digital. Estudio de desarrollo web y software en Buenos Aires, Argentina.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contacto — INNHOVEX",
    description: "Hablemos sobre tu próximo proyecto. Estamos listos para crear algo increíble juntos.",
    url: "/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto INNHOVEX — Estudio de desarrollo web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto — INNHOVEX",
    description: "Hablemos sobre tu próximo proyecto. Estamos listos para crear algo increíble juntos.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactGallery />;
}
