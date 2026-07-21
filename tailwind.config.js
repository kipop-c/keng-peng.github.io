/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1100px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#f0f4f9",
          100: "#d9e3ed",
          200: "#b3c7db",
          300: "#8dabd9",
          400: "#678fc7",
          500: "#4173b5",
          600: "#2f5a94",
          700: "#1e3a5f",
          800: "#162c48",
          900: "#0e1d30",
        },
        accent: {
          50: "#fdf9ed",
          100: "#faf0c8",
          200: "#f5e191",
          300: "#efd25a",
          400: "#e9c323",
          500: "#c9a227",
          600: "#a6841f",
          700: "#836617",
          800: "#60480f",
          900: "#3d2a07",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "Times New Roman", "serif"],
        sans: ['"Source Sans 3"', "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
