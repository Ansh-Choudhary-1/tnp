/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
      },
      backgroundImage: {
        'dotted-pattern': 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-lg': '24px 24px',
      },
    },
  },
  plugins: [],
}