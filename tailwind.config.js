/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista estilo Apple
        'white': '#FFFFFF',
        'black': '#000000',
        'gray-50': '#FAFAFA',
        'gray-100': '#F5F5F5',
        'gray-200': '#E5E5E5',
        'gray-300': '#D4D4D4',
        'gray-400': '#A3A3A3',
        'gray-500': '#737373',
        'gray-600': '#525252',
        'gray-700': '#404040',
        'gray-800': '#262626',
        'gray-900': '#171717',
        // Cores de acento sutis
        'sage': '#8B9D7F',
        'sage-light': '#A8B8A0',
        'olive': '#6B7F5C',
        // Mantendo cores existentes para compatibilidade
        'cream': '#FAFAFA',
        'beige': '#F5F5F5',
        'dark': '#1D1D1F',
        'charcoal': '#86868B',
      },
      fontFamily: {
        'display': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Helvetica Neue', 'sans-serif'],
        'body': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(1.75rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 3.5vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 12vw, 8rem)',
        'section-sm': 'clamp(3rem, 8vw, 6rem)',
      },
      letterSpacing: {
        'wide': '0.05em',
        'tighter': '-0.02em',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
