/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        asparagus: '#60993E',
        'magenta-haze': '#9E4770',
        tomato: '#FF6542',
        'rich-black': '#011627',
        'dutch-white': '#F2E2BA',
      },
      fontFamily: {
        sans: ['"Red Hat Display"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'wave': 'wave 2.5s ease-in-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(20.0deg)' },
          '30%': { transform: 'rotate(-6.0deg)' },
          '45%': { transform: 'rotate(15.0deg)' },
          '60%': { transform: 'rotate(-4.0deg)' },
          '75%': { transform: 'rotate(10.0deg)' },
          '85%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
    },
  },
  plugins: [],
};