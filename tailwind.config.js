const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/backgrounds/**/*.astro',
    './src/components/**/*.astro',
    './src/layouts/**/*.astro',
    './src/pages/**/*.astro',
    './src/scripts/**/*.js',
    // ---
    './src/components/**/*.{js,jsx}',
    './src/layouts/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
  ],
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
      minHeight: {
        inherit: 'inherit',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
    backgroundOpacity: false,
    textOpacity: false,
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        body: {
          'min-width': '320px',
        },
      })
    }),
  ],
}
