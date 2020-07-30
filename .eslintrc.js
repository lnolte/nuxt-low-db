module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
    'template-curly-spacing': 'off',
    'import/no-extraneous-dependencies': 'off',
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
    }],
    'vue/no-template-shadow': 'error',
    'vue/order-in-components': 'error',
    'class-methods-use-this': 'off',
    'vue/require-prop-types': 'warn',
    'vue/attribute-hyphenation': 'error',
    'vue/this-in-template': 'error',
    'vue/html-indent': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/attributes-order': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'no-console': 'error',
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        // This is necessary for vuex, since you have to mutate the state
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
  },
}
