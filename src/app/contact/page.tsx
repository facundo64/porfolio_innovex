import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacto — INNHOVEX",
  description: "Contactanos para empezar tu próximo proyecto digital.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title={
          <>
            Empecemos a <em className="italic text-[#1E2A47]">construir</em>.
          </>
        }
        subtitle="Contanos sobre tu proyecto. Respondemos en menos de 24 horas."
      />
      <Contact />
      <Footer />
    </>
  );
}
