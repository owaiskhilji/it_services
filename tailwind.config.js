/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        merriweather: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #000000 11%, #18c3c3 100%)",

      },
    },
  },
  plugins: [],
};
