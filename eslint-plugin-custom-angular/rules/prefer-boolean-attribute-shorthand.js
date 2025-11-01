// Custom Angular template rule: prefer-boolean-attribute-shorthand
// Reports usages like: <my-comp [someBool]="true"> or [someBool]="false"
// Suggests replacing with attribute presence/absence: <my-comp someBool> (true) and <my-comp [someBool]="false"> may be optional removal pattern but rule only warns on literal binding.
// We only check template bindings (BoundAttribute) whose value AST is a literal boolean.
// Allow any non-literal expression (computations) like [someBool]="a === b".

'use strict';

const { ESLintUtils } = require('@typescript-eslint/utils');
const { getTemplateParserServices } = require('@angular-eslint/utils');

const RULE_NAME = 'prefer-boolean-attribute-shorthand';

module.exports = ESLintUtils.RuleCreator.withoutDocs({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer boolean input attribute shorthand instead of binding to literal true/false.',
    },
    hasSuggestions: true,
    schema: [
      {
        type: 'object',
        properties: {
          allowFalseLiteral: { type: 'boolean' },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      preferTrue: 'Use attribute shorthand "{{attr}}" instead of [{{attr}}]="true".',
      preferFalse: 'Avoid binding [{{attr}}]="false"; remove the binding or ensure default is false.',
      suggestTrue: 'Replace with attribute shorthand {{attr}}',
      suggestRemove: 'Remove the false binding',
    },
  },
  defaultOptions: [
    {
      allowFalseLiteral: false,
    },
  ],
  create(context, [{ allowFalseLiteral }]) {
  const parserServices = getTemplateParserServices(context);

    return {
      // Examine all BoundAttribute nodes in the template AST
      'BoundAttribute'(node) {
        // node.value is an AST from Angular template parser. We can check .value.ast if present.
        const { value } = node;
        if (!value || !value.ast) return;
        const ast = value.ast; // This is an AST expression
        // Literal boolean nodes have sourceSpan and value === true/false with constructor name 'LiteralPrimitive'
        if (ast.constructor && ast.constructor.name === 'LiteralPrimitive' && typeof ast.value === 'boolean') {
          const attrName = node.name;
          const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
          if (ast.value === true) {
            context.report({
              loc,
              messageId: 'preferTrue',
              data: { attr: attrName },
              suggest: [
                {
                  messageId: 'suggestTrue',
                  data: { attr: attrName },
                  fix: (fixer) => {
                    // Replace entire [attr]="true" with attr
                    const start = node.sourceSpan.start.offset;
                    const end = node.sourceSpan.end.offset;
                    return fixer.replaceTextRange([start, end], attrName);
                  },
                },
              ],
            });
          } else if (ast.value === false && !allowFalseLiteral) {
            context.report({
              loc,
              messageId: 'preferFalse',
              data: { attr: attrName },
              suggest: [
                {
                  messageId: 'suggestRemove',
                  data: { attr: attrName },
                  fix: (fixer) => {
                    const start = node.sourceSpan.start.offset;
                    const end = node.sourceSpan.end.offset;
                    return fixer.replaceTextRange([start, end], '');
                  },
                },
              ],
            });
          }
        }
      },
    };
  },
});

module.exports.RULE_NAME = RULE_NAME;
