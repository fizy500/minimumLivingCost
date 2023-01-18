/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("./assets/hero.png")',
        'grid1': 'url("./assets/gridpic1.png")',
        'grid2': 'url("./assets/gridpic2.png")',
        'grid3': 'url("./assets/gridpic3.png")',
        'grid4': 'url("./assets/gridpic4.png")',
      },
      content: {
        'quote':'url("./assets/quote.svg")',
      },
      fontFamily: {
        fontdmsans: ["DM Sans", "sans-serif"],
        fontinter: ["Inter", "sans-serif"],
        fontpoppins: ["Poppins", "sans-serif"],
        fontmontserrat: ["Montserrat", "sans-serif"],
        fontmontManrope: ["Manrope", "sans-serif"],
        fontmontassistant:["Assistant", "sans-serif"],
      }
      
    },
  },
  plugins: [],
}
