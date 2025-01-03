// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode by adding a class
  theme: {
    extend: {
      colors: {
        "brand-primary": "#141b4d",
        "brand-secondary": "#dd0000",
        "brand-third": "#1e73be",
        "card-secondary" : "#ff0008"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
