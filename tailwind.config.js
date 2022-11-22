const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const contents = require('./contents')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...contents],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#54f9ff',
        secondary: '#00ff85',
        tertiary: '#c0c0c0',
        accent: '#e11c24',
      },
      fontFamily: {
        sans: ['Rajdhani', ...defaultTheme.fontFamily.sans],
        display: ['Chakra Petch', 'system-ui'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          'min-width': '320px',
          color: theme('colors.white'),
          'background-color': theme('colors.black'),
        },
      })
    }),
  ],
}
