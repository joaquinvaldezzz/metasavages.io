import { defineConfig } from 'astro/config'
// import purgecss from 'astro-purgecss'

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
  },
  vite: {
    server: {
      host: '0.0.0.0',
      open: true,
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (info) => {
            let extension = info.name.split('.').at(1)
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extension)) {
              extension = 'img'
            } else if (/css/i.test(extension)) {
              return `assets/[hash][extname]`
            }
            return `assets/${extension}/[name].[hash][extname]`
          },
          chunkFileNames: 'assets/[hash].js',
          entryFileNames: 'assets/[hash].js',
        },
      },
    },
  },
  integrations: [
    // purgecss({
    //   content: [
    //     './src/backgrounds/**/*.astro',
    //     './src/components/**/*.astro',
    //     './src/layouts/**/*.astro',
    //     './src/pages/**/*.astro',
    //     './src/scripts/**/*.js',
    //   ],
    //   defaultExtractor: (content) => {
    //     const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
    //     const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
    //     return broadMatches.concat(innerMatches)
    //   },
    //   keyframes: true,
    //   variables: true,
    // }),
  ],
})
