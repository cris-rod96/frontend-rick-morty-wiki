/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0,255,0,0.50)",
      },
    },
  },
  plugins: [],
};
