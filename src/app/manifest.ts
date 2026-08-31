import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bright & Beauty by Jiya Vadhwani",
    short_name: "Bright & Beauty",
    description: "Luxury Bridal & Destination Wedding Makeup Artist in Udaipur, Rajasthan.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#1C1614",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
