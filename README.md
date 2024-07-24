# eslint-config-lets-go

Note: This project is a work in progress.

An ESLint config that aims to help *and not be annoying*. Check index.js for the full list of rules.

## Installation

```bash
npm add eslint@8 eslint-config-lets-go eslint-plugin-import-x -D
```

## Usage

Add following to eslint configuration:

```json
{
  "extends": ["lets-go"]
}
```

You can override any of the rules by adding them to your configuration. Example:

```json
{
  "extends": ["lets-go"],
  "rules": {
    "no-console": "off"
  }
}
```