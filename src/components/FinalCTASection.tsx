"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Sparkles, Calendar, Phone } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

interface FinalCTASectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function FinalCTASection({ onOpenBooking }: FinalCTASectionProps) {
  return (
    <section id="contact" className="py-24 bg-espresso text-ivory relative overflow-hidden border-t border-gold/20">
      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Start Your Beauty Journey
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight mb-6">
            Let&apos;s Create Your Perfect Look
          </h2>

          <div className="h-[1px] w-24 bg-gold mx-auto my-6" />

          <p className="text-base sm:text-lg text-ivory/80 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Have a wedding, celebration or special occasion coming up? Let&apos;s talk about the look you&apos;ve been dreaming of.
          </p>

          <div className="inline-flex items-center gap-3 text-sm text-gold font-light mb-10 px-4 py-2 border border-gold/30 bg-espresso-light">
            <Phone className="w-4 h-4 text-gold" />
            <span>Direct Call / WhatsApp: <strong>{BRAND_DATA.phoneNumberDisplay}</strong></span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-bright text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-gold-glow flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-champagne/40 hover:border-gold hover:text-gold text-ivory text-xs uppercase tracking-[0.25em] font-medium transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={BRAND_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-champagne/40 hover:border-gold hover:text-gold text-ivory text-xs uppercase tracking-[0.25em] font-medium transition-all flex items-center justify-center gap-3"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="mt-12 text-xs text-champagne/60 font-light tracking-wider">
            <span>Udaipur, Rajasthan • Available Worldwide for Destination Weddings</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
