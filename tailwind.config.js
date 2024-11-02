/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
        MilkyCoffee: ["MilkyCoffee"],
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      backgroundColor: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
      },
      borderColor: {
        primary: "var(--color-border-primary)",
      },
      colors: {},
    },
  },
  plugins: [],
};
