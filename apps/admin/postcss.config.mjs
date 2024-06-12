/** @type {import('postcss-load-config').Config} */
const baseConfig = require('@sahil/configs/tailwind/postcss.config.js');

const config = {
  ...baseConfig,
  plugins: {
    tailwindcss: {},
  },
};

export default config;
