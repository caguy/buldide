const colors = require("tailwindcss/colors");

module.exports = {
  colors: {
    black: "#06040D",
    gray: colors.blueGray,
    white: "white",
    primary: {
      DEFAULT: "#7655FE",
      dark: "#6347D6",
      light: "#EFEBFF",
      transparent: "rgba(118, 85, 254, 0.2)",
    },
    error: {
      DEFAULT: colors.red[500],
      light: colors.red[100],
      dark: colors.red[900],
    },
  },
  fontFamily: {
    body: ["Heebo", "Roboto", "sans-serif"],
  },
  spacing: {
    0: "0px",
    1: "0.25em",
    2: "0.5em",
    4: "1em",
    6: "1.5em",
    8: "2em",
    16: "4em",
  },
  opacity: {
    0: "0",
    40: ".4",
    80: ".8",
  },
  extend: {},
};
