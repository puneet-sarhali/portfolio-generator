/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        accentFocus: "var(--color-accent-focus)",
        accentContent: "var(--color-accent-focus)",
        accent2: "var(--color-accent2)",
      },
      fontFamily: {
        silkscreen: ["var(--font-family-silkscreen)"],
      },
      animation: {
        "pulse-slow": "pulse 3s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
