const defaultTheme = require('tailwindcss/defaultTheme')
const aspectRatio = require('@tailwindcss/aspect-ratio')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
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
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
  },
  plugins: [aspectRatio],
}
