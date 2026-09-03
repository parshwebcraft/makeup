import { SEO_CONFIG, GEO_ENTITY_STATEMENT } from "@/config/seo";
import { FAQ_ITEMS, SERVICES } from "@/data/content";

interface JsonLdProps {
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { question: string; answer: string }[];
  serviceSchema?: {
    name: string;
    description: string;
    image?: string;
  };
}

export function JsonLd({ breadcrumbs, faqs, serviceSchema }: JsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SEO_CONFIG.domain}/#business`,
    name: SEO_CONFIG.siteName,
    alternateName: "Bright & Beauty Makeup Studio",
    url: SEO_CONFIG.domain,
    logo: `${SEO_CONFIG.domain}/bblogo.png`,
    image: `${SEO_CONFIG.domain}/bblogo.png`,
    description: GEO_ENTITY_STATEMENT,
    telephone: SEO_CONFIG.whatsappPrimary,
    email: "Booking@jiyavadhwani.com",
    priceRange: SEO_CONFIG.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.streetAddress,
      addressLocality: SEO_CONFIG.address.addressLocality,
      addressRegion: SEO_CONFIG.address.addressRegion,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.geoCoordinates.latitude,
      longitude: SEO_CONFIG.geoCoordinates.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Udaipur",
      },
      {
        "@type": "State",
        name: "Rajasthan",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    founder: {
      "@type": "Person",
      "@id": `${SEO_CONFIG.domain}/#person`,
      name: SEO_CONFIG.artistName,
      jobTitle: "Professional Makeup Artist",
      worksFor: {
        "@type": "Organization",
        name: SEO_CONFIG.brandName,
        logo: `${SEO_CONFIG.domain}/bblogo.png`,
      },
      sameAs: [SEO_CONFIG.instagramUrl],
    },
    sameAs: [SEO_CONFIG.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bridal & Beauty Makeup Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SEO_CONFIG.domain}/#person`,
    name: SEO_CONFIG.artistName,
    alternateName: "Jiya Vadhwani Makeup Artist",
    description: `Professional Makeup Artist in Udaipur, Rajasthan. Certified MUA by Samaira Sandhu specializing in luxury bridal makeup, HD makeup, and destination weddings.`,
    jobTitle: "Certified Luxury Makeup Artist",
    alumniOf: "Samaira Sandhu Academy",
    knowsAbout: [
      "Bridal Makeup",
      "HD Makeup Artistry",
      "Party Makeup",
      "Destination Wedding Styling",
      "Saree and Lehenga Draping",
    ],
    worksFor: {
      "@type": "LocalBusiness",
      name: SEO_CONFIG.brandName,
      logo: `${SEO_CONFIG.domain}/bblogo.png`,
    },
    sameAs: [SEO_CONFIG.instagramUrl],
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${SEO_CONFIG.domain}${crumb.item}`,
    })),
  } : null;

  const currentServiceSchema = serviceSchema ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceSchema.name,
    provider: {
      "@type": "BeautySalon",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.domain,
      logo: `${SEO_CONFIG.domain}/bblogo.png`,
    },
    areaServed: "Udaipur, Rajasthan, India",
    description: serviceSchema.description,
    image: serviceSchema.image ? `${SEO_CONFIG.domain}${serviceSchema.image}` : `${SEO_CONFIG.domain}/bblogo.png`,
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {currentServiceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(currentServiceSchema) }}
        />
      )}
    </>
  );
}
