/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'alma-yellow': '#FFE500',
      },
    },
  },
  plugins: [],
}
