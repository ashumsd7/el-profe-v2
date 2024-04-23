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
          50: "#f5f3ef",
          100: "#f5f3ef",
          200: "#e2dccf",
          300: "#cfc5b0",
          400: "#bcae90",
          500: "#a99670",
          600: "#8f7d56",
          700: "#6f6143",
          800: "#4f4530",
          900: "#302a1d",
          950: "#100e0a",
        },
        secondary: {
          50: "#f5f3ef",
          100: "#f2f2f2",
          200: "#d9d9d9",
          300: "#bfbfbf",
          400: "#a6a6a6",
          500: "#8c8c8c",
          600: "#737373",
          700: "#595959",
          800: "#404040",
          900: "#262626",
          950: "#0d0d0d",
        },
        yellow: {
          50: "#f5f3ef",
          100: "#f9f2eb",
          200: "#eed7c3",
          300: "#e3bc9b",
          400: "#d8a274",
          500: "#cd874c",
          600: "#b36d32",
          700: "#8b5527",
          800: "#643d1c",
          900: "#3c2411",
          950: "#140c06",
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
