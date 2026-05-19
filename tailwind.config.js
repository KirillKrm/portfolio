/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#070714',
        surface: '#0f0f23',
        accent: '#7c3aed',
        'accent-light': '#a78bfa',
        'text-primary': '#f8fafc',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
