const letsGo = require("eslint-config-lets-go");
const globals = require("globals");

module.exports = [
  letsGo,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.nodeBuiltins,
        // ...globals.browser,
      }
    },
    // rules: {
    //   'no-console': 'warn',
    // }
  }
];