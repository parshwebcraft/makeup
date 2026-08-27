import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright & Beauty | Jiya Vadhwani | Makeup Artist in Udaipur",
  description:
    "Bright & Beauty by Jiya Vadhwani, a professional and certified makeup artist in Udaipur offering bridal, party, HD and destination wedding makeup.",
  keywords: [
    "Makeup Artist in Udaipur",
    "Bridal Makeup Artist Udaipur",
    "Bridal Makeup Udaipur",
    "HD Makeup Udaipur",
    "Party Makeup Udaipur",
    "Destination Wedding Makeup",
    "Udaipur Makeup Artist",
    "Certified MUA Samaira Sandhu",
    "Bright and Beauty Jiya Vadhwani",
  ],
  authors: [{ name: "Jiya Vadhwani" }],
  creator: "Bright & Beauty",
  openGraph: {
    title: "Bright & Beauty | Luxury Bridal Makeup Artist in Udaipur",
    description: "Refined makeup artistry by Jiya Vadhwani for timeless Indian brides and destination weddings in Udaipur, Rajasthan.",
    url: "https://brightandbeauty.in",
    siteName: "Bright & Beauty",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="antialiased bg-ivory text-espresso selection:bg-blush selection:text-espresso font-sans">
        {children}
      </body>
    </html>
  );
}
