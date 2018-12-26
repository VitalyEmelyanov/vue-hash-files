module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  plugins: [
    'vue'
  ],
  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true
  },
  // add your custom rules here
  'rules': {
    'no-param-reassign': 0,

    'import/first': 0,
    'import/named': 2,
    'import/no-cycle': 0,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,

    'vue/require-valid-default-prop': 0,
    'vue/mustache-interpolation-spacing': [2, 'never'],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': 1,
    'vue/max-attributes-per-line': [2, {
      'singleline': 7,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],

    'newline-per-chained-call': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': [2, 'never'],
    'consistent-return': 0,
    'indent': [2, 2],
    'no-plusplus': 0,
    'no-continue': 0,
    'eqeqeq': [2, 'smart'],
    'no-unused-expressions': ['error', {'allowShortCircuit': true, 'allowTernary': true}],
    'no-unused-vars': 1,
    'no-mixed-operators': 0,
    'no-await-in-loop': 0,
    'no-lonely-if': 0,
    'object-curly-spacing': [2, 'never'],
    'no-return-assign': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'prefer-destructuring': 0,
    'prefer-const': ['warn', {'destructuring': 'all'}],
    'no-empty': ['error', {'allowEmptyCatch': true}],
    'arrow-parens': ["error", "as-needed"],
    'func-names': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
