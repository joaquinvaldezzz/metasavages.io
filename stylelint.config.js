const postcssSorting = require('./util/postcssSorting')

module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  rules: {
    'max-nesting-depth': 3,
    'order/order': [...postcssSorting.order],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [...postcssSorting.propertiesOrder],
    'prettier/prettier': true,
    'selector-id-pattern': null,
  },
}
