/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: {
          100: "#e9effb",
          200: "#bdd0f4",
          300: "#91b0ed",
          400: "#6590e6",
          500: "#3971df",
          600: "#2057c6",
          700: "#19449a",
          800: "#12306e",
          900: "#0b1d42",
          950: "#040a16",
        },
        secondary: {
          100: "#e9e7fe",
          200: "#bdb7fb",
          300: "#9287f8",
          400: "#6657f5",
          500: "#3a27f2",
          600: "#210dd8",
          700: "#1a0aa8",
          800: "#120778",
          900: "#0b0448",
          950: "#040118",
        },
        yellow: {
          50: "#fef6e6",
          100: "#fde5b5",
          200: "#fcd483",
          300: "#fac251",
          400: "#f9b120",
          500: "#df9706",
          600: "#ae7605",
          700: "#7c5403",
          800: "#4a3202",
          900: "#191101",
        },
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        gray: "#8492a6",
      },
      fontFamily: {
        sans: ["Montserrat", "Inter var"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
