import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Calendar, HeartHandshake, ShieldCheck, MapPin } from "lucide-react";
import { generateMetadataObj, SEO_CONFIG } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_DATA } from "@/data/content";

export const metadata = generateMetadataObj({
  title: "Bridal Makeup Artist in Udaipur | Bright & Beauty by Jiya Vadhwani",
  description:
    "Looking for a bridal makeup artist in Udaipur? Jiya Vadhwani offers royal, camera-ready bridal makeup packages in Udaipur, Rajasthan. Basic (₹10,000) & HD (₹15,000).",
  path: "/services/bridal-makeup",
  image: "/images/portfolio/img21.jpg",
});

export default function BridalMakeupPage() {
  const faqs = [
    {
      question: "What is included in Jiya Vadhwani's bridal makeup packages in Udaipur?",
      answer:
        "Our bridal makeup packages include customized skin prep, premium international makeup products (MAC, NARS, Charlotte Tilbury), advanced hair styling, hair extensions, hair accessories, and complete saree or lehenga draping.",
    },
    {
      question: "How early should I book a bridal makeup artist in Udaipur?",
      answer:
        "Since wedding dates in Udaipur heritage venues get booked 6 to 9 months in advance, we recommend securing your bridal date with a 20% advance as soon as your venue and function dates are fixed.",
    },
    {
      question: "What is the price of bridal makeup in Udaipur by Bright & Beauty?",
      answer:
        "Our Basic Bridal Package starts at ₹10,000, while our premium HD Bridal Package is priced at ₹15,000, which includes full camera-ready finishing, hair styling, extensions, accessories, and lehenga draping.",
    },
  ];

  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Bridal Makeup Artist Udaipur", item: "/services/bridal-makeup" },
        ]}
        faqs={faqs}
        serviceSchema={{
          name: "Bridal Makeup Artist in Udaipur",
          description:
            "Luxury royal bridal makeup artistry in Udaipur, Rajasthan by Jiya Vadhwani. Customized skin hydration, HD camera-ready finish, advanced hair styling, extensions, and lehenga draping.",
          image: "/images/portfolio/img21.jpg",
        }}
      />

      <main className="min-h-screen bg-ivory text-espresso py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-espresso transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Hero Header */}
          <header className="border-b border-champagne/40 pb-8 mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                Signature Bridal Artistry
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              Bridal Makeup Artist in Udaipur
            </h1>

            <p className="text-base sm:text-lg text-espresso/80 font-light max-w-3xl leading-relaxed">
              Crafting timeless, camera-ready bridal looks for royal palace weddings across Udaipur, Lake Pichola, and Rajasthan. Certified MUA Jiya Vadhwani blends international techniques with traditional Indian wedding aesthetics.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gold-muted font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Udaipur, Rajasthan</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Certified MUA by Samaira Sandhu</span>
              </span>
            </div>
          </header>

          {/* Editorial Image & Visual Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-6 relative aspect-[4/5] border border-gold/30 p-3 bg-ivory-cream shadow-luxury">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/portfolio/img21.jpg"
                  alt="Bridal Makeup Artist in Udaipur - Royal Bride by Jiya Vadhwani"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                Your Royal Bridal Experience
              </h2>
              
              <p className="text-sm text-espresso/80 font-light leading-relaxed">
                Every Indian bride deserves a look that reflects her individuality, enhances her natural facial structure, and remains flawless from the morning rituals until late-night pheras.
              </p>

              <p className="text-sm text-espresso/80 font-light leading-relaxed">
                Jiya Vadhwani utilizes high-definition skin preparation, customized shade matching, and humidity-resistant products formulation specially suited for Rajasthan&apos;s climate and 4K/8K wedding videography.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Exclusive International Brands:</strong> MAC, NARS, Charlotte Tilbury, Bobbi Brown & Huda Beauty.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>All-Inclusive Styling:</strong> Advanced hair styling, premium extensions, hair accessories & saree/lehenga draping.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-espresso/85 font-light">
                    <strong>Zero Flashback HD Finish:</strong> Specialized application preventing ghosting under heavy camera strobe lights.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Official Bridal Packages Table / Cards */}
          <section className="bg-ivory-cream border border-gold/30 p-8 mb-16 shadow-luxury">
            <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal mb-6 text-center">
              Official Bridal Packages & Rates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-ivory p-6 border border-champagne/40 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-espresso font-normal">Basic Bridal Package</h3>
                  <p className="font-serif text-3xl text-gold font-light my-3">₹10,000</p>
                  <ul className="space-y-2 text-xs text-espresso/80 font-light mb-6">
                    <li className="flex items-center gap-2">✓ High-End & International Products</li>
                    <li className="flex items-center gap-2">✓ Advanced Hair Styling</li>
                    <li className="flex items-center gap-2">✓ Hair Extensions & Accessories</li>
                    <li className="flex items-center gap-2">✓ Saree / Lehenga Draping</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=Hi%20Jiya%2C%20I%20am%20interested%20in%20booking%20the%20Basic%20Bridal%20Package%20(%E2%82%B910%2C000)%20in%20Udaipur.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-espresso text-espresso text-xs uppercase tracking-widest text-center font-medium hover:bg-espresso hover:text-white transition-colors"
                >
                  Enquire via WhatsApp
                </a>
              </div>

              <div className="bg-ivory p-6 border border-gold shadow-gold-glow flex flex-col justify-between relative">
                <span className="absolute -top-3 right-4 bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
                  Most Popular
                </span>
                <div>
                  <h3 className="font-serif text-xl text-espresso font-normal">HD Bridal Package</h3>
                  <p className="font-serif text-3xl text-gold font-light my-3">₹15,000</p>
                  <ul className="space-y-2 text-xs text-espresso/80 font-light mb-6">
                    <li className="flex items-center gap-2">✓ Premium International Products</li>
                    <li className="flex items-center gap-2">✓ HD Finish Camera-Ready Makeup</li>
                    <li className="flex items-center gap-2">✓ Advanced Hair Styling</li>
                    <li className="flex items-center gap-2">✓ Hair Extensions & Accessories</li>
                    <li className="flex items-center gap-2">✓ Complete Saree / Lehenga Draping</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=Hi%20Jiya%2C%20I%20am%20interested%20in%20booking%20the%20HD%20Bridal%20Package%20(%E2%82%B915%2C000)%20in%20Udaipur.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gold text-white text-xs uppercase tracking-widest text-center font-medium hover:bg-gold-bright transition-colors"
                >
                  Book HD Bridal Package
                </a>
              </div>
            </div>
          </section>

          {/* Bridal FAQs */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal mb-6">
              Bridal Makeup FAQs (Udaipur Weddings)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-champagne/40 p-6 bg-ivory-cream">
                  <h3 className="font-serif text-lg text-espresso font-normal mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-espresso/75 font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-espresso text-ivory p-8 text-center border border-gold/30">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
              Plan Your Dream Bridal Look
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-lg mx-auto mb-6">
              Connect directly with Jiya Vadhwani to check availability for your wedding date in Udaipur.
            </p>
            <a
              href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=Hi%20Jiya%2C%20I%20found%20your%20Bridal%20Makeup%20page%20and%20would%20like%20to%20check%20availability%20for%20my%20wedding%20date.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-bright transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Bridal Availability</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
