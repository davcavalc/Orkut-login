/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#d4ddee",
      bordalogin: "#fbffff",
      footer: "#bccde9",
      linkform: "#62739d",
      red: "#fd1605",
      slate: colors.slate,
      white: colors.white,
      blue: colors.blue,
      yellow: colors.yellow,
      // amber: colors.amber,
      pink: colors.pink,
      yellow: colors.amber,
    },
    extend: {},
  },
  plugins: [],
};
