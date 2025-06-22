const fs = require("fs");
const packageJson = require("../package.json");

const version = packageJson.version;
const envPath = ".env";

fs.writeFileSync(envPath, `REACT_APP_VERSION=${version}\n`);
console.log(`Set REACT_APP_VERSION=${version}`);
