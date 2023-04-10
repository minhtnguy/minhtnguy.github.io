/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'teal': '#006794',
        'pink': '#E0838E',
        'black': '#2E2E2E',
        // 'half-court-sports-pink': '#F4CDD4'
      }
    },
  },
  plugins: [require("daisyui")],
}

