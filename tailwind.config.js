/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Definición de tu color personalizado
        'gris-1': '#FAFAFC',
        'gris-2': '#F5F5F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
