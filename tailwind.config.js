const aspectRatio = require('@tailwindcss/aspect-ratio')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
    backgroundOpacity: false,
    textOpacity: false,
  },
  plugins: [aspectRatio],
}
