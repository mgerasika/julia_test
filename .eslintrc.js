module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'no-prompt': 'off',
    'no-alert': 'off',
    'func-names': 'off',
    'no-var': 'off',
    'vars-on-top': 'off',
    'quotes': [2, "double"]
  },
  "plugins": [
    "html"
  ]
};
