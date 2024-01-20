/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        merienda: ['Merienda', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
