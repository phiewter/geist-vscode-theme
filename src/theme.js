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

      // Activity Bar
      "activityBar.background": secondaryBackground,
      "activityBar.foreground": foreground,
      "activityBar.inactiveForeground": secondaryForeground,
      "activityBar.border": border,
      "activityBarBadge.background": color.blue[700],
      "activityBarBadge.foreground": foreground,

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
      "editorGroupHeader.tabsBackground": secondaryBackground,
      "editorWidget.background": secondaryBackground,
      "editorWarning.foreground": color.amber[500],
      "editorError.foreground": color.red[500],

      "editorOverviewRuler.border": border,
      "editorGutter.addedBackground": color.green[600],
      "editorGutter.deletedBackground": color.red[600],
      "editorGutter.modifiedBackground": color.amber[600],
      "diffEditor.insertedTextBackground": color.green[300],
      "diffEditor.insertedLineBackground": color.green[100],
      "diffEditor.removedTextBackground": color.red[300],
      "diffEditor.removedLineBackground": color.red[100],
      // "editorInlayHint.foreground": color.pink[700],
      // "editorInlayHint.background": color.pink[700],

      // Status Bar colors
      "statusBar.background": secondaryBackground,
      "statusBar.foreground": foreground,
      "statusBar.border": border,
      "statusBar.debuggingBackground": secondaryBackground,
      "statusBar.debuggingForeground": foreground,
      "statusBar.debuggingBorder": border,
    },
  };
}

module.exports = getTheme;
