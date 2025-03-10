
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
      screens: {
        'custom-658': '658px', // Define un breakpoint en 658px
      },
      
    },
    boxShadow: {
      navbar: "0px 8px 11px rgba(0, 0, 0, 0.04)"
    }
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