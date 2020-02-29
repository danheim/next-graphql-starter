module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts",".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx",".ts",".tsx"]
      }
    }
  },
  rules: {
    "semi": ["error", "never"],
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/no-unresolved": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
};
