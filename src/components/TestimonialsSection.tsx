"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Quote, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-ivory-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Real Bride Experiences
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            Kind Words From Our Brides
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
          <p className="text-sm text-espresso/70 font-light max-w-md mx-auto">
            Heartfelt reviews from brides who trusted Bright & Beauty for their most cherished day.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-ivory border border-champagne/40 p-8 flex flex-col justify-between shadow-luxury hover:border-gold/50 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-champagne/40 absolute top-6 right-6" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-espresso/80 font-serif italic leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Bride Details */}
              <div className="pt-6 border-t border-champagne/30">
                <p className="font-serif text-lg text-espresso font-normal">
                  {review.brideName}
                </p>
                <div className="flex items-center justify-between text-xs text-gold-muted mt-1">
                  <span className="uppercase tracking-wider font-sans text-[10px]">
                    {review.weddingType}
                  </span>
                  <span className="font-light text-espresso/50 text-[10px]">{review.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-espresso/60 font-light mt-2">
                  <MapPin className="w-3 h-3 text-gold" />
                  <span className="truncate">{review.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
