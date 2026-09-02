"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { SERVICES } from "@/data/content";

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 bg-ivory-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Bespoke Artistry
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            Makeup Services
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso/70 font-light max-w-xl mx-auto">
            Tailored beauty experiences for Udaipur&apos;s royal weddings, high-glamour celebrations, and destination events worldwide.
          </p>
        </div>

        {/* 4 Editorial Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-ivory border border-champagne/40 hover:border-gold/60 shadow-luxury transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Header with Full Portrait Framing */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-espresso">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top sm:object-[center_10%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                  <span className="absolute bottom-3 left-4 text-xs tracking-widest text-champagne uppercase font-light drop-shadow-md">
                    {service.tagline}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-espresso font-normal mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-espresso/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-champagne/30 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-espresso/80 font-light">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-3 border border-espresso/20 group-hover:border-gold group-hover:bg-gold group-hover:text-white text-espresso text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
