module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018, // Indica la versión de ECMAScript que se utiliza
    sourceType: 'module', // Especifica el tipo de código ECMAScript que estás utilizando (por ejemplo, módulos)
  },
};
