import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const extendedConfig: Config = {
  ...baseConfig,
  content: [
    // @ts-expect-error
    ...baseConfig.content,
    "./src/**/*.{js,ts,tsx,tsx,mdx}",
  ],
  theme: {
    ...baseConfig.theme,
    fontFamily: {
      inter: ["var(--font-inter)"],
      jakarta: ["var(--font-jakarta)"],
    },
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
  plugins: [...baseConfig.plugins, require("daisyui")],
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["lemonade"],
          primary: "#067a46",
          secondary: "#07ba3d",
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
