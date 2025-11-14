// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // google-calendar-inspired palette
        primary: {
          50:  "#eef6ff",
          100: "#d7ebff",
          200: "#aed8ff",
          300: "#7cc0ff",
          400: "#4aa7ff",
          500: "#1a73e8", // primary blue
          600: "#155ec1",
          700: "#10489a",
          800: "#0b346f",
          900: "#071f44"
        },
        accent: {
          50:  "#fff8e6",
          100: "#fff0cc",
          200: "#ffe199",
          300: "#ffd266",
          400: "#ffc233",
          500: "#ffb100"
        },
        muted: {
          100: "#f5f7fa",
          200: "#eef1f6",
          300: "#e6e9ef",
          400: "#cfd6e1",
          500: "#9aa4b2"
        },
        ui: {
          bg: "#ffffff",
          surface: "#f7fafc",
          panel: "#ffffff",
          border: "#e6edf3",
        }
      },
      boxShadow: {
        soft: "0 6px 18px rgba(12,24,48,0.08)"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: []
};
