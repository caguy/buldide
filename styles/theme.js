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
  },
  fontFamily: {
    body: ["Heebo", "Roboto", "sans-serif"],
  },
  spacing: {
    0: "0px",
    1: "0.25em",
    2: "0.5em",
    3: "1em",
    4: "2em",
    5: "4em",
  },
  extend: {},
};
