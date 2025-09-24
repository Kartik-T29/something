// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#394508",
        lightgreen : "#D2FD9C",
        cardgreen : "#619111",
      },
    },
  },
  plugins: [],
}