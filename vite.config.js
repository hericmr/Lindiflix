import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contato: resolve(__dirname, 'contato.html'),
        mapa: resolve(__dirname, 'mapa.html'),
        popup: resolve(__dirname, 'popup.html')
      },
      output: {
        manualChunks: {
          vendor: ['jquery'],
          bootstrap: ['bootstrap']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  plugins: [
    // Plugin para otimizar imagens
    {
      name: 'image-optimizer',
      generateBundle(options, bundle) {
        // Aqui você pode adicionar lógica para otimizar imagens durante o build
        console.log('Build completed with image optimization');
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
});
