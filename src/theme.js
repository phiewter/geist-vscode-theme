const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const color = getColors(theme);

  const background = color.background[100];
  const secondaryBackground = color.background[200];

  const foreground = color.gray[1000];
  const secondaryForeground = color.gray[900];

  const border = color.gray[200];

  return {
    name: name,
    colors: {
      // Global
      "badge.background": color.pink[700],
      "badge.foreground": color.background,
      "icon.foreground": color.gray[900],

      // Base colors
      focusBorder: color.gray[400],
      "widget.border": border,
      "widget.shadow": secondaryBackground,

      // Window colors
      "window.activeBorder": border,
      "window.inactiveBorder": border,

      // Button control
      "button.background": color.blue[700],
      "button.foreground": foreground,
      "button.hoverBackground": color.blue[800],

      // Dropdown control
      "dropdown.background": background,
      "dropdown.listBackground": color.pink[600],
      "dropdown.border": border,
      "dropdown.foreground": foreground,

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

      // Lists and trees
      "list.activeSelectionBackground": color.blue[300],
      "list.activeSelectionForeground": foreground,
      "list.inactiveSelectionBackground": color.blue[100],
      "list.focusBackground": color.gray[100],
      "list.focusOutline": "#0d0d0d", // color["gray-alpha"][100],
      "list.hoverBackground": color.blue[200],
      "list.errorForeground": color.red[900],
      "list.warningForeground": color.amber[900],
      "tree.indentGuidesStroke": border,

      // Activity Bar
      "activityBar.background": background,
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
      "diffEditor.insertedTextBackground": color.green[100],
      "diffEditor.insertedLineBackground": color.green[100],
      "diffEditor.removedTextBackground": color.red[100],
      "diffEditor.removedLineBackground": color.red[100],
      "editor.lineHighlightBorder": color.blue[600],
      "editor.lineHighlightBackground": color.background[100],

      // Status Bar colors
      "statusBar.background": secondaryBackground,
      "statusBar.foreground": foreground,
      "statusBar.border": border,
      "statusBar.debuggingBackground": secondaryBackground,
      "statusBar.debuggingForeground": foreground,
      "statusBar.debuggingBorder": border,
      "statusBarItem.remoteBackground": secondaryBackground,
      "statusBarItem.remoteForeground": foreground,

      // Tab colors
      "tab.border": border,
      "tab.activeBackground": secondaryBackground,
      "tab.inactiveBackground": background,

      // Title Bar colors
      "titleBar.activeBackground": background,
      "titleBar.activeForeground": secondaryForeground,
      "titleBar.inactiveBackground": secondaryBackground,
      "titleBar.border": border,
    },
  };
}

module.exports = getTheme;
