"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from "lucide-react";
import { PortfolioItem, BRAND_DATA } from "@/data/content";

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const whatsappMessage = `Hi Jiya, I saw the '${item.title}' (${item.category}) look on your portfolio and would like to check availability for my event!`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-espresso/90 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl bg-ivory text-espresso shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-champagne/40"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2 bg-espresso/80 text-white hover:bg-gold transition-colors rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Side */}
          <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-espresso">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />

            {/* Navigation Arrows */}
            {hasPrev && (
              <button
                onClick={onPrev}
                aria-label="Previous look"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-espresso/60 text-white hover:bg-gold transition-colors rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {hasNext && (
              <button
                onClick={onNext}
                aria-label="Next look"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-espresso/60 text-white hover:bg-gold transition-colors rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-ivory">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-champagne-light text-gold-muted text-[10px] uppercase tracking-[0.2em] font-medium border border-champagne/40">
                  {item.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-espresso/70 font-light mb-4">
                {item.subtitle}
              </p>

              {item.location && (
                <div className="flex items-center gap-2 text-xs text-gold-muted mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              )}

              <div className="h-[1px] w-full bg-champagne/40 my-4" />

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-espresso/50 font-sans">
                  Crafted By Jiya Vadhwani
                </p>
                <p className="text-xs text-espresso/70 font-light leading-relaxed">
                  Every bridal look is tailored using high-definition techniques, customized skin hydration, and premium long-lasting formulations designed for Indian wedding light and HD videography.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-champagne/40 mt-6">
              <a
                href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gold hover:bg-gold-bright text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire About This Look</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
