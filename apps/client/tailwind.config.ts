import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const extendedConfig: Config = {
  ...baseConfig,
  content: [
    // @ts-expect-error
    ...baseConfig.content,
    "./src/Addresses/**/**.{js,ts,jsx,tsx,mdx}",
    "./src/Maps/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Payments/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Reports/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Zones/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Businesses/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Suppliers/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Products/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/Layout/*.{js,ts,tsx,tsx,mdx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
  safelist: [
    {
      pattern: /bg-\w+/,
    },
    {
      pattern: /text-\w+/,
    },
  ],
  // @ts-expect-error
  plugins: [...baseConfig.plugins, require("daisyui")],
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["lemonade"],
          primary: "#067a46",
          secondary: "#056835",
          accent: "#ffdb57",
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
