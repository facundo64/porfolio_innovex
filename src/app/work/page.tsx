import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work — INNHOVEX",
  description: "Casos de éxito y proyectos desarrollados por INNHOVEX.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestro trabajo"
        title={
          <>
            Proyectos que
            <br />
            <em className="italic text-[#1E2A47]">importan</em>.
          </>
        }
        subtitle="Una selección curada de proyectos recientes — web, producto y software a medida."
      />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </>
  );
}
