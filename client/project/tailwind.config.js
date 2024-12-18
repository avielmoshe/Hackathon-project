/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Azul
        secondary: '#FBBF24', // Amarelo
        accent: '#10B981', // Verde
      },
    },
  },
  plugins: [],
};
