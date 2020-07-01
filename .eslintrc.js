module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig-eslint.json',
    sourceType: 'module',
    ecmaVersion: 9,
    impliedStrict: true
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'prefer-arrow',
    'import',
    'no-eslint-disable'
  ],
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true
      }
    ],
    'no-unused-vars': 'off',
    camelcase: 'error',
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': [ 'error' ],
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'always'
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean'
    ],
    'id-match': 'error',
    'import/order': [ 'error' ],
    'sort-keys': [ 'error' ],
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 180
      }
    ],
    'new-parens': 'error',
    'no-eslint-disable/no-eslint-disable': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-new-wrappers': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': [ 'error', {
      allowAfterThis: true
    } ],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true
      }
    ],
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'prefer-arrow/prefer-arrow-functions': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    radix: 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'spaced-comment': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'no-multi-spaces': 'error',
    indent: [
      'error',
      2,
      {
        CallExpression: {
          arguments: 'first'
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        FunctionDeclaration: {
          parameters: 'first'
        },
        FunctionExpression: {
          parameters: 'first'
        },
        SwitchCase: 1
      }
    ],
    'keyword-spacing': 'error',
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'key-spacing': [
      'error'
    ],
    'space-in-parens': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': [ 'camelCase' ]
      },
      {
        'selector': 'variable',
        'format': [ 'camelCase', 'UPPER_CASE' ]
      },
      {
        'selector': 'parameter',
        'format': [ 'camelCase' ],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'memberLike',
        'format': [ 'camelCase' ]
      },
      {
        'selector': 'typeLike',
        'format': [ 'PascalCase' ]
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        CallExpression: {
          arguments: 'first'
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        FunctionDeclaration: {
          parameters: 'first'
        },
        FunctionExpression: {
          parameters: 'first'
        },
        SwitchCase: 1
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    } ],
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          'import-spacing': true,
          'jsdoc-format': [
            true,
            'check-multiline-start'
          ],
          'no-reference-import': true,
          'one-line': [
            true,
            'check-catch',
            'check-else',
            'check-finally',
            'check-open-brace',
            'check-whitespace'
          ],
          whitespace: [
            true,
            'check-decl',
            'check-operator',
            'check-module',
            'check-rest-spread',
            'check-type-operator'
          ]
        }
      }
    ]
  },
  overrides: [
    {
      files: [
        '*.scene.ts'
      ],
      rules: {
        'sort-keys': 'off'
      }
    },
    {
      files: [
        '*.js'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      files: [
        '*.test.ts'
      ],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'selector': 'default',
            'format': [ 'camelCase' ]
          },
          {
            'selector': 'variable',
            'format': [ 'camelCase', 'UPPER_CASE', 'PascalCase' ]
          },
          {
            'selector': 'parameter',
            'format': [ 'camelCase' ],
            'leadingUnderscore': 'allow'
          },
          {
            'selector': 'memberLike',
            'format': [ 'camelCase', 'PascalCase' ]
          },
          {
            'selector': 'typeLike',
            'format': [ 'PascalCase' ]
          }
        ]
      }
    }
  ]
};
