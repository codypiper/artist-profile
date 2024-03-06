import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        subtext: "#a3a3a3",
      },
      dropShadow: {
        glow: "0 0 3px",
        dark: "0 0 6px rgb(0 0 0)",
      },
    },
  },
  plugins: [],
};

export default config;
