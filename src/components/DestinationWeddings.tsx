"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Calendar } from "lucide-react";

interface DestinationWeddingsProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function DestinationWeddings({ onOpenBooking }: DestinationWeddingsProps) {
  return (
    <section className="relative py-32 bg-espresso text-ivory overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portfolio/img16.jpg"
          alt="Destination Bridal Makeup by Bright & Beauty Jiya Vadhwani"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/40 bg-espresso/60 backdrop-blur-md mb-6">
            <Plane className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-light">
              Global Bridal Travels
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory mb-6 leading-tight">
            From Udaipur to Your Dream Destination
          </h2>

          <p className="text-base sm:text-lg text-ivory/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Planning a destination wedding? Bring your bridal beauty vision wherever your celebration takes you. Complete entourage makeup and multi-function styling anywhere in India or abroad.
          </p>

          <button
            onClick={() => onOpenBooking("Destination Wedding Travel")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-bright text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-gold-glow"
          >
            <Calendar className="w-4 h-4" />
            <span>Enquire for Destination Wedding</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
