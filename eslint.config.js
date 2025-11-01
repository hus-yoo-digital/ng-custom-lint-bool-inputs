// @ts-check
/**
 * ESLint flat config enabling custom Angular template rule prefer-boolean-attribute-shorthand
 */

const customPlugin = require('./eslint-plugin-custom-angular');
const tsParser = require('@typescript-eslint/parser');
const templateParser = require('@angular-eslint/template-parser');

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    plugins: { 'custom-angular': customPlugin },
    rules: { 'custom-angular/prefer-boolean-attribute-shorthand': 'warn' },
  },
  {
    files: ['**/*.html'],
    languageOptions: { parser: templateParser },
    plugins: { 'custom-angular': customPlugin },
    rules: { 'custom-angular/prefer-boolean-attribute-shorthand': 'warn' },
  },
];
