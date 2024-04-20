/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        head:"Playfair Display",
        subhead:"DM Sans",
        para:"Poppins"
      },
      boxShadow:{
        shadowsh: "0px 2.98px 59.57px 0px #00000014",
        shadow2:"1px 0px 7.8px 0px #00000040"
      }
    },
  },
  plugins: [],
}

