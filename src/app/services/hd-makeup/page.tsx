import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Calendar, MapPin, ShieldCheck } from "lucide-react";
import { generateMetadataObj, SEO_CONFIG } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_DATA } from "@/data/content";

export const metadata = generateMetadataObj({
  title: "HD Makeup Artist in Udaipur | Bright & Beauty by Jiya Vadhwani",
  description:
    "What is HD makeup? Book camera-ready HD bridal & party makeup in Udaipur by Jiya Vadhwani (₹15,000 package). Zero flashback, 4K video optimized finish.",
  path: "/services/hd-makeup",
  image: "/images/portfolio/img30.jpg",
});

export default function HdMakeupPage() {
  const faqs = [
    {
      question: "What is HD makeup and how is it different from traditional makeup?",
      answer:
        "HD (High Definition) makeup uses ultra-fine, light-diffusing micro pigments that blend seamlessly into skin. Unlike traditional makeup which can look heavy under 4K/8K photography lights, HD makeup hides imperfections, minimizes pore visibility, and eliminates white camera flashback.",
    },
    {
      question: "How long does HD makeup last during Udaipur weddings?",
      answer:
        "Jiya Vadhwani's HD bridal makeup is sweat-resistant, tear-proof, and designed to last 16+ hours effortlessly throughout day and night rituals.",
    },
  ];

  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "HD Makeup Artist Udaipur", item: "/services/hd-makeup" },
        ]}
        faqs={faqs}
        serviceSchema={{
          name: "HD Makeup Artist in Udaipur",
          description:
            "Camera-ready High Definition (HD) bridal & reception makeup in Udaipur, Rajasthan by Jiya Vadhwani. 4K/8K photography optimized finish with zero flashback.",
          image: "/images/portfolio/img30.jpg",
        }}
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
                Camera-Ready Perfection
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              HD Makeup Artist in Udaipur
            </h1>

            <p className="text-base sm:text-lg text-espresso/80 font-light max-w-3xl leading-relaxed">
              High-Definition (HD) bridal makeup specially engineered for modern 4K/8K wedding videography, high-intensity strobe lighting, and flawless close-up portraits.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gold-muted font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Udaipur, Rajasthan</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>HD Bridal Package: ₹15,000</span>
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-6 relative aspect-[4/5] border border-gold/30 p-3 bg-ivory-cream shadow-luxury">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/portfolio/img30.jpg"
                  alt="HD Makeup Artist in Udaipur - Reception Glam by Jiya Vadhwani"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                Why Choose HD Makeup for Your Wedding?
              </h2>

              <p className="text-sm text-espresso/80 font-light leading-relaxed">
                Modern high-resolution camera lenses capture every tiny texture detail. Jiya Vadhwani&apos;s HD makeup technique ensures skin appears naturally luminous, soft-focused, and airbrushed both in real life and high-end video edits.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Zero Camera Flashback:</strong> Specially formulated pigments prevent ghosting or white cast in strobe flashes.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>16+ Hour All-Weather Wear:</strong> Waterproof, tear-resistant, and climate-durable for Udaipur royal palace weddings.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Comprehensive Package (₹15,000):</strong> Includes premium products, advanced hair styling, extensions, accessories & draping.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-espresso text-ivory p-8 text-center border border-gold/30">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
              Book HD Bridal & Reception Makeup
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-lg mx-auto mb-6">
              Confirm your HD makeup date with Jiya Vadhwani in Udaipur.
            </p>
            <a
              href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=Hi%20Jiya%2C%20I%20would%20like%20to%20enquire%20about%20the%20HD%20Bridal%20Package%20(%E2%82%B915%2C000)%20in%20Udaipur.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-bright transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book HD Makeup Package</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
