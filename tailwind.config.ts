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
        background: "#b1efa3", // Custom green background color
        foreground: "#171717", // Custom dark foreground color
        highlight: "#68fb6d",  // A brighter green accent color
        cardBackground: "#e1fbd7", // Light card background color
        buttonBackground: "#3e8b2d", // Button background color
        cardBorder: "#3e8b2d", // Card border color for consistency
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"], // Custom font family (Heebo)
      },
      spacing: {
        "5px": "5px", // Custom small spacing utility
      },
      borderRadius: {
        "full-rounded": "9999px", // Custom border radius
      },
    },
  },
  plugins: [],
};

export default config;
