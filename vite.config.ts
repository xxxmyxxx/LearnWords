import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // GitHub Pages SPA routing için 404.html oluştur
    {
      name: 'generate-404-spa',
      generateBundle(_, bundle) {
        // index.html içeriğini 404.html olarak kopyala
        const indexHtml = bundle['index.html']
        if (indexHtml && indexHtml.type === 'asset') {
          this.emitFile({
            type: 'asset',
            fileName: '404.html',
            source: indexHtml.source
          })
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
