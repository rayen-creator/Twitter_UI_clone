/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        hover_color:"#1577c6"
      },
    },
  },
  plugins: [],
};
