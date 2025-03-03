/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color_logo: "#e97338"

      },
    },
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline_custom': {
                textDecoration: 'underline',
                textDecorationColor: '#e97338',
                textDecorationThickness: "2px", // Más grueso
                textUnderlineOffset: "5px",     // Más abajo
            },
        }
        addUtilities(extendUnderline)
    }
],
}