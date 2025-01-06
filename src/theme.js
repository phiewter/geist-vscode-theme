const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const color = getColors(theme);

  const border = color.gray[200];
  const foreground = color.gray[1000];
  const secondaryForeground = color.gray[900];
  const background = color.background[100];
  const secondaryBackground = color.background[200];

  return {
    name: name,
    colors: {
      // Input control
      "input.background": background,
      "input.foreground": secondaryForeground,
      "input.placeholderForeground": secondaryForeground,
      "input.border": color.gray[400],
      "inputOption.activeBackground": color.gray[300],
      "inputOption.hoverBackground": color.gray[200],
      "inputOption.activeForeground": foreground,
      "inputOption.activeBorder": color.gray[600],
      "inputValidation.errorBackground": color.red[200],
      "inputValidation.errorForeground": color.red[1000],
      "inputValidation.errorBorder": color.red[600],
      "inputValidation.infoBackground": color.blue[200],
      "inputValidation.infoForeground": color.blue[1000],
      "inputValidation.infoBorder": color.blue[600],
      "inputValidation.warningBackground": color.amber[200],
      "inputValidation.warningForeground": color.amber[1000],
      "inputValidation.warningBorder": color.amber[600],

      // Side Bar
      "sideBar.background": secondaryBackground,
      "sideBar.foreground": foreground,
      "sideBar.border": border,
      "sideBarTitle.foreground": foreground,
      "sideBarSectionHeader.background": secondaryBackground,
      "sideBarSectionHeader.foreground": foreground,
      "sideBarSectionHeader.border": border,
      "sideBarActivityBarTop.border": border,
      "sideBarTitle.background": secondaryBackground,
      "sideBarTitle.border": border,
      "sideBarStickyScroll.background": secondaryBackground,
      "sideBarStickyScroll.border": border,

      // Editor colors
      "editor.background": secondaryBackground,
      "editor.foreground": foreground,

      "editorLineNumber.foreground": color.gray[600],
      "editorLineNumber.activeForeground": foreground,
      "editorLineNumber.dimmedForeground": color.gray[400],

      "editor.selectionBackground": color.blue[700],
      "editor.selectionHighlightBackground": color.blue[700],

      "editorGroupHeader.tabsBackground": color.background[200],

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
