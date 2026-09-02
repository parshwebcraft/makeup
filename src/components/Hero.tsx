"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Award, ChevronDown, Calendar } from "lucide-react";
import { HERO_DATA } from "@/data/content";

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-espresso text-ivory pt-20 pb-16">
      {/* Background Image with Clear Visibility & Soft Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_DATA.heroImage}
          alt="Luxury Indian Bridal Makeup by Bright & Beauty Jiya Vadhwani"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center opacity-65 scale-102 transition-transform duration-1000"
        />
        {/* Soft Vignette Overlay - Keeps text readable while showing full model background */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-espresso/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/40" />
      </div>

      {/* Decorative Golden Border Framing */}
      <div className="absolute inset-6 sm:inset-10 border border-champagne/20 pointer-events-none z-10 hidden md:block" />

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-champagne/30 bg-espresso/60 backdrop-blur-md mb-6"
        >
          <Award className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-light">
            {HERO_DATA.badge}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm font-sans tracking-[0.4em] uppercase text-gold font-light mb-2 drop-shadow-md"
        >
          {HERO_DATA.titleLine1}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.08] max-w-4xl tracking-tight drop-shadow-lg"
        >
          Luxury Makeup Artistry
          <span className="block italic text-champagne font-normal font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 drop-shadow-md">
            for Your Most Beautiful Moments
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-[1px] w-24 bg-gradient-to-r from-gold via-champagne to-transparent my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-ivory/90 max-w-2xl font-light tracking-wide mb-3 drop-shadow-sm"
        >
          {HERO_DATA.servicesOverview}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-champagne/90 mb-10 drop-shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>{HERO_DATA.location}</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-bright text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2 rounded-none"
          >
            <Calendar className="w-4 h-4" />
            <span>{HERO_DATA.ctaPrimary}</span>
          </button>

          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 border border-champagne/40 hover:border-gold hover:bg-ivory/10 text-ivory text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 text-center backdrop-blur-sm"
          >
            {HERO_DATA.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-champagne/60 text-[10px] tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
