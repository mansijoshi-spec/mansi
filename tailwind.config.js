/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        bg: "#fff8ed",
        primary: "#2273f3",
        "pink-stroke": "#fda8ab",
        "powder-pink": "#ffe5e6",
        "powder-blue": "#e5eeff",
        "dark-grey": "#46484c",
        black: "#09111e",
      },
    },
  },
  plugins: [],
};
