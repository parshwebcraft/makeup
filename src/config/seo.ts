export const SEO_CONFIG = {
  domain: "https://www.brightandbeautybyjiyavadhwani.com",
  siteName: "Bright & Beauty by Jiya Vadhwani",
  defaultTitle: "Makeup Artist in Udaipur: Bridal Makeup Artist | Jiya Vadhwani",
  defaultDescription:
    "Jiya Vadhwani is a bridal makeup artist in Udaipur offering personalized bridal and occasion makeup services for a flawless, elegant look on your special day.",
  artistName: "Jiya Vadhwani",
  brandName: "Bright & Beauty",
  logo: "/bblogo.png",
  city: "Udaipur",
  state: "Rajasthan",
  country: "India",
  certification: "Certified MUA by Samaira Sandhu",
  whatsappPrimary: "+91 80056 49056",
  whatsappSecondary: "+91 95213 47419",
  instagramUrl: "https://www.instagram.com/_bright_and_beauty_/",
  instagramHandle: "@_bright_and_beauty_",
  geoCoordinates: {
    latitude: 24.5854,
    longitude: 73.7125,
  },
  address: {
    streetAddress: "House no.14, Kola Magri, Titrdi, Sector 9",
    addressLocality: "Udaipur",
    addressRegion: "Rajasthan",
    postalCode: "313001",
    addressCountry: "IN",
  },
  priceRange: "₹10,000–₹15,000+",
  googleMapsUrl: "https://share.google/fbYQPRzcPv92sGVmc",
};

export interface KeywordMapItem {
  keyword: string;
  intent: "Commercial" | "Informational" | "Navigational" | "Transactional";
  targetPage: string;
  priority: "High" | "Medium" | "Low";
  category: "Bridal" | "Party" | "HD" | "Destination" | "General" | "Informational";
}

export const KEYWORD_STRATEGY_MAP: KeywordMapItem[] = [
  { keyword: "makeup artist in Udaipur", intent: "Commercial", targetPage: "/", priority: "High", category: "General" },
  { keyword: "bridal makeup artist in Udaipur", intent: "Commercial", targetPage: "/services/bridal-makeup", priority: "High", category: "Bridal" },
  { keyword: "bridal makeup Udaipur", intent: "Commercial", targetPage: "/services/bridal-makeup", priority: "High", category: "Bridal" },
  { keyword: "makeup artist Udaipur", intent: "Commercial", targetPage: "/", priority: "High", category: "General" },
  { keyword: "best makeup artist in Udaipur", intent: "Commercial", targetPage: "/", priority: "High", category: "General" },
  { keyword: "professional makeup artist Udaipur", intent: "Commercial", targetPage: "/about", priority: "High", category: "General" },
  { keyword: "HD makeup artist Udaipur", intent: "Commercial", targetPage: "/services/hd-makeup", priority: "High", category: "HD" },
  { keyword: "HD makeup Udaipur", intent: "Commercial", targetPage: "/services/hd-makeup", priority: "High", category: "HD" },
  { keyword: "party makeup artist Udaipur", intent: "Commercial", targetPage: "/services/party-makeup", priority: "High", category: "Party" },
  { keyword: "party makeup Udaipur", intent: "Commercial", targetPage: "/services/party-makeup", priority: "High", category: "Party" },
  { keyword: "destination wedding makeup artist", intent: "Commercial", targetPage: "/services/destination-weddings", priority: "High", category: "Destination" },
  { keyword: "destination wedding makeup Udaipur", intent: "Commercial", targetPage: "/services/destination-weddings", priority: "High", category: "Destination" },
  { keyword: "bridal makeup artist Rajasthan", intent: "Commercial", targetPage: "/services/destination-weddings", priority: "Medium", category: "Destination" },
  { keyword: "how to choose a bridal makeup artist", intent: "Informational", targetPage: "/faq", priority: "Medium", category: "Informational" },
  { keyword: "how early to book bridal makeup", intent: "Informational", targetPage: "/faq", priority: "Medium", category: "Informational" },
  { keyword: "bridal makeup tips", intent: "Informational", targetPage: "/faq", priority: "Medium", category: "Informational" },
  { keyword: "HD makeup vs traditional makeup", intent: "Informational", targetPage: "/services/hd-makeup", priority: "Medium", category: "HD" },
  { keyword: "what is HD bridal makeup", intent: "Informational", targetPage: "/services/hd-makeup", priority: "Medium", category: "HD" },
  { keyword: "bridal makeup consultation", intent: "Transactional", targetPage: "/support", priority: "High", category: "General" },
  { keyword: "bridal makeup trial", intent: "Transactional", targetPage: "/support", priority: "High", category: "General" },
];

export const GEO_ENTITY_STATEMENT =
  "Bright & Beauty by Jiya Vadhwani is a professional bridal makeup artist in Udaipur offering bridal makeup, party makeup, HD makeup, destination wedding makeup and makeup services for special occasions.";

export function generateMetadataObj({
  title,
  description,
  path = "",
  image = "/bblogo.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const url = `${SEO_CONFIG.domain}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SEO_CONFIG.domain}${image}`;
  const logoImage = `${SEO_CONFIG.domain}${SEO_CONFIG.logo}`;

  return {
    title,
    description,
    keywords: [
      "makeup artist in Udaipur",
      "bridal makeup artist in Udaipur",
      "bridal makeup Udaipur",
      "HD makeup artist Udaipur",
      "party makeup Udaipur",
      "destination wedding makeup Udaipur",
      "Jiya Vadhwani Makeup Artist",
      "Jiya Vadhwani MUA",
      "Certified MUA by Samaira Sandhu",
      "Bright & Beauty Udaipur",
      "Bright and Beauty by Jiya Vadhwani",
    ],
    metadataBase: new URL(SEO_CONFIG.domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${title} - Bright & Beauty by Jiya Vadhwani`,
        },
        {
          url: logoImage,
          width: 512,
          height: 512,
          alt: "Bright & Beauty Logo",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImage, logoImage],
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
}
