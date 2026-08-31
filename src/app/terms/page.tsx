import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export const metadata = {
  title: "Terms & Conditions | Bright & Beauty by Jiya Vadhwani",
  description: "Terms and conditions for bridal makeup services by Bright & Beauty Jiya Vadhwani, Udaipur.",
};

export default function TermsPage() {
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
            <ShieldCheck className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Legal Document</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-light">Terms & Conditions</h1>
          <p className="text-xs text-espresso/60 font-light mt-2">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-espresso/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">1. Agreement to Terms</h2>
            <p>
              Welcome to Bright & Beauty by Jiya Vadhwani (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website or booking our makeup artistry services, you agree to be bound by these Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. Service Booking & Advance Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>A <strong>20% advance payment</strong> is strictly required to confirm and lock any event date.</li>
              <li>Booking dates are held on a first-come, first-served basis upon receipt of the advance payment.</li>
              <li>The remaining balance of 80% must be paid on or before the day of the event prior to the service completion.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. Travel & Venue Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>On-venue pick-up and drop charges for Jiya Vadhwani and her team must be borne by the client.</li>
              <li>For destination weddings outside Udaipur, round-trip travel, accommodation, and food logistics are to be arranged or reimbursed by the client.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Venue Changes & Modifications</h2>
            <p>
              Last-minute changes in schedules, additional look requirements, or venue relocations not agreed upon in the initial booking will not be entertained at the venue due to strict timing commitments.
            </p>
          </section>

          <section className="bg-ivory-cream border border-gold/40 p-6">
            <h2 className="font-serif text-xl text-gold font-normal mb-3">5. Governing Law & Jurisdiction</h2>
            <p className="text-espresso font-normal">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes, claims, or legal proceedings arising out of or in connection with Bright & Beauty services, bookings, or website usage shall be subject to the exclusive jurisdiction of the Courts in <strong>Udaipur, Rajasthan, India</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms, please contact us at:
              <br />
              <strong>Email:</strong> {BRAND_DATA.email}
              <br />
              <strong>Phone:</strong> {BRAND_DATA.phoneNumberDisplay}
              <br />
              <strong>Location:</strong> {BRAND_DATA.location}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
