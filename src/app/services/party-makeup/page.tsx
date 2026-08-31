import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Calendar, MapPin, ShieldCheck } from "lucide-react";
import { generateMetadataObj, SEO_CONFIG } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_DATA } from "@/data/content";

export const metadata = generateMetadataObj({
  title: "Party Makeup Artist in Udaipur | Bright & Beauty by Jiya Vadhwani",
  description:
    "Book party makeup in Udaipur for sangeet, cocktail, engagement & celebrations. Professional party & sider makeup packages starting at ₹2,500 by Jiya Vadhwani.",
  path: "/services/party-makeup",
  image: "/images/portfolio/img1.jpg",
});

export default function PartyMakeupPage() {
  const faqs = [
    {
      question: "What are the party makeup rates in Udaipur at Bright & Beauty?",
      answer:
        "Our party and sider makeup rates start at ₹2,500 for Basic Guest Makeup, ₹5,000 for Premium Sider Makeup, and ₹7,000 for Premium Party Glam.",
    },
    {
      question: "Do you offer makeup for family members and bridesmaids?",
      answer:
        "Yes, we provide specialized family, guest, and bridesmaid packages for mothers, sisters, and entourage members attending weddings in Udaipur.",
    },
  ];

  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Party Makeup Artist Udaipur", item: "/services/party-makeup" },
        ]}
        faqs={faqs}
        serviceSchema={{
          name: "Party Makeup Artist in Udaipur",
          description:
            "Glamorous party and sider makeup in Udaipur, Rajasthan for sangeet, engagement, cocktail, and family celebrations by certified MUA Jiya Vadhwani.",
          image: "/images/portfolio/img1.jpg",
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
                Occasion & Guest Glamour
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              Party Makeup Artist in Udaipur
            </h1>

            <p className="text-base sm:text-lg text-espresso/80 font-light max-w-3xl leading-relaxed">
              Elegant, weightless glam for engagements, sangeet nights, cocktail parties, and family wedding celebrations across Udaipur.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gold-muted font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Udaipur, Rajasthan</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Certified MUA Jiya Vadhwani</span>
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-6 relative aspect-[4/5] border border-gold/30 p-3 bg-ivory-cream shadow-luxury">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/portfolio/img1.jpg"
                  alt="Party Makeup Artist in Udaipur - Pastel Glam by Jiya Vadhwani"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                Glamour Tailored to Your Occasion
              </h2>

              <p className="text-sm text-espresso/80 font-light leading-relaxed">
                Whether you are attending an evening reception at Lake Pichola or a sangeet dance performance, our party makeup services are designed to highlight your features without heavy caking.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Basic Guest Makeup (₹2,500):</strong> Professional makeup, standard hair styling & draping.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Premium Sider Makeup (₹5,000):</strong> Premium international products, advanced hair styling, extensions & accessories.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Premium Party Glam (₹7,000):</strong> High-end professional makeup, custom lip & eye artistry, draping & accessories.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-espresso text-ivory p-8 text-center border border-gold/30">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
              Book Party Makeup in Udaipur
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-lg mx-auto mb-6">
              Reserve your party makeup slot for your upcoming event in Udaipur.
            </p>
            <a
              href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=Hi%20Jiya%2C%20I%20would%20like%20to%20enquire%20about%20Party%20Makeup%20in%20Udaipur.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-bright transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Party Makeup</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
