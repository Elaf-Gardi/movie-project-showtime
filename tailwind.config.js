/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#191D26',
        darkRed: '#531516',
        lightRed: '#661B1C',
        darkGray: '#12151C',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans'],
        Poppins: ['Poppins', 'Roboto', 'sans'],
      },
    },
    plugins: [],
  },
}
