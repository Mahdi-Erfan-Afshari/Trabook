/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      boxShadow: {
        '3xl' : '0px 0px 20px 2px #eee'
      },
      
      colors: {
        Orange: '#FA7436',
        LightOrange: '#FFBFA2',
        BrightOrange: '#ff8a40',
        BrightSupOrange: '#ff9d8d',
        BrightSupLightOrange: '#ff793b6c',
        SupLightOrange: '#ffe8dd',
        Blue: '#4086F4',
        Black: '#222',
        LightBlack: '#444',
        BrightBlack: '#666',
        Gray: '#999',
        LightGray: '#E5E5E5',
        BrightGraySupLight: '#F7F8Fc',
        White: '#FEFCFB',
        Yellow: '#FFB60A'
      }
    },
  },
  plugins: [],
}
