module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#55AA68",

        dark: {
          DEFAULT: "#202020",
          400: "#353535",
        },
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
        },
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      textColor: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
