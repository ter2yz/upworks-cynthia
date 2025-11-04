/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Barlow Condensed"', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'alma-yellow': '#FFE500',
      },
    },
  },
  plugins: [],
}
