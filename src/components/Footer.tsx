"use client";

import Link from "next/link";
import { Instagram, MessageCircle, Heart } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export function Footer() {
  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-espresso-light text-ivory pt-16 pb-12 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-champagne/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl tracking-widest text-ivory block uppercase">
                Bright & Beauty
              </span>
              <span className="text-xs text-gold font-sans tracking-[0.25em] block -mt-1 uppercase">
                By Jiya Vadhwani
              </span>
              <p className="text-xs text-ivory/70 font-light mt-4 max-w-sm leading-relaxed">
                Certified luxury bridal makeup artist bringing timeless elegance, camera-ready perfection, and royal Indian beauty to Udaipur and global destination weddings.
              </p>
            </div>

            <div className="mt-6 text-xs text-champagne/80 font-light space-y-1">
              <p>Certified MUA by Samaira Sandhu</p>
              <p>Location: Udaipur, Rajasthan, India</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-4">
              Quick Navigation
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-ivory/80 hover:text-gold transition-colors font-light tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-4">
              Connect With Us
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-champagne/30 text-ivory hover:border-gold hover:bg-gold hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border border-champagne/30 text-ivory hover:border-gold hover:bg-gold hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-ivory/60 font-light">
              Available for bridal consultations, trial bookings, and destination travel arrangements.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/50 font-light gap-4">
          <p>© {new Date().getFullYear()} Bright & Beauty. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Developed by</span>
            <span className="text-champagne font-medium hover:text-gold transition-colors">ParshWebCraft</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
