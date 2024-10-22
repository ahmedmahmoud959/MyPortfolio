/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // prime react
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFBD39",
        secondy: "#1E242B",
        "font-gray": "#B6B6B6",
      },
    },

  },
  plugins: [],
};
