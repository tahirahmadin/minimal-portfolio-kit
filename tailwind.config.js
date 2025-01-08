/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        accent: '#8B5CF6',
        stats: {
          green: '#059669',
          yellow: '#D97706',
          pink: '#E11D48'
        }
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
}