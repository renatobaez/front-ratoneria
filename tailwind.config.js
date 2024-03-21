/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'porange' : '#ffa31a',
        'pgrey': '#808080',
        'pdark-grey': '#292929',
        'pdark': '#1b1b10'
      }
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}