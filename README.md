# eslint-config-lets-go

Note: This project is a work in progress.

An ESLint config that aims to help *and not be annoying*. Check index.js for the full list of rules.

## Installation

```bash
npm add eslint@8 eslint-config-lets-go eslint-plugin-import-x -D
```

## Usage

Add following to eslint configuration:

For ESLint 8 and below:
```json
{
  "extends": ["lets-go"],
  // Override any of the rules
  // rules: {
  //   'no-console': 'warn',
  // }
}
```

The following way will work for ESLint 8 and 9 (eslint.config.js):

```js
// eslint.config.js
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
    // Override any of the rules
    // rules: {
    //   'no-console': 'warn',
    // }
  }
];
```