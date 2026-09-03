"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const footerNavLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Support & Help", href: "/support" },
  ];

  return (
    <footer className="bg-espresso-light text-ivory pt-16 pb-12 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-champagne/10">
          
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold/40 shrink-0 bg-espresso/40 p-0.5 shadow-md">
                  <Image
                    src="/bblogo.png"
                    alt="Bright & Beauty by Jiya Vadhwani Logo"
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="font-serif text-2xl tracking-widest text-ivory block uppercase">
                    Bright & Beauty
                  </span>
                  <span className="text-[10px] text-gold font-sans tracking-[0.25em] block -mt-1 uppercase">
                    By Jiya Vadhwani
                  </span>
                </div>
              </div>

              <p className="text-xs text-ivory/70 font-light mt-4 max-w-sm leading-relaxed">
                Certified luxury bridal makeup artist bringing timeless elegance, camera-ready perfection, and royal Indian beauty to Udaipur and global destination weddings.
              </p>
            </div>

            <div className="mt-6 text-xs text-champagne/80 font-light space-y-1.5">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Contact: <strong>{BRAND_DATA.phoneNumberDisplay}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Email: <strong>{BRAND_DATA.email}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{BRAND_DATA.location}</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-4">
              Quick Navigation
            </p>
            <ul className="space-y-2 mb-6">
              {footerNavLinks.map((link) => (
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

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-gold text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-bright transition-colors"
            >
              Book Appointment
            </button>
          </div>

          {/* Legal & Compliance Section */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-4">
              Legal & Support
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-ivory/70 hover:text-gold transition-colors font-light tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-4">
              Social Links
            </p>
            <div className="flex items-center gap-3 mb-6">
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
            <p className="text-[11px] text-ivory/60 font-light leading-normal">
              Official Udaipur, Rajasthan Jurisdiction.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/50 font-light gap-4">
          <p>© {new Date().getFullYear()} Bright & Beauty by Jiya Vadhwani. All rights reserved.</p>
          <p className="flex items-center gap-1 flex-wrap">
            <span>Designed & Developed by</span>
            <a
              href="https://www.instagram.com/_gauranshjaroli_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne font-medium hover:text-gold transition-colors underline decoration-gold/40 underline-offset-2"
            >
              Gauransh Jaroli
            </a>
            <span className="text-champagne/40">|</span>
            <a
              href="https://www.parshwebcraft.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne font-medium hover:text-gold transition-colors underline decoration-gold/40 underline-offset-2"
            >
              ParshWebCraft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
