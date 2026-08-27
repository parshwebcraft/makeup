"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Calendar } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ivory/85 backdrop-blur-md border-b border-champagne/40 py-3 shadow-luxury"
            : "bg-gradient-to-b from-espresso/40 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="group flex flex-col">
            <span
              className={`font-serif text-2xl sm:text-3xl tracking-wider font-light uppercase transition-colors duration-300 ${
                isScrolled ? "text-espresso group-hover:text-gold" : "text-white group-hover:text-champagne-light"
              }`}
            >
              Bright & Beauty
            </span>
            <span
              className={`text-[10px] tracking-[0.25em] uppercase font-sans -mt-1 font-light ${
                isScrolled ? "text-gold-muted" : "text-champagne/80"
              }`}
            >
              By Jiya Vadhwani
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold font-light ${
                  isScrolled ? "text-espresso/80" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border transition-all duration-300 rounded-none flex items-center gap-2 ${
                isScrolled
                  ? "border-gold text-espresso hover:bg-gold hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-espresso"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Date</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? "text-espresso hover:text-gold" : "text-white hover:text-champagne"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-espresso/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-ivory shadow-2xl p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-champagne/40">
                  <div>
                    <span className="font-serif text-2xl text-espresso tracking-wide block uppercase">
                      Bright & Beauty
                    </span>
                    <span className="text-xs text-gold font-sans tracking-widest block">
                      BY JIYA VADHWANI
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-espresso hover:text-gold"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-serif tracking-wider text-espresso/90 hover:text-gold transition-colors border-b border-champagne/20 pb-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8">
                  <p className="text-xs text-espresso/60 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-sm font-serif text-espresso">Udaipur, Rajasthan</p>
                  <p className="text-xs text-gold mt-2 font-light">Certified MUA by Samaira Sandhu</p>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-champagne/40">
                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gold text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-gold-muted transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Bar for Mobile Visitors */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso text-ivory py-3 px-4 shadow-2xl border-t border-gold/30 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-serif tracking-wider text-champagne">BRIGHT & BEAUTY</span>
          <span className="text-[10px] text-ivory/70 font-sans">Certified MUA • Udaipur</span>
        </div>
        <a
          href={BRAND_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold hover:bg-gold-bright text-white px-4 py-2 text-xs font-medium uppercase tracking-widest flex items-center gap-2 rounded-sm shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
