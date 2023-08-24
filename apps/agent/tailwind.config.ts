import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      xs: '320px',
      sm: '520px',
      md: '568px',
      lg: '768px',
      xl: '820px',
      xxl: '968px',
      '2xl': '1024px',
      '3xl': '1200px',
      '4xl': '1400px',
      '5xl': '1700px',
    },
    extend: {
      colors: {
        'black': '#232323',
        'blackDark': '#121212',
        'green': '#067a46',
        'greenDark': '#056835',
        'gray': '#C3C3D5',
        'white': '#F6F6F7',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #232323 0%, #232323 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        forest: {
          ...require('daisyui/src/theming/themes')['[data-theme=forest]'],
          'base-100': '#f4f4f6',
          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
        },
      },
    ],
  },
};
export default config;
