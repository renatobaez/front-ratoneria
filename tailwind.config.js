/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'porange' : '#ff9000',
        'pgrey': 'rgba(67, 59, 54, .9)',
        'pdark-grey': '#292929',
        'pdark': '#1b1b10'
      }
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    backgroundImage: {
      'bg-ratoneria': "url('public/bg_ratoneriac.jpg')",
    }
  },
  plugins: [],
}