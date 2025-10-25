/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'verde-escuro': '#2F4F4F',
        'bege-claro': '#F8F4EC',
        'preto-suave': '#333333'
      }
    },
  },
  plugins: [],
};
