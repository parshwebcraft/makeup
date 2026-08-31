export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Party' | 'HD' | 'Destination';
  image: string;
  subtitle: string;
  location?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  brideName: string;
  weddingType: string;
  venue: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  url: string;
}

export const BRAND_DATA = {
  name: "Bright & Beauty",
  artist: "Jiya Vadhwani",
  title: "Professional Makeup Artist",
  certification: "Certified MUA by Samaira Sandhu",
  location: "Udaipur, Rajasthan",
  instagramHandle: "@_bright_and_beauty_",
  instagramUrl: "https://www.instagram.com/_bright_and_beauty_/",
  whatsappNumber: "918005649056",
  phoneNumberDisplay: "+91 80056 49056",
  whatsappUrl: "https://wa.me/918005649056?text=Hi%20Jiya%2C%20I%20found%20Bright%20%26%20Beauty%20online%20and%20would%20like%20to%20enquire%20about%20makeup%20services.",
  followersCount: "10K+",
  postsCount: "400+",
};

export const HERO_DATA = {
  badge: "Certified MUA by Samaira Sandhu",
  titleLine1: "Bright & Beauty",
  titleLine2: "Luxury Makeup Artistry",
  subtitle: "for Your Most Beautiful Moments",
  servicesOverview: "Bridal • Party • HD Makeup • Destination Weddings",
  location: "Udaipur, Rajasthan",
  ctaPrimary: "Book Your Appointment",
  ctaSecondary: "View Portfolio",
  heroImage: "/images/portfolio/img21.jpg",
};

export const TRUST_STATS = [
  { value: "10K+", label: "Instagram Followers", sublabel: "@_bright_and_beauty_" },
  { value: "400+", label: "Portfolios & Posts", sublabel: "Real Transformations" },
  { value: "Certified", label: "Makeup Artist", sublabel: "By Samaira Sandhu" },
  { value: "Udaipur", label: "Based Artist", sublabel: "Available Worldwide" },
];

export const ABOUT_DATA = {
  heading: "Where Beauty Meets Artistry",
  paragraph1: "With a passion for creating timeless bridal and occasion looks, Jiya Vadhwani brings together refined makeup artistry, attention to detail and a personalized approach for every client.",
  paragraph2: "Trained under the legendary Samaira Sandhu, Jiya combines international technique with rich cultural aesthetics to enhance your natural features without heavy masking. Whether it is an opulent palace wedding at Lake Pichola or an intimate celebration, every look is crafted to withstand climate, emotions, and HD camera lenses.",
  highlights: [
    "Certified MUA by Samaira Sandhu Academy",
    "Tailored bridal & destination wedding packages",
    "Exclusively high-end products (MAC, NARS, Charlotte Tilbury)",
    "Strict hygiene protocols & customized skin preparation",
  ],
  image: "/images/portfolio/img26.jpg",
  studioImage: "/images/portfolio/img1.jpg",
  signature: "Jiya Vadhwani",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    tagline: "Timeless Bridal Perfection",
    description: "Timeless bridal looks crafted around your features, outfit and wedding aesthetic. Designed for long-lasting comfort and royal elegance.",
    image: "/images/portfolio/img21.jpg",
    features: ["Personalized skin prep", "Drape & jewelry setting", "HD waterproof finish", "Hair styling coordination"],
  },
  {
    id: "party",
    title: "Party Makeup",
    tagline: "Glamour for Special Occasions",
    description: "Elegant glam for celebrations, receptions, engagements and special occasions that turns heads while feeling weightless.",
    image: "/images/portfolio/img1.jpg",
    features: ["Engagement & Reception glam", "Cocktail & sangeet looks", "Custom lip & eye artistry", "Lash enhancement"],
  },
  {
    id: "hd",
    title: "HD Makeup",
    tagline: "Flawless HD Camera Finish",
    description: "Camera-ready makeup designed for flawless high-definition photography, videography, and all-day sweat-resistant wear.",
    image: "/images/portfolio/img30.jpg",
    features: ["4K/8K camera optimization", "Airbrush-like seamless skin", "Zero flashback formulation", "16+ hour duration"],
  },
  {
    id: "destination",
    title: "Destination Weddings",
    tagline: "Global Travel Services",
    description: "Luxury makeup services for brides celebrating their wedding beyond Udaipur. Full entourage & multiple function management.",
    image: "/images/portfolio/img16.jpg",
    features: ["On-location setup anywhere", "Multi-event look continuity", "Family & bridesmaid packages", "Touch-up kit provided"],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Royal Sage Green Bride",
    category: "Bridal",
    subtitle: "Intricate Kundan Jewelry & Dewy Base",
    image: "/images/portfolio/img21.jpg",
    location: "The Leela Palace, Udaipur",
  },
  {
    id: "2",
    title: "Vibrant Rani Pink Bridal Look",
    category: "Bridal",
    subtitle: "Traditional Gold Highlights & Winged Eyes",
    image: "/images/portfolio/img26.jpg",
    location: "Oberoi Udaivilas, Udaipur",
  },
  {
    id: "3",
    title: "Pastel Mint Engagement Look",
    category: "Party",
    subtitle: "Soft Peach Tones & Romantic Waves",
    image: "/images/portfolio/img1.jpg",
    location: "Taj Lake Palace, Udaipur",
  },
  {
    id: "4",
    title: "Gold Glamour HD Reception",
    category: "HD",
    subtitle: "High-Definition Radiant Skin & Sculpted Cheeks",
    image: "/images/portfolio/img30.jpg",
    location: "Jagmandir Island Palace, Udaipur",
  },
  {
    id: "5",
    title: "Contemporary Golden Hour Glam",
    category: "Destination",
    subtitle: "Soft Smokey Eye & Champagne Highlight",
    image: "/images/portfolio/img32.jpg",
    location: "Chunda Palace, Udaipur",
  },
  {
    id: "6",
    title: "Heritage Destination Bride",
    category: "Destination",
    subtitle: "Waterproof All-Day Regal Finish",
    image: "/images/portfolio/img16.jpg",
    location: "Fateh Garh Resort, Udaipur",
  },
  {
    id: "7",
    title: "Opulent Pink & Antique Gold",
    category: "Bridal",
    subtitle: "Timeless Bridal Makeup Artistry",
    image: "/images/portfolio/img28.jpg",
    location: "Aurika Udaipur",
  },
  {
    id: "8",
    title: "Minimalist Luxe Engagement",
    category: "Party",
    subtitle: "Weightless Radiant Base & Soft Lips",
    image: "/images/portfolio/img34.jpg",
    location: "Trident Udaipur",
  },
  {
    id: "9",
    title: "Classic Heritage Portrait",
    category: "Bridal",
    subtitle: "Precision Eye Detailing & Drape Setting",
    image: "/images/portfolio/img25.jpg",
    location: "Zenana Mahal, City Palace Udaipur",
  },
  {
    id: "10",
    title: "High Definition Camera Glam",
    category: "HD",
    subtitle: "Zero Flashback & Seamless Airbrush Effect",
    image: "/images/portfolio/img23.jpg",
    location: "Raffles Udaipur",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your outfit, preferences, skin type, wedding style and desired look to craft a personalized beauty roadmap.",
  },
  {
    number: "02",
    title: "Look Planning",
    description: "Creating a cohesive makeup and hair direction that complements your wedding jewelry, lighting, and attire seamlessly.",
  },
  {
    number: "03",
    title: "The Final Look",
    description: "Precision application on your big day with luxurious skin prep, meticulous detailing, and high-definition photography finishing.",
  },
];

export const WHY_US_ITEMS = [
  {
    title: "Personalized Makeup Looks",
    description: "Every stroke is tailored to your face structure, outfit tones, and personal style for an authentic royal glow.",
  },
  {
    title: "Professional & Certified Artist",
    description: "Directly certified by Samaira Sandhu, trained in modern techniques, hygiene, and luxury bridal standards.",
  },
  {
    title: "Premium Products",
    description: "Using only top-tier international brands including MAC, Bobbi Brown, NARS, Charlotte Tilbury, and Huda Beauty.",
  },
  {
    title: "Bridal & Destination Expertise",
    description: "Extensive experience across Udaipur's heritage palaces and destination venues worldwide.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "Jiya understood exactly what I wanted and made me feel so confident on my wedding day. My makeup stayed intact from 3 PM until late night rituals at Jagmandir!",
    brideName: "Ananya Sharma",
    weddingType: "Bridal Look",
    venue: "Jagmandir Island Palace, Udaipur",
    rating: 5,
    date: "November 2025",
  },
  {
    id: "2",
    quote: "Absolutely loved my bridal look. Everything was elegant, comfortable and exactly how I imagined. Jiya's calm vibe kept me at total ease while getting ready.",
    brideName: "Riddhima Mehta",
    weddingType: "Destination Wedding",
    venue: "The Leela Palace, Udaipur",
    rating: 5,
    date: "December 2025",
  },
  {
    id: "3",
    quote: "Beautiful work, professional approach and such a lovely experience. She created 3 distinct looks for my sangeet, wedding and reception. Highly recommended!",
    brideName: "Kavya Singhania",
    weddingType: "Full Wedding Package",
    venue: "Oberoi Udaivilas, Udaipur",
    rating: 5,
    date: "January 2026",
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    image: "/images/portfolio/img21.jpg",
    likes: "1,240",
    comments: "84",
    caption: "Royal sage green bridal look for our gorgeous bride Shivani at The Leela Palace ✨ @_bright_and_beauty_",
    url: "https://www.instagram.com/_bright_and_beauty_/",
  },
  {
    id: "ig-2",
    image: "/images/portfolio/img26.jpg",
    likes: "980",
    comments: "62",
    caption: "Vibrant rani pink perfection! Traditional gold highlights with flawless skin 💕",
    url: "https://www.instagram.com/_bright_and_beauty_/",
  },
  {
    id: "ig-3",
    image: "/images/portfolio/img1.jpg",
    likes: "1,510",
    comments: "112",
    caption: "Pastel engagement glam for the sangeet night 🌟 Swipe for the glow!",
    url: "https://www.instagram.com/_bright_and_beauty_/",
  },
  {
    id: "ig-4",
    image: "/images/portfolio/img30.jpg",
    likes: "890",
    comments: "45",
    caption: "Gold glamour reception HD look 🎨",
    url: "https://www.instagram.com/_bright_and_beauty_/",
  },
  {
    id: "ig-5",
    image: "/images/portfolio/img16.jpg",
    likes: "2,100",
    comments: "148",
    caption: "Destination wedding vibes in Rajasthan. Bringing timeless bridal beauty everywhere 👑",
    url: "https://www.instagram.com/_bright_and_beauty_/",
  },
  {
    id: "ig-6",
    image: "/images/portfolio/img28.jpg",
    likes: "1,120",
    comments: "78",
    caption: "Opulent pink & antique gold bridal portrait ✨",
    url: "https://www.instagram.com/_bright_and_beauty_/",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How early should I book my bridal makeup?",
    answer: "Since auspicious wedding dates in Udaipur get booked up to 6–9 months in advance, we recommend securing your date as soon as your venue and wedding functions are finalized to ensure exclusivity.",
  },
  {
    id: "faq-2",
    question: "Do you travel for destination weddings outside Udaipur?",
    answer: "Yes, Jiya Vadhwani and her team travel globally for destination weddings. We regularly service weddings across Rajasthan, Mumbai, Delhi, Goa, and international destinations.",
  },
  {
    id: "faq-3",
    question: "Do you offer party and engagement makeup for family members?",
    answer: "Absolutely. We offer tailored packages for mothers, sisters, and bridesmaids alongside the bride. Our associate MUAs ensure your entire entourage looks cohesive and stunning.",
  },
  {
    id: "faq-4",
    question: "What is HD makeup and why is it recommended for brides?",
    answer: "HD (High Definition) makeup uses ultra-fine, light-reflecting pigments that hide imperfections without creating a heavy mask. It prevents camera flashback under high-tech 4K/8K cameras and lasts effortlessly through sweat and long rituals.",
  },
  {
    id: "faq-5",
    question: "How can I check availability for my event dates?",
    answer: "You can click on 'Book Appointment' or 'Book via WhatsApp' on our website to fill in your event details. Send us your date, location, and required services, and Jiya will personally respond with availability.",
  },
  {
    id: "faq-6",
    question: "Can I schedule a consultation before booking?",
    answer: "Yes, we encourage virtual or in-person consultations to discuss your outfits, jewelry, skin type, and vision prior to finalizing your bridal package.",
  },
];
