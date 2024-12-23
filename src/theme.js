const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const color = getColors(theme);

  return {
    name: name,
    colors: {
      "textLink.foreground": color.background[100],
    },
  };
}

module.exports = getTheme;
