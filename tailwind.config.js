/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Nova paleta moderna e sofisticada
        'cream': '#F9F8F6',
        'beige': '#E8DDD2',
        'sage': '#8B9D7F',
        'sage-light': '#A8B8A0',
        'olive': '#6B7F5C',
        'dark': '#2A2A2A',
        'charcoal': '#3D3D3D',
        'warm': '#D4A574',
        'accent': '#7F6D5C'
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
      },
      letterSpacing: {
        'wide': '0.05em',
      }
    },
  },
  plugins: [],
};
