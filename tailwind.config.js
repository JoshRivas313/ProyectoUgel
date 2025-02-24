/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1A4E7E', // Agregamos el color personalizado
      },
    },
  },
  plugins: [],
};
