"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/data/content";

export function TrustStrip() {
  return (
    <section className="bg-espresso-light text-ivory py-10 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gold/15">
          {TRUST_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gold tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-ivory/90">
                {stat.label}
              </span>
              <span className="text-[11px] text-champagne/60 font-light mt-0.5">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
