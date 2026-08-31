"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PackagesSection } from "@/components/PackagesSection";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BridalExperience } from "@/components/BridalExperience";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { DestinationWeddings } from "@/components/DestinationWeddings";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService("");
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-ivory text-espresso selection:bg-blush selection:text-espresso">
      <Navbar onOpenBooking={handleOpenBooking} />
      <Hero onOpenBooking={handleOpenBooking} />
      <TrustStrip />
      <AboutSection />
      <ServicesSection onOpenBooking={handleOpenBooking} />
      <PackagesSection onOpenBooking={handleOpenBooking} />
      <PortfolioGallery />
      <BridalExperience onOpenBooking={handleOpenBooking} />
      <WhyUsSection />
      <TestimonialsSection />
      <InstagramSection />
      <DestinationWeddings onOpenBooking={handleOpenBooking} />
      <FAQAccordion />
      <FinalCTASection onOpenBooking={handleOpenBooking} />
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Luxury Booking Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </main>
  );
}
