/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [require('nativewind/tailwind/css')],
    important: 'html',
    theme: {
      extend: {
        colors: {
          'primary': '#195D26',
          'secondary': '#239411',
          'tertiary': '#247349',
        //   'quaternary': '#cfe4ff',
        },
      },
    },
    plugins: [],
  }