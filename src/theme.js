const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const color = getColors(theme);

  return {
    name: name,
    colors: {
      // Editor
      "editor.background": color.background[200],
      "editor.foreground": color.gray[1000],
    },
  };
}

module.exports = getTheme;
