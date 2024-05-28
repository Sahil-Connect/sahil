import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

const extendedConfig: Config = {
  content: [
    // @ts-expect-error
    ...baseConfig.content,
    "./src/**/*.{js,ts,tsx,tsx,mdx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
  plugins: [],
};

module.exports = extendedConfig;
