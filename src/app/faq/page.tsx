import Link from "next/link";
import { ArrowLeft, HelpCircle, MessageCircle, Calendar } from "lucide-react";
import { generateMetadataObj } from "@/config/seo";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_DATA } from "@/data/content";

export const metadata = generateMetadataObj({
  title: "Bridal Makeup FAQs | Bright & Beauty Jiya Vadhwani Udaipur",
  description:
    "Frequently asked questions about bridal makeup packages, HD makeup, pricing, booking timeline, and travel for destination weddings in Udaipur, Rajasthan.",
  path: "/faq",
  image: "/images/instagram/ig2.jpg",
});

const aeoFaqs = [
  {
    question: "Who is Bright & Beauty by Jiya Vadhwani?",
    answer:
      "Bright & Beauty is the luxury makeup artistry brand of Jiya Vadhwani, a certified professional makeup artist trained under Samaira Sandhu based in Udaipur, Rajasthan, India.",
  },
  {
    question: "Where is Bright & Beauty located?",
    answer:
      "Bright & Beauty is located in Titardi, Udaipur, Rajasthan, India. Jiya Vadhwani services luxury wedding venues across Udaipur (Lake Pichola, Fatehsagar, Jagmandir, Udaivilas) and travels worldwide for destination weddings.",
  },
  {
    question: "What makeup services does Jiya Vadhwani offer?",
    answer:
      "Jiya Vadhwani offers Basic & HD Bridal Makeup Packages, Pre-Wedding Shoot Makeup, Family & Guest Makeup, HD Camera-Ready Makeup, Model Shoot Makeup, and Destination Wedding Makeup Services.",
  },
  {
    question: "Does Bright & Beauty offer bridal makeup in Udaipur?",
    answer:
      "Yes, Bright & Beauty offers specialized Bridal Makeup Packages in Udaipur, including the Basic Bridal Package (₹10,000) and HD Bridal Package (₹15,000) with premium products, advanced hair styling, extensions, accessories, and lehenga draping.",
  },
  {
    question: "Does Bright & Beauty offer HD makeup?",
    answer:
      "Yes, Bright & Beauty provides camera-ready HD (High Definition) makeup using light-diffusing micro pigments that prevent flashback in 4K/8K photography and last 16+ hours.",
  },
  {
    question: "Does Bright & Beauty offer party makeup?",
    answer:
      "Yes, Bright & Beauty offers party, sangeet, engagement, and guest makeup packages in Udaipur ranging from ₹2,500 to ₹7,000 per person.",
  },
  {
    question: "Does Bright & Beauty provide destination wedding makeup?",
    answer:
      "Yes, Jiya Vadhwani and her team travel across Rajasthan (Jaipur, Jodhpur, Jaisalmer), India, and international destinations for full-entourage destination wedding makeup.",
  },
  {
    question: "How early should I book bridal makeup in Udaipur?",
    answer:
      "We recommend booking your bridal makeup date 6 to 9 months in advance with a 20% advance payment to reserve your auspicious date.",
  },
  {
    question: "How can I enquire about bridal makeup availability?",
    answer:
      "You can click on 'Book Appointment' on our website or text Jiya Vadhwani directly on WhatsApp at +91 80056 49056 with your date and venue location.",
  },
  {
    question: "How can I contact Bright & Beauty?",
    answer:
      "You can contact Bright & Beauty via WhatsApp/Phone at +91 80056 49056, Email at Booking@jiyavadhwani.com, or Instagram @_bright_and_beauty_.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "FAQs & Guidance", item: "/faq" },
        ]}
        faqs={aeoFaqs}
      />

      <main className="min-h-screen bg-ivory text-espresso py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-espresso transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <header className="border-b border-champagne/40 pb-8 mb-12">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-gold font-medium">
                Answer Engine Knowledge Base
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-light leading-tight mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-base text-espresso/80 font-light leading-relaxed">
              Clear, direct answers about Jiya Vadhwani&apos;s bridal makeup, packages, location, travel policies, and booking procedures in Udaipur.
            </p>
          </header>

          <div className="space-y-6 mb-16">
            {aeoFaqs.map((faq, i) => (
              <article key={i} className="border border-champagne/40 p-6 bg-ivory-cream shadow-sm">
                <h2 className="font-serif text-xl text-espresso font-normal mb-3 flex items-start gap-2">
                  <span className="text-gold font-sans text-sm mt-0.5">Q{i + 1}.</span>
                  <span>{faq.question}</span>
                </h2>
                <p className="text-xs sm:text-sm text-espresso/80 font-light leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="bg-espresso text-ivory p-8 text-center border border-gold/30">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
              Have More Questions?
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-lg mx-auto mb-6">
              Chat directly with Jiya Vadhwani on WhatsApp for instant assistance.
            </p>
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-bright transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask Jiya on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
