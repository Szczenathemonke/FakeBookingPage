/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },

          "100%": {
            transform: "translate3d(-1692px, 0, 0)",
          },
        },
      },
      animation: {
        carouselAnimation: "slide 60s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
