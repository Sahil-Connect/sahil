import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const extendedConfig: Config = {
  ...baseConfig,
  content: [
    // @ts-ignore
    ...baseConfig.content,
    "./src/Addresses/**/**.{js,ts,jsx,tsx,mdx}",
    "./src/Agents/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Centers/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Couriers/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Zones/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Businesses/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Suppliers/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Layout/*.{js,ts,tsx,tsx,mdx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
  plugins: [...baseConfig.plugins, require("daisyui")],
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

module.exports = extendedConfig;
