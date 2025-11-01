'use strict';

const preferBooleanAttributeShorthand = require('./rules/prefer-boolean-attribute-shorthand');

const plugin = {
  meta: {
    name: 'eslint-plugin-custom-angular',
    version: '0.0.1',
    namespace: 'custom-angular',
  },
  rules: {
    [preferBooleanAttributeShorthand.RULE_NAME]: preferBooleanAttributeShorthand,
  },
  configs: {
    recommended: [
      {
        rules: {
          'custom-angular/prefer-boolean-attribute-shorthand': 'warn',
        },
      },
    ],
  },
};

module.exports = plugin;
