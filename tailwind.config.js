/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        gray : {
          "50%" : "rgba(44, 44, 44, 0.24)",
          "40%"  : "#959595",
          "30%" : "rgba(2, 2, 3, 0.36)",
        },

        yellow : {
          "50%" : "#FFEB3B",
        },
        purple : {
          "dark" : '#4024AA',
          "40%" : "#6741FE",
          "50%" : '#7049C3'
        },
        green : {
          "50%" : "#19FB9B"
        }
      },
      fontFamily : {
        "Neuton" : ["Neuton", "serif"],
      }
    },
  },
  plugins: [],
}