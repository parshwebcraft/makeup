import Link from "next/link";
import { ArrowLeft, Headphones, Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export const metadata = {
  title: "Support & Help | Bright & Beauty by Jiya Vadhwani",
  description: "Official support and contact channels for Bright & Beauty clients.",
};

export default function SupportPage() {
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
            <Headphones className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Client Assistance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-light">Support & Enquiries</h1>
          <p className="text-xs text-espresso/60 font-light mt-2">We are here to assist with your wedding & event bookings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="bg-ivory-cream border border-gold/30 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 bg-espresso text-gold flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-espresso font-normal mb-1">Call / WhatsApp</h3>
              <p className="text-xs text-espresso/60 font-light mb-3">Direct contact for urgent booking inquiries</p>
              <p className="text-base font-serif text-gold font-medium">{BRAND_DATA.phoneNumberDisplay}</p>
            </div>
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 py-3 bg-gold text-white text-xs uppercase tracking-widest font-medium hover:bg-gold-bright transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="bg-ivory-cream border border-gold/30 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 bg-espresso text-gold flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-espresso font-normal mb-1">Email Support</h3>
              <p className="text-xs text-espresso/60 font-light mb-3">Send detailed event agendas or trial queries</p>
              <p className="text-base font-serif text-gold font-medium">{BRAND_DATA.email}</p>
            </div>
            <a
              href={`mailto:${BRAND_DATA.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2 py-3 border border-espresso text-espresso text-xs uppercase tracking-widest font-medium hover:bg-espresso hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Location & Studio Details */}
        <div className="bg-espresso text-ivory p-8 border border-gold/30 shadow-luxury mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-gold" />
            <div>
              <h3 className="font-serif text-2xl text-ivory font-normal">Studio & Location</h3>
              <p className="text-xs text-champagne/70 font-light">{BRAND_DATA.location}</p>
            </div>
          </div>
          <p className="text-xs text-ivory/70 font-light leading-relaxed mb-6">
            Based in Titardi, Udaipur, Rajasthan. Servicing all major luxury heritage resorts across Lake Pichola, Fatehsagar, and destination weddings worldwide.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={BRAND_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-champagne transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @_bright_and_beauty_</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
