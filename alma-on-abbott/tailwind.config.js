/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'alma-yellow': '#FFE500',
      },
    },
  },
  plugins: [],
}
