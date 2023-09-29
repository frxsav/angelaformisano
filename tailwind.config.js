/** @typE3FED8 {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "c-outside": "#59cd76",
        "c-inside": "#F0FBF8",
        "c-text": "#104566",
        "c-blue": "#A9E4E6",
      },
    },
  },
  plugins: [],
};
