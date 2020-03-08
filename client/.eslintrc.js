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

    // react
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx"]
    }]
  },
  // settings: {
  //   "import/resolver": {
  //     "alias": {
  //       "map": [
  //         ...Object.entries(resolve.alias)
  //       ],
  //       "extensions": resolve.extensions
  //     },
  //     "node": {
  //       "extensions": resolve.extensions
  //     }
  //   }
  // }
};
