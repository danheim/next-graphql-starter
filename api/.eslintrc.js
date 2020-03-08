const path = require('path');
const resolve = {
  extensions: ['.js', '.ts'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    models: true,
    apiServer: true,
    graphqlClient: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    semi: ["error", "never"],
    // typescript
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-non-null-assertion": "off",

    // rest
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "max-len": ["error", 80, {
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreComments": true,
    }],
    "arrow-parens": ["error", "always"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-console": ["error"],
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: resolve.extensions,
        map: [
          ...Object.entries(resolve.alias),
        ],
      },
      node: {
        extensions: resolve.extensions
      }
    }
  }
};
