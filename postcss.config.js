const postcssSorting = require('./util/postcssSorting')

module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: ['./index.html', './src/**/*.vue'],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
    },
    'postcss-sort-media-queries': {},
    'postcss-sorting': {
      order: [...postcssSorting.order],
      'properties-order': [...postcssSorting.propertiesOrder],
      'unspecified-properties-position': 'bottom',
    },
  },
}
