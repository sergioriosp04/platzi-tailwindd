/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#a21caf',
        'terciary': '#bae6fd',
      },
      backgroundImage: {
        'my-image': "url('https://i.imgur.com/SK9qO3L.jpg')",
        'my-image2': "url('https://i.imgur.com/PNek15a.jpg')",
      },
      backgroundColor: {
        'primary': '#CC2D4A',
        'secondary': '#a21caf',
        'terciary': '#bae6fd',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
