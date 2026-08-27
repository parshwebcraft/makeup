import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FDFBF7",
          pure: "#FFFFFF",
          cream: "#FAF6F0",
          muted: "#F4EFE6",
        },
        espresso: {
          DEFAULT: "#1C1614",
          light: "#2D2320",
          muted: "#4A3E39",
          soft: "#73645E",
        },
        champagne: {
          DEFAULT: "#E6D7C3",
          light: "#F7F3EC",
          dark: "#D4C3AA",
          gold: "#C5A059",
        },
        blush: {
          DEFAULT: "#E8D3CE",
          light: "#F5ECE9",
          dark: "#DFBDB6",
        },
        gold: {
          DEFAULT: "#C5A059",
          bright: "#D4AF37",
          muted: "#9E7B3B",
          glow: "#F3E7C4",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(28, 22, 20, 0.08)",
        "luxury-lg": "0 20px 40px -15px rgba(28, 22, 20, 0.12)",
        "gold-glow": "0 0 20px rgba(197, 160, 89, 0.25)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #C5A059 50%, #9E7B3B 100%)",
        "ivory-vignette": "radial-gradient(circle, rgba(253,251,247,0) 50%, rgba(250,246,240,0.8) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
