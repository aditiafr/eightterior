const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d1dbea",
          200: "#a4b6d5",
          300: "#7692bf",
          400: "#496daa",
          500: "#1b4995",
          600: "#163a77",
          700: "#102c59",
          800: "#0b1d3c",
          900: "#050f1e"
        },
        second: {
          100: "#cfefdc",
          200: "#9fdeb8",
          300: "#6ece95",
          400: "#3ebd71",
          500: "#0ead4e",
          600: "#0b8a3e",
          700: "#08682f",
          800: "#06451f",
          900: "#032310"
        },
      }
    },
  },
  plugins: [],
});