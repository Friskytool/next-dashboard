module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'

  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#5865F2",
      black: "#23272A",
      grey: "#302B28",
      purple: "#F26558",
      white: "#FFFFFF",
      red: "#ED4245",
      pink: "#EB459E",
      yellow: "#FEE75C",
      green: "#57F287",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
