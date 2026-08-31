import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

export const metadata = {
  title: "Cookie Policy | Bright & Beauty by Jiya Vadhwani",
  description: "Cookie policy for Bright & Beauty website.",
};

export default function CookiesPage() {
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
            <Cookie className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Browser Cookies</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-light">Cookie Policy</h1>
          <p className="text-xs text-espresso/60 font-light mt-2">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-espresso/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your browser when you visit our website to enhance navigation, remember preferences, and optimize load speed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for fundamental website navigation, smooth scrolling, and form modal triggers.</li>
              <li><strong>Performance Cookies:</strong> Help analyze site performance and load times for mobile visitors.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. Managing Cookies</h2>
            <p>
              You can choose to disable or selectively turn off cookies in your web browser settings. Note that disabling essential cookies may affect interactive features.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Questions</h2>
            <p>
              Contact us at <strong>{BRAND_DATA.email}</strong> for any questions regarding our cookie practices.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
