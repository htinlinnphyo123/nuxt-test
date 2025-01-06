// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
