/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'vercel-gray': {
          50: '#f9fafb',
          100: '#eaeaea',
          200: '#999999',
          300: '#888888',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#222222',
          800: '#111111',
          900: '#000000',
        },
        'vercel-blue': '#0070f3',
        'vercel-cyan': '#50e3c2',
        'vercel-purple': '#7928ca',
        'vercel-violet': '#8a63d2',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '25%': {
            'background-position': 'right top',
          },
          '50%': {
            'background-position': 'right bottom',
          },
          '75%': {
            'background-position': 'left bottom',
          },
        },
      },
    },
  },
  plugins: [],
};