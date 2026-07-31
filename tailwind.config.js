/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#f6f5f1",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-soft": "rgb(var(--surface-soft) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        neon: "#c8ff3d",
        cyan: "#4df0ff",
        pink: "#ff4fd8",
        orange: "#ff7a1a",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
