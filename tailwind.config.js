/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Dark-Gray': 'hsl(0, 0%, 55%)',
        'Very-Dark-Gray': 'hsl(0, 0%, 41%)',
      },
      container:{
        center: true,
        padding: '2rem'
      }
    },
  },
  plugins: [],
}

