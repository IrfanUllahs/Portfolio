/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#DC143C",
        secondary: "#D0D6F9",
        tertiary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
