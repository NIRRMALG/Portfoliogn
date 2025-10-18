/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    require("@tailwindcss/forms"),
  ],
};
