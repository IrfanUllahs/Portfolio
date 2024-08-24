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
        secondary: "#ECEDEE",
        tertiary: "#FFFFFF",
      },
      screens: {
        xs: "450px",
        cm: "950px",
      },
    },
  },
  plugins: [],
};
