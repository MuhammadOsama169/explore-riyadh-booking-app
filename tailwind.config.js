/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        pink_pop: "#ff2b79",
        green_light: "#add900",
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
