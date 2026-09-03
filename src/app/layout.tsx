import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SEO_CONFIG } from "@/config/seo";

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

export const viewport: Viewport = {
  themeColor: "#1C1614",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  keywords: [
    "makeup artist in Udaipur",
    "bridal makeup artist in Udaipur",
    "bridal makeup Udaipur",
    "makeup artist Udaipur",
    "best makeup artist in Udaipur",
    "professional makeup artist Udaipur",
    "HD makeup artist Udaipur",
    "HD makeup Udaipur",
    "party makeup artist Udaipur",
    "party makeup Udaipur",
    "destination wedding makeup artist",
    "destination wedding makeup Udaipur",
    "bridal makeup artist Rajasthan",
    "Jiya Vadhwani makeup artist",
    "Certified MUA Samaira Sandhu",
    "Bright & Beauty Udaipur",
  ],
  authors: [{ name: SEO_CONFIG.artistName }],
  creator: SEO_CONFIG.brandName,
  publisher: SEO_CONFIG.brandName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/bblogo.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/bblogo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/bblogo.png"],
  },
  metadataBase: new URL(SEO_CONFIG.domain),
  alternates: {
    canonical: SEO_CONFIG.domain,
  },
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.domain,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: `${SEO_CONFIG.domain}/bblogo.png`,
        width: 1252,
        height: 1252,
        alt: "Bright & Beauty by Jiya Vadhwani Logo",
      },
      {
        url: `${SEO_CONFIG.domain}/images/portfolio/img21.jpg`,
        width: 1200,
        height: 630,
        alt: "Bright & Beauty by Jiya Vadhwani - Bridal Makeup Artist in Udaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [`${SEO_CONFIG.domain}/bblogo.png`, `${SEO_CONFIG.domain}/images/portfolio/img21.jpg`],
    creator: "@_bright_and_beauty_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/bblogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="antialiased bg-ivory text-espresso selection:bg-blush selection:text-espresso font-sans">
        {children}
      </body>
    </html>
  );
}
