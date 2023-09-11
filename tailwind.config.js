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
        // xlg: { min: "1280px", max: "1490px" },
        xl: "1280px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        notoSans: ["var(--font-notoSans)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        robotoMono: ["var(--font-robotoMono)", "monospace"],
      },
      colors: {
        tech: {
          postman: "#ed7547",
          openai: "#0BA37F",
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
          prisma: "#0C344B",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
