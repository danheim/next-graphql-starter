const path = require('path');
const resolve = {
  extensions: ['.js', '.ts'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb"
  ],
  globals: {
    document: true,
    window: true,
    process: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  rules: {
    // general
    "semi": ["error", "never"],
    "react/prop-types": "off",

    // ts
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/indent": ["error", 2],

    // react
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx"]
    }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    "react-hooks/rules-of-hooks": "error",
    "react/no-danger": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off"
  },
  settings: {
    "import/resolver": {
      "alias": {
        "map": [
          ...Object.entries(resolve.alias)
        ],
        "extensions": resolve.extensions
      },
      "node": {
        "extensions": resolve.extensions
      }
    }
  }
};
