/** @typE3FED8 {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "c-outside": "#92e6a7",
        "c-inside": "#F0FBF8",
        "c-text": "#104566",
        "c-blue": "#A9E4E6"
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
