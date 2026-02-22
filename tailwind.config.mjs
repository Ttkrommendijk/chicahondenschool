/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "#8accca",
        "main-hover": "#74b8b6",
        "main-soft": "#e6f6f5",
        secondary: "#5b5476",
        "secondary-hover": "#4a4461",
        "secondary-soft": "#f1eff6",
        detail: "#2f6f68",
        text: "#1f1f29",
      },
    },
  },
  plugins: [],
};
