# eslint-plugin-lets-go-js

Note: This project is a work in progress.

An ESLint config that aims to help *and not be annoying*. Check index.js for the full list of rules.

## Installation

```bash
npm add eslint-plugin-lets-go-js -D
```

## Usage

Add following to eslint configuration:

```json
{
  "plugins": ["lets-go-js"],
  "extends": ["plugin:lets-go-js/recommended"]
}
```

You can override any of the rules by adding them to your configuration. Example:

```json
{
  "plugins": ["lets-go-js"],
  "extends": ["plugin:lets-go-js/recommended"],
  "rules": {
    "no-console": "off"
  }
}
```