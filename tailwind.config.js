/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#11120D",
        navy: "#3f4156",
        teal: "#697644",
        beige: "#f5efeb",
        white: "#ffffff",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        poppins: ['"Poppins"', 'serif'],
        satisfy: ['"Satisfy"', 'cursive'],
      },
    },
  },
  plugins: [],
}

