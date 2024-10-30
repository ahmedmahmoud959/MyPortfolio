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
        subPrimary:"#fda900",
        "primary-op": "rgb(255, 189, 57 ,0.4)",
        "secondy-op": "rgba(30, 36, 43, 0.4)",
        "primary-grad":
          "linear-gradient(to top, #FFF5DB 0%, #FFC765 42%, #FFBD39 78%);",
        "font-gray": "#B6B6B6",
        
      },
      height: {
        'hero': 'calc(100dvh - 40px)',
      },
    },
  },
  plugins: [],
};
