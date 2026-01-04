import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Hero />

      <main className="flex-grow">
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
}
