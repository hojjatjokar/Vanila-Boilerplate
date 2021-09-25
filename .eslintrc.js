module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'prettier',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-var': 'error',
    'no-const-assign': 'error',
    'no-use-before-define': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
  },
};
