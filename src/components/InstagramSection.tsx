"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { INSTAGRAM_POSTS, BRAND_DATA } from "@/data/content";

export function InstagramSection() {
  return (
    <section className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Instagram className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
              Social Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
            More Looks. More Inspiration.
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso/70 font-light max-w-xl mx-auto">
            Follow <span className="text-espresso font-medium">{BRAND_DATA.instagramHandle}</span> on Instagram for live bridal transformations, client stories, and behind-the-scenes artistry.
          </p>
        </div>

        {/* 6-Image Instagram Feed Grid - Clean & Uncropped */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden bg-espresso shadow-md border border-champagne/30 hover:border-gold transition-colors"
            >
              <Image
                src={post.image}
                alt={`Bright & Beauty Instagram post ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Clean Luxury Hover Overlay (No Fake Likes/Comments) */}
              <div className="absolute inset-0 bg-espresso/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-gold mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-[11px] uppercase tracking-widest text-ivory font-medium flex items-center gap-1">
                  <span>View Post</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={BRAND_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-espresso hover:border-gold hover:bg-gold hover:text-white text-espresso text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
