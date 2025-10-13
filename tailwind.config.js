/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables manual dark mode toggling using .dark class

  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Brand colors (matches your CSS variable theme)
        primary: "#ff55b4", // pink
        accent: "#8b5cf6", // violet
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      // optional: animations from tw-animate-css or your cursor-wave
      keyframes: {
        "cursor-wave-wobble": {
          "0%": {
            transform: "scale(0.85) translate3d(-9999px,-9999px,0)",
            opacity: "0.9",
          },
          "50%": {
            transform: "scale(1.05) translate3d(-9999px,-9999px,0)",
            opacity: "0.6",
          },
          "100%": {
            transform: "scale(0.9) translate3d(-9999px,-9999px,0)",
            opacity: "0.9",
          },
        },
      },
      animation: {
        "cursor-wave": "cursor-wave-wobble 1.2s infinite ease-in-out",
      },
    },
  },

  plugins: [
    require("tw-animate-css"), // include only if you’re using tw-animate-css
  ],
};
