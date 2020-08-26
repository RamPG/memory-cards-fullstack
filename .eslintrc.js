module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',

  ],
  rules: {
    'react/state-in-constructor': [2, 'never'],
    'import/no-unresolved': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'import/extensions': [2, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
  },
};
