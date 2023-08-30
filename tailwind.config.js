/** @type {import('tailwindcss').Config} */
import tailwindColors from 'tailwindcss/colors'

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      quicksand: [
        'Neufile Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
      ],
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1408px',
      '2xl': '1536px',
    },
    borderRadius: {
      none: '0px',
      xs: '2px',
      sm: '4px',
      DEFAULT: '2px',
      md: '8px',
      lg: '16px',
      xl: '32px',
      full: '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
