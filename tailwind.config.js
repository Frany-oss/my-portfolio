/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class', // Keep dark mode enabled
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#121F2F',
        'secondary-dark': "#2B334E",
        'secondary-dark-2': '#404668',
        'secondary-dark-3': '#666F98',
        'secondary-white': '#FFFFFF',
        'secondary-orange': '#F7B176',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font
        mono: ['JetBrains Mono', 'monospace'], // Futuristic monospace
      },
    },
  },
  plugins: [],
};

