/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        30: "30deg",
        60: "60deg",
      },
      boxShadow: {
        card: "0px 0px 15px rgba(0, 0, 0, 0.8)",
        neoCardBack: "-35px -35px 120px #bebebe, 35px 35px 120px #ffffff;",
        neoCardFront: "35px 35px 120px #d9d9d9, -35px -35px 120px #ffffff;",
        neoInput:
          "inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;",
      },
      backgroundColor: {
        bgFront: "linear-gradient(145deg, #ffffff, #e6e6e6)",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
