import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const config: Config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    fontFamily: {
      alata: ["var(--font-alata)"],
      jakarta: ["var(--font-jakarta)"],
    },
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        primary: "#067a46",
        secondary: "#056835",
        accent: "#F1C40F",
        lime: "#84faa1",
      },
      backgroundImage: {
        hero: "url('/bg-hero.svg')",
      },
    },
  },
  plugins: [...(baseConfig.plugins || []), require("daisyui")],
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["[data-theme=lemonade]"],
          primary: "#067a46",
          secondary: "#056835",
          accent: "#40efcf",
          neutral: "#2d2f39",
          "base-100": "#ffffff",
          info: "#76d1e5",
          success: "#22a05b",
          warning: "#f0bc2d",
          error: "#e33631",
        },
      },
    ],
  },
};
export default config;
