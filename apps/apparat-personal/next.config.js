const withTM = require("next-transpile-modules")([
  "apparat-core",
]);
const withTwin = require("./withTwin");

module.exports = withTM(withTwin({
  reactStrictMode: true,
}));
