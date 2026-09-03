import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { generateMetadataObj } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata = generateMetadataObj({
  title: "Bridal & Party Makeup Portfolio Udaipur | Bright & Beauty Jiya Vadhwani",
  description:
    "Explore the signature bridal makeup, HD reception, engagement & party glam portfolio by Jiya Vadhwani in Udaipur, Rajasthan.",
  path: "/portfolio",
  image: "/images/portfolio/ig2.jpg",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Portfolio", item: "/portfolio" },
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
                Visual Showcase
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              Signature Makeup Portfolio
            </h1>

            <p className="text-base text-espresso/80 font-light leading-relaxed">
              Real brides, engagement looks, HD reception glam, and destination wedding transformations by Jiya Vadhwani in Udaipur.
            </p>
          </header>

          <PortfolioGallery />
        </div>
      </main>
    </>
  );
}
