const customPlugin = require('./eslint-plugin-custom-angular');
const tsParser = require('@typescript-eslint/parser');
const templateParser = require('@angular-eslint/template-parser');

module.exports = [
  {
    files: ['**/*.ts'],
    ignores: ['**/*.spec.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    plugins: {},
    rules: {},
  },
  {
    files: ['**/*.html'],
    languageOptions: { parser: templateParser },
    plugins: { 'custom-angular': customPlugin },
    rules: { 'custom-angular/prefer-boolean-attribute-shorthand': 'warn' },
  },
];
