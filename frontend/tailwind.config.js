/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#050F1A",
        secondaryColor: "#475569",
        greyBgColor: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
