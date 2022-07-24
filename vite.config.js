import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: { index: './index.html' },
      output: {
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
      },
    },
  },
})
