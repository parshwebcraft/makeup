import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export const metadata = {
  title: "Refund & Cancellation Policy | Bright & Beauty by Jiya Vadhwani",
  description: "Official refund and cancellation policy for Bright & Beauty makeup bookings.",
};

export default function RefundPage() {
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
            <RefreshCw className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Cancellation Terms</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-light">Refund & Cancellation Policy</h1>
          <p className="text-xs text-espresso/60 font-light mt-2">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-espresso/80 font-light leading-relaxed">
          <section className="bg-ivory-cream border border-gold/40 p-6">
            <h2 className="font-serif text-xl text-gold font-normal mb-3">1. Advance Payment Non-Refundable Policy</h2>
            <p className="text-espresso font-normal">
              A <strong>20% advance payment</strong> is mandatory to lock and confirm your wedding or event date. As auspicious wedding dates in Udaipur are booked months in advance and other inquiries for the same slot are turned down, <strong>the advance payment is strictly non-refundable under any circumstances</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. Event Rescheduling</h2>
            <p>
              If you wish to reschedule your event date, you must notify us in writing at least 30 days prior to the original event date. Rescheduling is subject to Jiya Vadhwani&apos;s availability on the newly requested date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. Client Cancellations</h2>
            <p>
              In case of cancellations made by the client within 7 days of the event, 100% of the package total becomes payable as compensation for reserved scheduling slots.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Artist Emergency Cancellations</h2>
            <p>
              In the rare event of severe emergency or illness on the artist&apos;s part preventing service delivery, 100% of the advance amount will be refunded immediately, or a trusted senior associate MUA will be provided upon mutual agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">5. Enquiries</h2>
            <p>
              For cancellation requests or rescheduling support, write to <strong>{BRAND_DATA.email}</strong> or call <strong>{BRAND_DATA.phoneNumberDisplay}</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
