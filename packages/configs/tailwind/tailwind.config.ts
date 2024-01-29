import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/features/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/features/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Auto column grid with a min of 250px
        "auto-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
