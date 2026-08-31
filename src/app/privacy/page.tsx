import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export const metadata = {
  title: "Privacy Policy | Bright & Beauty by Jiya Vadhwani",
  description: "Privacy policy detailing data protection for Bright & Beauty clients.",
};

export default function PrivacyPage() {
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
            <Lock className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Privacy Protection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-light">Privacy Policy</h1>
          <p className="text-xs text-espresso/60 font-light mt-2">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-espresso/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">1. Information We Collect</h2>
            <p>
              When you submit a booking enquiry through our website or contact us via WhatsApp, we collect personal information including your full name, phone number, event dates, preferred time slots, and event locations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To check Jiya Vadhwani&apos;s scheduling availability for your requested date.</li>
              <li>To send booking confirmations, appointment reminders, and consultation details via WhatsApp or Email.</li>
              <li>To tailor skin preparation and makeup products according to your preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. Data Sharing & Protection</h2>
            <p>
              We prioritize your confidentiality. Bright & Beauty does <strong>NOT</strong> sell, rent, or lease client contact information to third-party advertisers or marketers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Portfolio Photography & Media Usage</h2>
            <p>
              With client consent, high-resolution photographs or videos taken during bridal transformations may be featured on our official Instagram account (@_bright_and_beauty_) or website portfolio to showcase artistry.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">5. Contact Us</h2>
            <p>
              For privacy enquiries or data updates, write to us at <strong>{BRAND_DATA.email}</strong> or call <strong>{BRAND_DATA.phoneNumberDisplay}</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
