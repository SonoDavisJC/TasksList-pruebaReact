/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/components/*.jsx','./src/*.jsx','./src/components/miniComponents/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Edu NSW ACT Foundation', 'cursive','serif']
      }
    },
  },
  plugins: [],
}

