/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,htm,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

