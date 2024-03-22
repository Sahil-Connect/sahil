import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const extendedConfig: Config = {
  ...baseConfig,
  content: [
    // @ts-expect-error
    ...baseConfig.content,
    "./src/**/**/**.{js,ts,jsx,tsx,mdx}",
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
          "bg-base-100": "#ffffff",
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
