const postcssSorting = require('./util/postcssSorting')

module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: [
        './src/backgrounds/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src/layouts/**/*.{js,jsx}',
        './src/pages/**/*.{js,jsx}',
      ],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      keyframes: true,
      variables: true,
    },
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    'postcss-sorting': {
      order: [...postcssSorting.order],
      'properties-order': [...postcssSorting.propertiesOrder],
      'unspecified-properties-position': 'bottom',
    },
    tailwindcss: {},
  },
}
