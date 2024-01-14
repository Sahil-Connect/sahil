import type { Config } from "tailwindcss";

const baseConfig: Config = require("@sahil/configs/tailwind/tailwind.config");

module.exports = {
  ...baseConfig,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
