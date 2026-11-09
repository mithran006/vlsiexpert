import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Explicitly disable HMR and WebSocket in sandboxed/container environments
      hmr: false,
      ws: false,
      watch: null,
    },
    build: {
      chunkSizeWarningLimit: 2500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@monaco-editor') || id.includes('monaco-editor')) {
                return 'vendor-monaco';
              }
              if (id.includes('recharts') || id.includes('d3-')) {
                return 'vendor-charts';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-lucide';
              }
              if (id.includes('motion')) {
                return 'vendor-motion';
              }
              return 'vendor-core';
            }
            if (id.includes('/src/data/')) {
              if (id.includes('Problems') || id.includes('problems') || id.includes('topicMeta')) {
                return 'data-problems';
              }
              if (id.includes('quiz') || id.includes('interview')) {
                return 'data-quiz-interview';
              }
              if (id.includes('techNewsData')) {
                return 'data-news';
              }
            }
          },
        },
      },
    },
  };
});
