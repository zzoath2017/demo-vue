module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module'
    },
    extends: [
      'plugin:vue/recommended'
    ],
    parser: "vue-eslint-parser",
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    rules: {
      'no-console': 'off',
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }