export const baseConfig = require("@sahil/configs/tailwind/postcss.config.js");

module.exports = {
  ...baseConfig,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
