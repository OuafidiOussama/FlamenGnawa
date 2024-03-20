/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'black': '#000',
      'white': '#FFF',
      'red': '#FC0D0D',
      'dark-purple' : '#190F1C',
      'pink': '#ea8290'
    },
    fontFamily:{
      'main': ['Lemon'],
      'arabic': ['Lemonada'],
      'description' :['Lexend'],

    },
    extend: {},
  },
  plugins: [],
}