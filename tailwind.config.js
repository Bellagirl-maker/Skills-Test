/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.html',  
    './src/**/*.{js,ts}' ],
  theme: {
    extend: {
      colors: {
        pageBg: '#F6F7F8',
      }
    },
  },
  plugins: [],
}

