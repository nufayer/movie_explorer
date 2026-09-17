/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e50914',
        dark: {
          100: '#1a1a1a',
          200: '#141414',
          300: '#0d0d0d',
        },
      },
    },
  },
  plugins: [],
};
