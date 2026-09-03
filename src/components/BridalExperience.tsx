"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";

interface BridalExperienceProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function BridalExperience({ onOpenBooking }: BridalExperienceProps) {
  return (
    <section className="py-24 bg-espresso text-ivory relative overflow-hidden">
      {/* Subtle gold glow accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                The Bridal Journey
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight mb-4">
              Your Wedding Day.
              <span className="block italic text-champagne">Your Signature Look.</span>
            </h2>

            <p className="text-sm sm:text-base text-ivory/70 font-light leading-relaxed mb-10">
              We take pride in turning your bridal vision into a flawless reality through a structured, stress-free luxury consultation process.
            </p>

            {/* 3 Step Process List */}
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-gold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </span>
                  <div className="pb-6 border-b border-champagne/15 w-full">
                    <h3 className="font-serif text-xl text-ivory font-normal mb-2 group-hover:text-champagne transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-10">
              <button
                onClick={() => onOpenBooking("Bridal Makeup")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-bright text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-gold-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan My Bridal Look</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Editorial Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[3/4] w-full border border-gold/30 p-3 sm:p-4 bg-espresso-light">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/instagram/ig2.jpg"
                  alt="Udaipur Bridal Experience by Bright & Beauty Jiya Vadhwani"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
