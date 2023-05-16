/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#0C134F',
        secondary: '#1D267D',
        tertiary: '#5C469C',
        quaternary: '#D4ADFC',
      },
    },
  },
  plugins: [],
}