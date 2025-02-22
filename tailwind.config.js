/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgClr1: "#149957"
      },
      fontSize: {
        'heading-xl': "max(5.125rem,min(6.3333vw + 1rem,11rem))",
        'heading-lg': "max(5.125rem,min(5vw + 1rem,11rem))"
      },
    },
  },
  plugins: [],
}

