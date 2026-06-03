import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// - dev / build normal: app multiarchivo (build para GitHub Pages en /sommelier-chile/)
// - `npm run build:single`: empaqueta TODO en un único index.html autónomo
export default defineConfig(({ command, mode }) => ({
  base: mode === 'single' ? './' : command === 'build' ? '/sommelier-chile/' : '/',
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  server: {
    port: 5173,
    open: true,
  },
}));
