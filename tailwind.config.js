/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Füge benutzerdefinierte Farben hinzu, wenn nötig
      },
      // Definiere benutzerdefinierte Tabellenstile
      tableLayout: {
        auto: "auto",
        fixed: "fixed",
      },
    },
  },
  plugins: [],
};
