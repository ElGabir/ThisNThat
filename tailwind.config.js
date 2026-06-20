/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#000000',
        'dark-gray': '#121212',
        'cyber-yellow': '#FFE600',
      },
      backdropFilter: {
        'glass': 'backdrop-filter: blur(10px)',
      },
      animation: {
        'pulse-yellow': 'pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wave': 'wave 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-yellow': {
          '0%, 100%': { opacity: '1', 'box-shadow': '0 0 10px rgba(255, 230, 0, 0.3)' },
          '50%': { opacity: '0.7', 'box-shadow': '0 0 20px rgba(255, 230, 0, 0.6)' },
        },
        'glow': {
          '0%, 100%': { 'text-shadow': '0 0 10px rgba(255, 230, 0, 0.5), 0 0 20px rgba(255, 230, 0, 0.3)' },
          '50%': { 'text-shadow': '0 0 20px rgba(255, 230, 0, 0.8), 0 0 40px rgba(255, 230, 0, 0.5)' },
        },
        'wave': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 230, 0, 0.5)',
        'glow-yellow-lg': '0 0 40px rgba(255, 230, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
