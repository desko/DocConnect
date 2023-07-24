module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'google',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'require-jsdoc': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': ['off'],
    'max-len': ['error', { 'code': 120 }],
  },
}
