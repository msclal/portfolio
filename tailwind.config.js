/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        tech: {
          postman: "#ed7547",
          tailwind: "#53b5d1",
          react: "#82d8f8",
          javascript: "#edde67",
          typescript: "#4476c2",
          node: "#7aa568",
          mongo: "#429255",
          firebase: "#f2aa3e",
          python: "#436f9d",
          figma: "#985df5",
          cypress: "#526870",
          git: "#e15a39",
          cpp: "#5E97D0",
        },
      },
    },
  },
  plugins: [],
};
