import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { generateMetadataObj } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export const metadata = generateMetadataObj({
  title: "Client Reviews & Testimonials | Bright & Beauty Jiya Vadhwani Udaipur",
  description:
    "Read genuine bride reviews and testimonials for Jiya Vadhwani's bridal makeup in Udaipur (The Leela Palace, Jagmandir, Oberoi Udaivilas).",
  path: "/reviews",
  image: "/images/portfolio/img21.jpg",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Reviews & Testimonials", item: "/reviews" },
        ]}
      />

      <main className="min-h-screen bg-ivory text-espresso py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-espresso transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <header className="border-b border-champagne/40 pb-8 mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                Bride Testimonials
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              Client Reviews & Stories
            </h1>

            <p className="text-base text-espresso/80 font-light leading-relaxed">
              Discover why brides across Udaipur and destination venues trust Jiya Vadhwani for their most memorable occasions.
            </p>
          </header>

          <TestimonialsSection />
        </div>
      </main>
    </>
  );
}
