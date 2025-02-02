const { getColors } = require("./colors");

function getTheme({ theme, name, type }) {
  const color = getColors(theme);

  const background = color.background[100];
  const secondaryBackground = color.background[200];

  const foreground = color.gray[1000];
  const secondaryForeground = color.gray[900];

  const border = color.gray[200];

  const pink = color.rayso["pink"];
  const green = color.rayso["green"];
  const purple = color.rayso["purple"];
  const blue = color.rayso["blue"];

  return {
    name: name,
    type: type,
    colors: {
      // Global
      "badge.background": color.blue[700],
      "badge.foreground": color.foreground,
      "icon.foreground": color.gray[900],

      // Base colors
      focusBorder: color.gray[400],
      "widget.border": border,
      "widget.shadow": secondaryBackground,

      // Window colors
      "window.activeBorder": border,
      "window.inactiveBorder": border,

      // Text colors
      "textLink.activeForeground": color.blue[800],
      "textLink.foreground": color.blue[700],

      // Action color
      "toolbar.hoverBackground": "#00000000",
      "toolbar.hoverOutline": secondaryForeground,
      "toolbar.activeBackground": color["gray-alpha"][300],

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

      // Scrollbar control
      "scrollbar.shadow": border,
      "scrollbarSlider.activeBackground": color["gray-alpha"][300],
      "scrollbarSlider.background": color["gray-alpha"][100],
      "scrollbarSlider.hoverBackground": color["gray-alpha"][200],

      // Lists and trees
      "list.activeSelectionBackground": color["gray-alpha"][300],
      "list.activeSelectionForeground": foreground,
      "list.inactiveSelectionBackground": color["gray-alpha"][100],
      "list.focusBackground": color.gray[100],
      "list.focusOutline": "#0d0d0d",
      "list.hoverBackground": color["gray-alpha"][200],
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
      "sideBar.foreground": color["gray-alpha"][900],
      "sideBar.border": border,
      "sideBarTitle.foreground": color["gray-alpha"][900],
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

      // "editor.lineHighlightBorder": color.blue[600],
      "editor.lineHighlightBackground": color.blue[300],

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
    tokenColors: [
      {
        name: "Keyword Control",
        scope: ["keyword.control"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "Storage Type",
        scope: ["storage.type"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "Variable Other Constant",
        scope: ["variable.other.constant"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "Entity Name Function",
        scope: ["entity.name.function"],
        settings: {
          foreground: purple,
        },
      },
      {
        name: "Punctuation Separator Key Value",
        scope: ["punctuation.separator.key-value.tsx"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "Keyword Operator Type Annotation",
        scope: ["keyword.operator.type.annotation"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "Entity Name Type",
        scope: ["entity.name.type"],
        settings: {
          foreground: purple,
        },
      },
      {
        name: "Entity Name Tag",
        scope: ["entity.name.tag"],
        settings: {
          foreground: green,
        },
      },
      {
        name: "Support Class Component",
        scope: ["support.class.component"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "Entity Other Attribute Name",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: purple,
        },
      },
      {
        name: "Keyword Operator Assignment",
        scope: ["keyword.operator.assignment"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "String Quoted",
        scope: ["string.quoted"],
        settings: {
          foreground: green,
        },
      },
      {
        name: "Punctuation Definition String Template",
        scope: ["punctuation.definition.string.template"],
        settings: {
          foreground: green,
        },
      },
      {
        name: "Punctuation Definition Template Expression",
        scope: ["punctuation.definition.template-expression"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "Variable Other Object",
        scope: ["variable.other.object"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "String Template",
        scope: ["string.template"],
        settings: {
          foreground: green,
        },
      },
      {
        name: "Variable Other Property",
        scope: ["variable.other.property"],
        settings: {
          foreground: foreground,
        },
      },
      {
        name: "JSON Key",
        scope: ["support.type.property-name.json"],
        settings: {
          foreground: pink,
        },
      },
      {
        name: "JSON Value (Double Quotes)",
        scope: ["string.quoted.double.json"],
        settings: {
          foreground: green,
        },
      },
      {
        name: "JSON Value (Constant)",
        scope: ["constant.language.json"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: secondaryForeground,
        },
      },
    ],
  };
}

module.exports = getTheme;
