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
    '/site/src/App.js',
    '/site/src/__test__/App.test.js',
    '/site/src/fragments/Loading/Loading.js',
    '/site/src/index.js',
    '/site/src/pages/Auth/Auth.js',
    '/site/src/pages/Dashboard/Dashboard.js',
    '/site/src/pages/Home/Home.js',
    '/site/src/utils/api.js',
  ],
};
