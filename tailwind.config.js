/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
          primary: "#006967",
          secondary: "#003d3b",
          accent: "#05b3af",
          neutral: "#b3e4e4",
          info: "#0CA5E9",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",
          }
        }
      ]
    }
  },
  plugins: [
    require("daisyui")
  ],
}

