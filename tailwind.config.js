/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Keep dark mode enabled
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#101B29',
        "bg-primary": "#0F172A",
        "secondary-dark": "#071421",
        "secondary-dark-2": "#404668",
        "secondary-dark-3": "#666F98",
        "secondary-white": "#FFFFFF",
        "secondary-orange": "#F7B176",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"], // Modern font
      mono: ["JetBrains Mono", "monospace"], // Futuristic monospace
    },
  },
  plugins: [],
};
