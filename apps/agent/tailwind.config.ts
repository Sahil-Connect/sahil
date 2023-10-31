import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'black': '#232323',
        'black-dark': '#121212',
        'green': '#067a46',
        'green-dark': '#056835',
        'gray': '#C3C3D5',
        'white': '#FAFAFA',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require('daisyui/src/theming/themes')['[data-theme=lemonade]'],
          'primary': '#067a46',
          'secondary': '#056835',
          'accent': '#40efcf',
          'neutral': '#2d2f39',
          'base-100': '#ffffff',
          'info': '#76d1e5',
          'success': '#22a05b',
          'warning': '#f0bc2d',
          'error': '#e33631',
        },
      },
    ],
  },
};
export default config;
