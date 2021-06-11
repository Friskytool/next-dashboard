var fs = require("fs");

const commandData = JSON.parse(
  fs.readFileSync("../public/commands.json", "utf8")
);

export const plugins = Object.keys(commandData).toArray();
