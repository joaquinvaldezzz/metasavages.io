import { defineConfig } from 'astro/config'

export default defineConfig({
  build: {
    format: 'file',
  },
  vite: {
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
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
})
