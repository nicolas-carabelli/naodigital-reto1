module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: [
    'src/App.js',
    'src/__test__/App.test.js',
    'src/fragments/Loading/Loading.js',
    'src/index.js',
    'src/pages/Auth/Auth.js',
    'src/pages/Dashboard/Dashboard.js',
    'src/pages/Home/Home.js',
    'src/utils/api.js',
  ],
};
