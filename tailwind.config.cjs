/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xss: "300px",
      xs: "340px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
