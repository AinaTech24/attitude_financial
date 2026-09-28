/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8ec61f',
          hover: '#7db317',
          dark: '#669610',
          light: '#f3fae7',
          subtle: 'rgba(142, 198, 31, 0.12)',
        },
        navy: {
          950: '#070d14',
          900: '#0a111a',
          850: '#0e1724',
          800: '#131e2e',
          700: '#1b283d',
          600: '#2a3c57',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'Figtree', 'sans-serif'],
        heading: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
