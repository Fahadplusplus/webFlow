/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-color': '#110e0f',
        'custom-color2': '#2c1e19',
        'custom-color3': '#171211',
        'vav': '#1B1E20',
        'gra': '#3a1f15',
        'custom-nav-button': '#38261d',
      },
      screens: {
           
        'th': '1440px', 
        'ab': '2560px',
        'lp': '1920px',
      },
    },
  },
  plugins: [],
}
