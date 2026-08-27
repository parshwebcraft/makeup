"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/content";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-ivory relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Client Guidance
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            Frequently Asked Questions
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
          <p className="text-sm text-espresso/70 font-light max-w-md mx-auto">
            Everything you need to know about booking, travel, and our bridal makeup process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-champagne/40 bg-ivory-cream shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:text-gold"
                >
                  <span className="font-serif text-lg sm:text-xl text-espresso font-normal pr-2">
                    {item.question}
                  </span>
                  <div className="p-1 border border-champagne/60 text-gold rounded-full shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-champagne/20 text-xs sm:text-sm text-espresso/75 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
