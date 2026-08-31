import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export const metadata = {
  title: "Disclaimer | Bright & Beauty by Jiya Vadhwani",
  description: "Official disclaimer for Bright & Beauty makeup services.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-ivory text-espresso py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-espresso transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="border-b border-champagne/40 pb-6 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Service Disclaimer</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-light">Disclaimer</h1>
          <p className="text-xs text-espresso/60 font-light mt-2">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-espresso/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">1. Skin Allergies & Sensitivity</h2>
            <p>
              While we use only premium, internationally accredited cosmetic brands (MAC, NARS, Charlotte Tilbury, Bobbi Brown), clients are required to disclose any pre-existing skin conditions, allergies, or sensitivities prior to makeup application. Bright & Beauty is not responsible for undisclosed allergic reactions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. Photography & Lighting Variations</h2>
            <p>
              Final makeup appearance in photographs or videos can vary based on venue lighting, professional camera settings, flash setups, and photographer editing styles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. External Links Disclaimer</h2>
            <p>
              Our website may contain links to external social media channels (e.g. Instagram). We are not responsible for content or privacy practices of external platforms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Contact</h2>
            <p>
              For any clarification regarding our services, write to <strong>{BRAND_DATA.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
