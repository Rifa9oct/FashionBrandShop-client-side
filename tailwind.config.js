/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pacifico:" 'Pacifico', cursive ",
        youngSerif:" Young Serif', serif "
      }
    },
  },
  plugins: [require("daisyui")],
}