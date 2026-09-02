export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Party' | 'HD' | 'Destination';
  image: string;
  subtitle: string;
  location?: string;
}

export interface PackageDetail {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  packages?: PackageDetail[];
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
  location: "Titardi, Udaipur, Rajasthan",
  email: "Booking@jiyavadhwani.com",
  instagramHandle: "@_bright_and_beauty_",
  instagramUrl: "https://www.instagram.com/_bright_and_beauty_/",
  whatsappNumber: "918005649056",
  phoneNumberDisplay: "+91 80056 49056",
  whatsappUrl: "https://wa.me/918005649056?text=Hi%20Jiya%2C%20I%20found%20Bright%20%26%20Beauty%20online%20and%20would%20like%20to%20enquire%20about%20makeup%20services.",
  tagline: "Bring Out Your Inner Beauty with Empowering and Inspiring Makeup!",
  followersCount: "10K+",
  postsCount: "400+",
};

export const HERO_DATA = {
  badge: "Certified MUA by Samaira Sandhu",
  titleLine1: "Bright & Beauty",
  titleLine2: "Luxury Makeup Artistry",
  subtitle: "Bring Out Your Inner Beauty with Empowering and Inspiring Makeup",
  servicesOverview: "Bridal Packages • Pre-Wedding Shoots • Family & Guest Makeup • Destination Weddings",
  location: "Titardi, Udaipur, Rajasthan",
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
  heading: "Bring Out Your Inner Beauty",
  paragraph1: "Thank you for considering Bright & Beauty for your special occasion. With a passion for creating timeless bridal and occasion looks, Jiya Vadhwani offers luxury makeup services tailored to bring out the best version of you.",
  paragraph2: "Trained under the legendary Samaira Sandhu, Jiya combines international technique with rich cultural aesthetics to enhance your natural features without heavy masking. Whether it is an opulent palace wedding at Lake Pichola or a pre-wedding shoot, every look is crafted to withstand climate, emotions, and 4K HD camera lenses.",
  highlights: [
    "Certified MUA by Samaira Sandhu Academy",
    "High-End & Premium International Products",
    "Advanced Hair Styling, Extensions & Accessories included",
    "Complete Saree / Lehenga Draping included",
    "Strict hygiene protocols & customized skin preparation",
  ],
  image: "/images/about/jiya1.jpeg",
  studioImage: "/images/about/jiya2.jpeg",
  artistImages: [
    "/images/about/jiya1.jpeg",
    "/images/about/jiya2.jpeg",
    "/images/about/jiya3.jpeg",
    "/images/about/jiya4.jpeg",
  ],
  signature: "Jiya Vadhwani",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bridal",
    title: "Bridal Makeup Packages",
    tagline: "Timeless Bridal Perfection",
    description: "Tailored bridal packages designed around your features, outfit, and wedding aesthetic for long-lasting comfort and royal elegance.",
    image: "/images/portfolio/img21.jpg",
    features: [
      "High-End & Premium International Products",
      "Advanced Hair Styling & Hair Extensions",
      "Hair Accessories included",
      "Saree / Lehenga Draping",
      "HD Finish Makeup Options",
    ],
    packages: [
      {
        name: "Basic Bridal Package",
        price: "₹10,000",
        features: [
          "High-End & International Products",
          "Advanced Hair Styling",
          "Hair Extensions & Accessories",
          "Saree/Lehenga Draping",
        ],
      },
      {
        name: "HD Bridal Package",
        price: "₹15,000",
        recommended: true,
        features: [
          "Premium International Products",
          "HD Finish Camera-Ready Makeup",
          "Advanced Hair Styling",
          "Hair Extensions & Accessories",
          "Saree/Lehenga Draping",
        ],
      },
    ],
  },
  {
    id: "party",
    title: "Family & Guest Makeup",
    tagline: "Glamour for Family & Siders",
    description: "Elegant makeup for mothers, sisters, siders, and guests attending engagements, receptions, and celebrations.",
    image: "/images/portfolio/img1.jpg",
    features: [
      "Basic & Premium Makeup options",
      "Professional Hair Styling",
      "Hair Extensions & Accessories",
      "Saree / Dupatta Draping",
    ],
    packages: [
      {
        name: "Basic Guest Makeup",
        price: "₹2,500",
        features: ["Professional Makeup", "Standard Hair Styling", "Draping Support"],
      },
      {
        name: "Premium Sider Makeup",
        price: "₹5,000",
        features: [
          "Premium International Products",
          "Advanced Hair Styling",
          "Hair Extensions & Accessories",
          "Saree/Lehenga Draping",
        ],
      },
      {
        name: "Premium Party Glam",
        price: "₹7,000",
        features: [
          "High-End Professional Makeup",
          "Advanced Hair Styling",
          "Extensions & Premium Accessories",
          "Custom Lip & Eye Artistry",
        ],
      },
    ],
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Shoot Makeup",
    tagline: "Camera-Ready Outdoor Glam",
    description: "Flawless photography makeup crafted for outdoor light, location changes, and long-lasting pre-wedding shoots.",
    image: "/images/portfolio/img30.jpg",
    features: [
      "Full Day & Multi-Day Shoot Coverage",
      "Touch-up Support & Hair Styling",
      "Outfit Change Adjustments",
      "HD Camera Flashback-Proof",
    ],
    packages: [
      {
        name: "1-Day Pre-Wedding Shoot",
        price: "₹8,000",
        features: ["Full Day Shoot Makeup", "Advanced Hair Styling", "On-Location Touch-ups", "Draping & Accessories"],
      },
      {
        name: "2-Day Pre-Wedding Shoot",
        price: "₹15,000",
        recommended: true,
        features: ["2 Days Complete Shoot Coverage", "Multiple Look Transformations", "Advanced Hair Styling & Extensions", "Draping & On-Location Support"],
      },
    ],
  },
  {
    id: "destination",
    title: "Destination & Model Shoots",
    tagline: "Global Travel & Editorial Services",
    description: "Luxury makeup services for brides celebrating their wedding beyond Udaipur, plus high-fashion model shoot makeup.",
    image: "/images/portfolio/img16.jpg",
    features: [
      "On-Location Setup Anywhere in India & Abroad",
      "Multi-Event Look Continuity",
      "Model Shoot & Editorial Makeup",
      "Entourage & Family Package Discounts",
    ],
  },
];

export const TERMS_AND_CONDITIONS = [
  "Pick-up & Drop charges for on-venue services will be borne by the client.",
  "20% advance payment is required to confirm the booking.",
  "The remaining balance amount must be paid on the event day.",
  "Advance payment is non-refundable under any circumstances.",
  "Last-minute changes in services at the venue will not be entertained.",
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
    weddingType: "Bridal Package",
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
    question: "What packages do you offer for bridal makeup?",
    answer: "We offer the Basic Bridal Package (₹10,000) and the HD Bridal Package (₹15,000). Both include international products, advanced hair styling, extensions, accessories, and complete saree/lehenga draping.",
  },
  {
    id: "faq-2",
    question: "Do you offer pre-wedding shoot makeup packages?",
    answer: "Yes, we provide Pre-Wedding Shoot Makeup at ₹8,000 for 1-day shoots and ₹15,000 for 2-day shoots, including on-location touch-ups and hair styling.",
  },
  {
    id: "faq-3",
    question: "What are your family and guest makeup rates?",
    answer: "We offer Basic Guest Makeup at ₹2,500, Premium Sider Makeup at ₹5,000, and Premium Party Glam at ₹7,000 per person.",
  },
  {
    id: "faq-4",
    question: "What are your booking terms and advance payment policies?",
    answer: "A 20% advance payment is required to confirm your booking date (non-refundable). The remaining balance is payable on the event day. Pick-up & drop charges for on-venue locations are borne by the client.",
  },
  {
    id: "faq-5",
    question: "Do you travel for destination weddings outside Udaipur?",
    answer: "Yes, Jiya Vadhwani and her team travel globally for destination weddings. We regularly service weddings across Rajasthan, Mumbai, Delhi, Goa, and international destinations.",
  },
  {
    id: "faq-6",
    question: "How can I check availability for my dates?",
    answer: "Click 'Book Appointment' or WhatsApp us directly at +91 80056 49056 with your date and location to check Jiya's schedule.",
  },
];
