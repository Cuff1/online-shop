/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#4A4947',
        bgColor: '#FAF7F0',
        fancyColor: ' #B17457',
      },
      fontFamily: {
        poppins: 'Poppins',
        pirata: 'Pirata One',
      }
    },
  },
  plugins: [
        {
          "postcss-import": {},
            tailwindcss: {},
            autoprefixer: {}
        }
      ],
}

