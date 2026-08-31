import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Calendar, MapPin, Plane, ShieldCheck } from "lucide-react";
import { generateMetadataObj, SEO_CONFIG } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_DATA } from "@/data/content";

export const metadata = generateMetadataObj({
  title: "Destination Wedding Makeup Artist Rajasthan | Jiya Vadhwani Udaipur",
  description:
    "Planning a destination wedding in Udaipur, Jaipur, Jodhpur or worldwide? Book luxury destination wedding makeup artist Jiya Vadhwani for complete bride & entourage styling.",
  path: "/services/destination-weddings",
  image: "/images/portfolio/img16.jpg",
});

export default function DestinationWeddingsPage() {
  const faqs = [
    {
      question: "Does Jiya Vadhwani travel outside Udaipur for destination weddings?",
      answer:
        "Yes, Jiya Vadhwani and her senior team travel globally for destination weddings across Rajasthan (Jaipur, Jodhpur, Jaisalmer), Mumbai, Delhi, Goa, and international royal venues.",
    },
    {
      question: "How are travel and stay charges handled for destination makeup bookings?",
      answer:
        "Pick-up, drop, round-trip travel, and hotel stay arrangements for on-location destination services are borne by the client, as outlined in our official booking policy.",
    },
  ];

  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Destination Wedding Makeup Artist", item: "/services/destination-weddings" },
        ]}
        faqs={faqs}
        serviceSchema={{
          name: "Destination Wedding Makeup Artist in Rajasthan",
          description:
            "Luxury destination wedding makeup services by Jiya Vadhwani based in Udaipur, Rajasthan. Servicing royal palace weddings across Rajasthan, India, and worldwide.",
          image: "/images/portfolio/img16.jpg",
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
              <Plane className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                Worldwide Travel Services
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              Destination Wedding Makeup Artist Rajasthan
            </h1>

            <p className="text-base sm:text-lg text-espresso/80 font-light max-w-3xl leading-relaxed">
              Bringing royal Udaipur bridal artistry wherever your dream destination celebration takes place. Full multi-function makeup management for brides, mothers, sisters, and wedding guests.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gold-muted font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Base: Udaipur, Rajasthan • Available Worldwide</span>
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
                  src="/images/portfolio/img16.jpg"
                  alt="Destination Wedding Makeup Artist Rajasthan - Bride by Jiya Vadhwani"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                Seamless Multi-Event Destination Styling
              </h2>

              <p className="text-sm text-espresso/80 font-light leading-relaxed">
                Destination weddings involve distinct lighting, climate changes, and tight schedules across Mehendi, Haldi, Sangeet, Wedding, and Reception events. Jiya Vadhwani ensures a seamless, relaxed experience for the bride and her entourage.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Complete Multi-Function Packages:</strong> Cohesive look planning across all rituals.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Associate Team Support:</strong> Senior associate MUAs to handle mothers, sisters, and entourage simultaneously.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>On-Location Setup:</strong> Complete portable luxury makeup & lighting setup brought directly to your resort suite.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-espresso text-ivory p-8 text-center border border-gold/30">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
              Enquire for Destination Wedding Travel
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-lg mx-auto mb-6">
              Share your destination dates and location to check Jiya Vadhwani&apos;s travel calendar.
            </p>
            <a
              href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=Hi%20Jiya%2C%20I%20am%20planning%20a%20destination%20wedding%20and%20would%20like%20to%20enquire%20about%20travel%20dates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-bright transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire for Destination Wedding</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
