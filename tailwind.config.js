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
    backgroundOpacity: false,
    textOpacity: false,
  },
  plugins: [],
}
