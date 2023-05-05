/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        primary: "#006967",
        secondary: "#003d3b",
        accent: "#f59e0b",
        neutral: "#9ca3af",
        base: "#e1f4f5"
        }
      }
    ]
  },
  plugins: [
    require("daisyui")
  ],
}

