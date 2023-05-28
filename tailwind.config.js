/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Quicksand", "system-ui", "sans-serif"],
      mono: ["Fira Code", "system-ui", "sans-serif"],
    },
    fontSize: {
      sm: "0.7rem",
      code: "0.8rem",
      base: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
