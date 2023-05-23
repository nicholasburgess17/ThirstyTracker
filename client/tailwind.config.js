/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
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