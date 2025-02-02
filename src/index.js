const fs = require("fs").promises;
const getTheme = require("./theme");

const darkTheme = getTheme({
  theme: "dark",
  name: "Geist Dark",
  type: "dark",
});

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/geist-dark-vscode-theme.json",
        JSON.stringify(darkTheme, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1));
