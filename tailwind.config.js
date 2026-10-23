/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF9F4',
          100: '#F7F4ED',
          200: '#EFEAE0',
          300: '#E4DED1',
        },
        charcoal: {
          700: '#2D2D2D',
          800: '#1E1E1E',
          900: '#121212',
        },
        forest: {
          400: '#4A7C59',
          500: '#2D6A4F',
          600: '#245A42',
          700: '#1B4332',
          800: '#14352A',
        },
        sage: {
          300: '#B7C9B5',
          400: '#95B091',
          500: '#7A9A75',
          600: '#5F7E5B',
        },
        lime: {
          300: '#E9F5C9',
          400: '#D4ED9A',
          500: '#BEE06A',
          600: '#A3C952',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        'blink': 'blink 1.2s steps(2) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
