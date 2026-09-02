import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Calendar, Award, ShieldCheck, MapPin } from "lucide-react";
import { generateMetadataObj, SEO_CONFIG, GEO_ENTITY_STATEMENT } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_DATA, ABOUT_DATA } from "@/data/content";

export const metadata = generateMetadataObj({
  title: "About Jiya Vadhwani | Certified Makeup Artist in Udaipur | Bright & Beauty",
  description:
    "Learn about Jiya Vadhwani, certified professional makeup artist in Udaipur trained by Samaira Sandhu. Specializing in luxury bridal, HD, party & destination wedding makeup.",
  path: "/about",
  image: "/images/about/jiya1.jpeg",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Jiya Vadhwani", item: "/about" },
        ]}
      />

      <main className="min-h-screen bg-ivory text-espresso py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-espresso transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <header className="border-b border-champagne/40 pb-8 mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                Meet The Artist
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              About Jiya Vadhwani
            </h1>

            <p className="text-base sm:text-lg text-espresso/80 font-light max-w-3xl leading-relaxed">
              Founder & Lead Makeup Artist at Bright & Beauty, Udaipur, Rajasthan.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gold-muted font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Titardi, Udaipur, Rajasthan</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-gold" />
                <span>Certified MUA by Samaira Sandhu</span>
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/30 p-3 bg-ivory-cream shadow-luxury">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={ABOUT_DATA.image}
                  alt="Jiya Vadhwani - Certified Makeup Artist in Udaipur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                {ABOUT_DATA.heading}
              </h2>

              <p className="text-sm sm:text-base text-espresso/80 font-light leading-relaxed">
                {ABOUT_DATA.paragraph1}
              </p>

              <p className="text-sm text-espresso/75 font-light leading-relaxed">
                {ABOUT_DATA.paragraph2}
              </p>

              <div className="bg-ivory-cream border border-gold/30 p-5 space-y-3">
                <p className="text-xs font-serif italic text-espresso">{GEO_ENTITY_STATEMENT}</p>
              </div>

              <div className="space-y-2 pt-2">
                {ABOUT_DATA.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-espresso/85 font-light">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-champagne/40">
                <span className="text-[11px] uppercase tracking-widest text-espresso/50 block">Founder & Lead MUA</span>
                <span className="font-serif italic text-2xl text-espresso">{ABOUT_DATA.signature}</span>
              </div>
            </div>
          </div>

          {/* 4 Artist Photos Gallery */}
          {ABOUT_DATA.artistImages && (
            <div className="mb-16">
              <h3 className="font-serif text-2xl text-espresso font-light mb-6 text-center">
                Jiya Vadhwani & Studio Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ABOUT_DATA.artistImages.map((imgSrc, i) => (
                  <div key={i} className="relative aspect-[3/4] border border-champagne/40 overflow-hidden shadow-md">
                    <Image
                      src={imgSrc}
                      alt={`Jiya Vadhwani Artist Photo ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-espresso text-ivory p-8 text-center border border-gold/30">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
              Book a Consultation with Jiya Vadhwani
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-lg mx-auto mb-6">
              Discuss your outfit tones, jewelry, skin type, and bridal roadmap.
            </p>
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-bright transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
