import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BridalExperience } from "@/components/BridalExperience";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { DestinationWeddings } from "@/components/DestinationWeddings";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-espresso selection:bg-blush selection:text-espresso">
      <Navbar />
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <PortfolioGallery />
      <BridalExperience />
      <WhyUsSection />
      <TestimonialsSection />
      <InstagramSection />
      <DestinationWeddings />
      <FAQAccordion />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
