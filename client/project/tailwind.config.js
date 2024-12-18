/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Ativa o modo escuro com a classe 'dark'
  theme: {
    extend: {
      colors: {
        sun: {
          background: "#A294F9",
          primary: "#E5D9F2",
          secondary: "#CDC1FF",
          accent: "#F5EFFF",
        },
        dark: {
          background: "#213555",
          primary: "#3E5879",
          secondary: "#D8C4B6",
          accent: "#F5EFE7",
        },
      },
      backgroundImage: {
        banner: "url('/src/assets/images/banner-background.jpg')",
      },
    },
  },
  plugins: [],
};
