/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        camera: "/joshua-hanson-e616t35Vbeg-unsplash.jpg"
      }
    },
  },
  plugins: [],
}