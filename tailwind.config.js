/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B00",
          dark: "#CC5500",
          light: "#FF8C33",
        },
        dark: {
          DEFAULT: "#0D0D0D",
          100: "#1A1A1A",
          200: "#262626",
          300: "#333333",
        },
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        gauge: "gaugeSpin 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        counter: "counter 2s ease-out forwards",
      },
      keyframes: {
        gaugeSpin: {
          "0%, 100%": { transform: "rotate(-45deg)" },
          "50%": { transform: "rotate(45deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
