const darkColors = require("./colors/dark.json");

function getColors(theme) {
  switch (theme) {
    case "dark":
      return darkColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = { getColors };
