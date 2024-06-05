/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#161622',
        secondary: {
          DEFAULT: "#FFC0CB", // Pink
          100: "#FFB6C1",     // Light Pink
          200: "#FF69B4"      // Hot Pink
        },        
        black:{
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533"
        },
        gray:{
          100: '#CDCDE0'
        }
      },
      fontFamily:{
        pthin: ["Poppins-Thin", "sans-serif"],
        pextraLight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-light", "sans-serif"],
        pregular: ["Poppins-Regular" , "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"]
      }
    },
  },
  plugins: [],
}

