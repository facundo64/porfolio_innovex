import ContactGallery from "@/components/ContactGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contanos qué necesitás. Respondemos en menos de 24 horas por mail o WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contacto | INNHOVEX",
    description: "Contanos qué necesitás. Respondemos en menos de 24 horas por mail o WhatsApp.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | INNHOVEX",
    description: "Contanos qué necesitás. Respondemos en menos de 24 horas por mail o WhatsApp.",
  },
};

export default function ContactPage() {
  return <ContactGallery />;
}
