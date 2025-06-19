/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      colors: {
        'sao-joao': {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fcddff',
          300: '#fabbff',
          400: '#f589ff',
          500: '#ed56ff',
          600: '#d333ea',
          700: '#b123c6',
          800: '#921ea2',
          900: '#7a1d84',
        }
      },
      backgroundImage: {
        'festa-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'sao-joao-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      }
    },
  },
  plugins: [],
}