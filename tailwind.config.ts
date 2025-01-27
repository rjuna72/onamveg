import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#D4AF37", // Gold color
        sandal: "#E6D5B8", // Sandalwood color
        green: "#4A7C59", // Traditional Kerala green
      },
      fontSize: {
        huge: "5rem", // Custom large size for h1
      },
    },
  },
  plugins: [],
};

export default config;
