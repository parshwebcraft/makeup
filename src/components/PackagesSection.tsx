"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Info, Calendar } from "lucide-react";
import { SERVICES, TERMS_AND_CONDITIONS } from "@/data/content";

interface PackagesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function PackagesSection({ onOpenBooking }: PackagesSectionProps) {
  const [activeTab, setActiveTab] = useState<"bridal" | "party" | "pre-wedding">("bridal");

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="packages" className="py-24 bg-ivory-cream relative border-t border-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Official Rate Card
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            Service Packages & Rates
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso/70 font-light max-w-xl mx-auto">
            Transparent pricing packages for brides, pre-wedding shoots, family siders, and guests.
          </p>
        </div>

        {/* Package Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("bridal")}
            className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300 font-medium ${
              activeTab === "bridal"
                ? "bg-espresso text-ivory border border-espresso shadow-md"
                : "bg-ivory text-espresso/70 hover:text-gold border border-champagne/40"
            }`}
          >
            Bridal Packages
          </button>

          <button
            onClick={() => setActiveTab("party")}
            className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300 font-medium ${
              activeTab === "party"
                ? "bg-espresso text-ivory border border-espresso shadow-md"
                : "bg-ivory text-espresso/70 hover:text-gold border border-champagne/40"
            }`}
          >
            Family & Guest Makeup
          </button>

          <button
            onClick={() => setActiveTab("pre-wedding")}
            className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300 font-medium ${
              activeTab === "pre-wedding"
                ? "bg-espresso text-ivory border border-espresso shadow-md"
                : "bg-ivory text-espresso/70 hover:text-gold border border-champagne/40"
            }`}
          >
            Pre-Wedding Shoots
          </button>
        </div>

        {/* Pricing Cards Grid */}
        {activeService.packages && activeService.packages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
            {activeService.packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative bg-ivory p-8 flex flex-col justify-between border shadow-luxury transition-all duration-300 ${
                  pkg.recommended
                    ? "border-gold ring-1 ring-gold/40 shadow-gold-glow"
                    : "border-champagne/40 hover:border-gold/50"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] uppercase tracking-[0.25em] font-medium px-4 py-1 shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl text-espresso font-normal mb-2">
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-champagne/30">
                    <span className="font-serif text-3xl sm:text-4xl text-gold font-light">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-espresso/60 font-light">/ event</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-espresso/80 font-light">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => onOpenBooking(`${pkg.name} (${pkg.price})`)}
                    className={`w-full py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 ${
                      pkg.recommended
                        ? "bg-gold hover:bg-gold-bright text-white shadow-md"
                        : "border border-espresso/30 hover:border-gold hover:bg-gold hover:text-white text-espresso"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {pkg.name}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Official Terms & Conditions Box */}
        <div className="bg-espresso text-ivory p-8 border border-gold/30 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-gold" />
            <h4 className="font-serif text-xl text-champagne font-normal">
              Booking Terms & Conditions
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-ivory/80 font-light leading-relaxed">
            {TERMS_AND_CONDITIONS.map((term, tIdx) => (
              <div key={tIdx} className="flex items-start gap-2.5">
                <span className="text-gold font-serif text-sm">📌</span>
                <span>{term}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
