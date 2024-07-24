const letsGo = require("eslint-config-lets-go");
const globals = require("globals");

module.exports = [
  letsGo,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltins,
      }
    },
    // rules: {
    //   'no-console': 'warn',
    // }
  }
];