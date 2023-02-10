/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        carouselBg: 'url("src/assets/rooms/carousel1.png")',
      },
      animation: {
        carouselAnimation: "slide 60s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
