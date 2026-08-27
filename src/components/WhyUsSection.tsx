"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, ShieldCheck, Gem, Compass } from "lucide-react";
import { WHY_US_ITEMS } from "@/data/content";

const icons = [HeartHandshake, ShieldCheck, Gem, Compass];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              The Luxury Difference
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            Why Choose Bright & Beauty
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
        </div>

        {/* 2x2 or 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_ITEMS.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-ivory-cream border border-champagne/40 p-8 flex flex-col items-center text-center hover:border-gold/60 transition-all duration-300 shadow-luxury group"
              >
                <div className="w-14 h-14 bg-espresso text-gold flex items-center justify-center rounded-none mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-espresso font-normal mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-espresso/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
