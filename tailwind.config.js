/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mpDarkGreen: '#8DB90D',
        mpLightGreen: '#B3E817',
        mpLightBlack: '#222222',
        mpLightGray: '#A8A8A8',
      }
    },
  },
  plugins: [],
}