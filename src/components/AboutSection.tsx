"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Sparkles } from "lucide-react";
import { ABOUT_DATA, BRAND_DATA } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-ivory relative overflow-hidden">
      {/* Delicate background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-light/60 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush-light/50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Portrait Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-luxury border border-champagne/40">
                <Image
                  src={ABOUT_DATA.image}
                  alt="Jiya Vadhwani - Lead Makeup Artist in Udaipur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Offset Secondary Artist Photo */}
              <div className="absolute -bottom-8 -right-6 w-1/2 aspect-square overflow-hidden border-4 border-ivory shadow-luxury-lg hidden sm:block">
                <Image
                  src={ABOUT_DATA.studioImage}
                  alt="Jiya Vadhwani - Makeup Artistry & Styling"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>

              {/* Gold Certification Badge */}
              <div className="absolute -top-6 -left-6 bg-espresso text-ivory p-4 shadow-xl border border-gold/30 flex items-center gap-3 max-w-[220px]">
                <Award className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-medium">Certified MUA</p>
                  <p className="text-xs font-serif text-ivory/90">Samaira Sandhu Academy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                About The Artist
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light leading-tight mb-6">
              {ABOUT_DATA.heading}
            </h2>

            <p className="text-base sm:text-lg text-espresso/80 font-light leading-relaxed mb-4">
              {ABOUT_DATA.paragraph1}
            </p>

            <p className="text-sm sm:text-base text-espresso/70 font-light leading-relaxed mb-8">
              {ABOUT_DATA.paragraph2}
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {ABOUT_DATA.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature & CTA */}
            <div className="pt-6 border-t border-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-espresso/50 block font-sans">
                  Lead Artist & Founder
                </span>
                <span className="font-serif italic text-2xl text-espresso font-normal">
                  {ABOUT_DATA.signature}
                </span>
              </div>

              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-espresso hover:border-gold hover:bg-gold hover:text-white text-espresso text-xs uppercase tracking-[0.2em] transition-all duration-300 self-start sm:self-auto text-center"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>

        </div>

        {/* 4 Artist Photos Grid */}
        {ABOUT_DATA.artistImages && (
          <div className="mt-20 pt-12 border-t border-champagne/30">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-1">
                Artist Spotlight
              </span>
              <h3 className="font-serif text-2xl text-espresso font-light">
                Jiya Vadhwani in Action
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ABOUT_DATA.artistImages.map((imgSrc, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] border border-champagne/40 overflow-hidden shadow-md group"
                >
                  <Image
                    src={imgSrc}
                    alt={`Jiya Vadhwani Makeup Artist Udaipur - Photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[11px] text-ivory font-serif tracking-wider">
                      Jiya Vadhwani • Photo 0{i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
