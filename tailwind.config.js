/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first': '#210535',
        'second': '#440C4D',
        'third': '#7B337D',
        'fourth': '#C973B4',
        'fifth': '#F5D5E0'
      }
    },
  },
  plugins: [],
}

