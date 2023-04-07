/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'teal': '#006794',
        'pink': '#E0838E',
        'black': '#2E2E2E'
      }
    },
  },
  plugins: [require("daisyui")],
}

