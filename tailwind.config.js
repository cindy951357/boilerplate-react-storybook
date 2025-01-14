/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        secondary: '#BBB0CD', //暮霧紫
      },
      outlineColor: {
        secondary: '#BBB0CD', //暮霧紫
      },
    },
  },
  plugins: [],
}

