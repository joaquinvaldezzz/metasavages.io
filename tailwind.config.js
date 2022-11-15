const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro', './src/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        aqua: '#1effff',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
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
