/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Roboto": ["Roboto", "sans"],
      "Poppins": ["Poppins", "Roboto", "sans"]
    }
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}
