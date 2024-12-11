/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      colors: {
        primary: "#a3e635",
        secondary: "#fee2e2"
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          lg: "1320px",
        }
      }
    },
  },
  plugins: [],
}