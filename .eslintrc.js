module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'modules': true
    }
  },
  'plugins': [
    'react',
    'jsx-a11y'
  ],
  'rules': {
    'max-len': ['error', { 'code': 120 }],
    'react/no-multi-comp': ['warn'],
    'react/boolean-prop-naming': ['warn', {'rule': '^(is|has|for|can)[A-Z]([A-Za-z0-9]?)+'}],
    'react/no-unused-prop-types': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/sort-comp': ['warn'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-max-props-per-line': ['warn', {'maximum': 3}],
    'react/jsx-curly-brace-presence': ['warn', {
      'props': 'never', 'children': 'never'
    }],
    'react/jsx-pascal-case': ['warn', {'allowAllCaps': true}],
    'react/jsx-sort-props': ['warn', {
      'callbacksLast': true,
      'shorthandLast': true,
      'ignoreCase': true,
      'noSortAlphabetically': true
    }],
    'react/jsx-tag-spacing': ['warn'],

    'react/prop-types': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/no-array-index-key': ['error'],
    'react/no-children-prop': ['error'],
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-will-update-set-state': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-is-mounted': ['error'],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-string-refs': ['error'],
    'react/no-unescaped-entities': ['error'],
    'react/prefer-es6-class': ['error'],
    'react/react-in-jsx-scope': ['error'],
    'react/self-closing-comp': ['error', {
      'component': true, 'html': false
    }],
    'react/style-prop-object': ['error'],
    'react/void-dom-elements-no-children': ['error'],
    'react/jsx-closing-bracket-location': ['error'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-equals-spacing': ['error'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-key': ['error'],
    'react/jsx-no-bind': ['error', {'allowArrowFunctions': true}],
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/jsx-no-undef': ['error'],
    'react/jsx-wrap-multilines': ['error'],

    'indent': ['warn', 2, {'SwitchCase': 1}],
    'no-debugger': ['warn'],
    'no-console': ['warn', { 'allow': ['error']}],
    'no-alert': ['warn'],
    'no-else-return': ['warn'],
    'no-trailing-spaces': ['warn'],
    'eqeqeq': ['warn'],
    'guard-for-in': ['warn'],

    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'default-case': ['error'],
    'dot-notation': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'comma-dangle': ["error", "only-multiline"],

    'jsx-a11y/href-no-hash': 'off'
  }
};