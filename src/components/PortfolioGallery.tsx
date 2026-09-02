"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/content";
import { LightboxModal } from "./LightboxModal";

type CategoryFilter = "All" | "Bridal" | "Party" | "HD" | "Destination";

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = ["All", "Bridal", "Party", "HD", "Destination"];

  const filteredItems = activeFilter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const handlePrev = () => {
    if (selectedItemIndex !== null && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedItemIndex !== null && selectedItemIndex < filteredItems.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Curated Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            Signature Looks
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso/70 font-light max-w-xl mx-auto">
            Explore our gallery of royal Indian brides, party glam, and high-definition transformations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 font-medium ${
                activeFilter === cat
                  ? "bg-espresso text-ivory shadow-md border border-espresso"
                  : "bg-transparent text-espresso/70 hover:text-gold border border-transparent hover:border-champagne/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Uniform Clean Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden bg-espresso cursor-pointer border border-champagne/30 shadow-luxury aspect-[3/4]"
                onClick={() => setSelectedItemIndex(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6" />

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-gold text-white text-[10px] uppercase tracking-[0.2em] font-medium">
                      {item.category}
                    </span>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-2xl text-ivory font-normal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-champagne/80 font-light mb-4">
                      {item.subtitle}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-medium">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Look</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null}
        onClose={() => setSelectedItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedItemIndex !== null && selectedItemIndex > 0}
        hasNext={selectedItemIndex !== null && selectedItemIndex < filteredItems.length - 1}
      />
    </section>
  );
}
