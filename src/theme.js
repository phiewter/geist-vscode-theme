const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const color = getColors(theme);

  return {
    name: name,
    colors: {
      // Editor
      "editor.background": color.background[200],
      "editor.foreground": color.gray[1000],
      "editor.selectionBackground": "#FFFFFF25",
      "editor.selectionHighlightBackground": "#FFFFFF25",
      "editorLineNumber.foreground": color.gray[900],
      "editorGroupHeader.tabsBackground": "#101010",
      "editorWidget.background": color.background[200],
      "editorWarning.foreground": color.amber[500],
      "editorError.foreground": color.red[500],
      "editorOverviewRuler.border": "#101010",
      "editorGutter.addedBackground": "#99FFE4",
      "editorGutter.deletedBackground": "#FF8080",
      "editorGutter.modifiedBackground": "#FFC799",
      "diffEditor.insertedTextBackground": "#99FFE415",
      "diffEditor.insertedLineBackground": "#99FFE415",
      "diffEditor.removedTextBackground": "#FF808015",
      "diffEditor.removedLineBackground": "#FF808015",
      "editorInlayHint.foreground": "#A0A0A0",
      "editorInlayHint.background": "#1C1C1C",
    },
  };
}

module.exports = getTheme;
