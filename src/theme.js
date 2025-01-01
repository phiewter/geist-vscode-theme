const { getColors } = require("./colors");

function getTheme({ theme, name }) {
  const color = getColors(theme);

  return {
    name: name,
    colors: {
      "editor.background": color.background[100], // Editor default background.
      "editor.foreground": color.gray[1000], // Editor default foreground.

      "editor.selectionBackground": color.background[200],
      "editor.selectionHighlightBackground": color.background[200],

      "editorLineNumber.foreground": color.gray[900],

      "editorGroupHeader.tabsBackground": color.background[200],

      "editorWidget.background": color.background[100],

      "editorWarning.foreground": color.amber[800],

      "editorError.foreground": color.red[800],

      "editorOverviewRuler.border": color.gray[400],

      "editorGutter.addedBackground": color.background[100],
      "editorGutter.deletedBackground": color.background[200],
      "editorGutter.modifiedBackground": color.background[200],

      "diffEditor.insertedTextBackground": color.background[100],
      "diffEditor.insertedLineBackground": color.background[100],
      "diffEditor.removedTextBackground": color.red[200],
      "diffEditor.removedLineBackground": color.red[100],

      "editorInLayHint.foreground": color.gray[1000],
      "editorInLayHint.background": color.background[100],

      // Sidebar
      "sideBar.background": color.background[100],
      "sideBarTitle.foreground": color.background[100],
      "sideBarSectionHeader.foreground": color.background[100],
      "sideBarSectionHeader.background": color.background[100],

      // Activity bar
      "activityBar.background": color.background[100],
      "activityBar.foreground": color.background[100],
      "activityBarBadge.background": color.background[100],
      "activityBarBadge.foreground": color.background[100],

      // Title bar
      "titleBar.activeBackground": color.background[100],
      "titleBar.inactiveBackground": color.background[100],
      "titleBar.activeForeground": color.background[100],
      "titleBar.inactiveForeground": color.background[100],

      // Tab
      "tab.border": color.background[100],
      "tab.activeBackground": color.background[100],
      "tab.inactiveBackground": color.background[100],

      // Status bar
      "statusBar.debuggingForeground": color.background[100],
      "statusBar.debuggingBackground": color.background[100],
      "statusBar.background": color.background[100],
      "statusBar.foreground": color.background[100],
      "statusBarItem.remoteBackground": color.background[100],
      "statusBarItem.remoteForeground": color.background[100],

      // Change explorer active item color
      "list.activeSelectionForeground": color.background[100],
      "list.inactiveSelectionBackground": color.background[100],

      // Global
      "badge.background": color.background[100],
      "badge.foreground": color.background[100],
      "button.background": color.background[100],
      "button.hoverBackground": color.background[100],
      "button.foreground": color.background[100],
      focusBorder: color.background[100],
      "icon.foreground": color.background[100],
      "input.background": color.background[100],
      "list.activeSelectionBackground": color.background[100],
      "list.hoverBackground": color.background[100],
      "list.errorForeground": color.background[100],
      "list.highlightForeground": color.background[100],
      "selection.background": color.background[100],

      // Brackets
      "editorBracketHighlight.foreground1": color.background[100],
      "editorBracketHighlight.foreground2": color.background[100],
      "editorBracketHighlight.foreground3": color.background[100],
      "editorBracketHighlight.foreground4": color.background[100],
      "editorBracketHighlight.foreground5": color.background[100],
      "editorBracketHighlight.foreground6": color.background[100],
      "editorBracketHighlight.unexpectedBracket.foreground":
        color.background[100],

      // Links
      "textLink.foreground": color.background[100],
      "textLink.activeForeground": color.background[100],

      // Tooltips
      "editorHoverWidget.background": color.background[100],
      "editorHoverWidget.border": color.background[100],

      // Scrollbar
      "scrollbarSlider.background": color.background[100],
      "scrollbarSlider.hoverBackground": color.background[100],

      // Settings
      "settings.modifiedItemIndicator": color.background[100],
    },
    tokenColors: [
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: color.gray[900],
        },
      },
      {
        name: "Variables",
        scope: [
          "variable",
          "string constant.other.placeholder",
          "entity.name.tag",
        ],
        settings: {
          foreground: color.gray[1000],
        },
      },
      {
        name: "Colors",
        scope: ["constant.other.color"],
        settings: {
          foreground: color.gray[1000],
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: color.gray[900],
        },
      },
      {
        name: "Keyword, Storage",
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Operator, Misc",
        scope: [
          "keyword.control",
          "constant.other.color",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
        ],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "Function, Special Method",
        scope: [
          "entity.name.function",
          "variable.function",
          "support.function",
          "keyword.other.special-method",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "Block Level Variables",
        scope: ["meta.block variable.other"],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Other Variable, String Link",
        scope: ["support.other.variable", "string.other.link"],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
          "constant.numeric",
          "support.constant",
          "constant.character",
          "constant.escape",
          "keyword.other.unit",
          "keyword.other",
          "constant.language.boolean",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "String, Symbols, Inherited Class",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          foreground: "#99FFE4",
        },
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "CSS Class and Support",
        scope: [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name",
          "source.postcss support.type.property-name",
          "support.type.vendored.property-name.css",
          "source.css.scss entity.name.tag",
          "variable.parameter.keyframe-list.css",
          "meta.property-name.css",
          "variable.parameter.url.scss",
          "meta.property-value.scss",
          "meta.property-value.css",
        ],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js",
        ],
        settings: {
          foreground: "#FF8080",
        },
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "entity.name.method.js",
        scope: ["entity.name.method.js"],
        settings: {
          foreground: "#FFFF",
        },
      },
      {
        name: "meta.method.js",
        scope: [
          "meta.class-method.js entity.name.function.js",
          "variable.function.constructor",
        ],
        settings: {
          foreground: "#FFFF",
        },
      },
      {
        name: "Attributes",
        scope: [
          "entity.other.attribute-name",
          "meta.property-list.scss",
          "meta.attribute-selector.scss",
          "meta.property-value.css",
          "entity.other.keyframe-offset.css",
          "meta.selector.css",
          "entity.name.tag.reference.scss",
          "entity.name.tag.nesting.css",
          "punctuation.separator.key-value.css",
        ],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "HTML Attributes",
        scope: [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "CSS Classes",
        scope: [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.id",
          "meta.attribute-selector.scss",
          "variable.parameter.misc.css",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "CSS ID's",
        scope: ["source.sass keyword.control", "meta.attribute-selector.scss"],
        settings: {
          foreground: "#99FFE4",
        },
      },
      {
        name: "Inserted",
        scope: ["markup.inserted"],
        settings: {
          foreground: "#99FFE4",
        },
      },
      {
        name: "Deleted",
        scope: ["markup.deleted"],
        settings: {
          foreground: "#FF8080",
        },
      },
      {
        name: "Changed",
        scope: ["markup.changed"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Regular Expressions",
        scope: ["string.regexp"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Escape Characters",
        scope: ["constant.character.escape"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "URL",
        scope: ["*url*", "*link*", "*uri*"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        name: "Decorators",
        scope: [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
        ],
        settings: {
          foreground: "#FFFF",
        },
      },
      {
        name: "ES7 Bind Operator",
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: "#FF8080",
        },
      },
      {
        name: "JSON Key - Level 0",
        scope: [
          "source.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 1",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 2",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 3",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 4",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 5",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 6",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 7",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "JSON Key - Level 8",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "Markdown - Plain",
        scope: [
          "text.html.markdown",
          "punctuation.definition.list_item.markdown",
        ],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Markdown - Markup Raw Inline",
        scope: ["text.html.markdown markup.inline.raw.markdown"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Markdown - Markup Raw Inline Punctuation",
        scope: [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
        ],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Markdown - Heading",
        scope: [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown",
          "markup.heading",
          "markup.inserted.git_gutter",
        ],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "Markup - Italic",
        scope: ["markup.italic"],
        settings: {
          fontStyle: "italic",
          foreground: "#FFF",
        },
      },
      {
        name: "Markup - Bold",
        scope: ["markup.bold", "markup.bold string"],
        settings: {
          fontStyle: "bold",
          foreground: "#FFF",
        },
      },
      {
        name: "Markup - Bold-Italic",
        scope: [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string",
        ],
        settings: {
          fontStyle: "bold",
          foreground: "#FFF",
        },
      },
      {
        name: "Markup - Underline",
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
          foreground: "#FFC799",
        },
      },
      {
        name: "Markdown - Blockquote",
        scope: ["markup.quote punctuation.definition.blockquote.markdown"],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Markup - Quote",
        scope: ["markup.quote"],
      },
      {
        name: "Markdown - Link",
        scope: ["string.other.link.title.markdown"],
        settings: {
          foreground: "#FFFF",
        },
      },
      {
        name: "Markdown - Link Description",
        scope: ["string.other.link.description.title.markdown"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Markdown - Link Anchor",
        scope: ["constant.other.reference.link.markdown"],
        settings: {
          foreground: "#FFC799",
        },
      },
      {
        name: "Markup - Raw Block",
        scope: ["markup.raw.block"],
        settings: {
          foreground: "#A0A0A0",
        },
      },
      {
        name: "Markdown - Raw Block Fenced",
        scope: ["markup.raw.block.fenced.markdown"],
        settings: {
          foreground: "#00000050",
        },
      },
      {
        name: "Markdown - Fenced Bode Block",
        scope: ["punctuation.definition.fenced.markdown"],
        settings: {
          foreground: "#00000050",
        },
      },
      {
        name: "Markdown - Fenced Bode Block Variable",
        scope: [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end",
        ],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Markdown - Fenced Language",
        scope: ["variable.language.fenced.markdown"],
        settings: {
          foreground: "#FFF",
        },
      },
      {
        name: "Markdown - Separator",
        scope: ["meta.separator"],
        settings: {
          fontStyle: "bold",
          foreground: "#65737E",
        },
      },
      {
        name: "Markup - Table",
        scope: ["markup.table"],
        settings: {
          foreground: color.gray[1000],
        },
      },
    ],
  };
}

module.exports = getTheme;
