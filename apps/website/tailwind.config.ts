import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      'xs': '320px',
      'sm': '520px',
      'md': '568px',
      'lg': '768px',
      'xl': '820px',
      'xxl': '968px',
      '2xl': '1024px',
      '3xl': '1200px',
      '4xl': '1400px',
      '5xl': '1700px',
    },
    extend: {
      fontSize: {
        'smaller': '.75rem',
        'small': '.813rem',
        'base': '.938rem',
        'h3': '1rem',
        'h2': '1.25rem',
        'h1': '1.5rem',
        'bigger': '1.75rem',
        'biggest': '2.25rem',
        
        'smallerxl': '.813rem',
        'smallxl': '.873rem',
        'basexl': '1rem',
        'h3xl': '1.25rem',
        'h2xl': '1.5rem',
        'h1xl': '2.25rem',
        'biggerxl': '3.25rem',
        'biggestxl': '4rem',
      },
      colors: {
        'black': '#232323',
        'black-dark': '#121212',
        'green': '#067a46',
        'green-dark': '#056835',
        'gray': '#C3C3D5',
        'white': '#FAFAFA',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #232323 0%, #232323 100%)',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: ['lemonade'],
  // },
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
