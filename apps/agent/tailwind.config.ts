import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const extendedConfig: Config = {
  ...baseConfig,
  content: [
    // @ts-expect-error
    ...baseConfig.content,
    "./src/Suppliers/**/**.{js,ts,jsx,tsx,mdx}",
    "./src/Businesses/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Couriers/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Orders/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Dashboard/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Layout/*.{js,ts,tsx,tsx,mdx}",
    "./src/**/*.{js,ts,tsx,tsx,mdx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
  // @ts-expect-error
  plugins: [...baseConfig.plugins, require("daisyui")],
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["[data-theme=lemonade]"],
          primary: "#067a46",
          secondary: "#07ba3d",
          accent: "#FFDB58",
          neutral: "#2d2f39",
          "bg-base-100": "#F2F2F3",
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
