import Hero from "@/components/Hero";
import HeroIntro from "@/components/HeroIntro";
import ProjectShowcase from "@/components/ProjectShowcase";
import StudioCta from "@/components/StudioCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <ProjectShowcase />
      <StudioCta />
      <Footer />
    </>
  );
}
