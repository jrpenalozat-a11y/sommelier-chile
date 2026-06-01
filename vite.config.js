import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite para la app Sommelier de Chile.
// En build (GitHub Pages) la app vive en /sommelier-chile/; en local, en la raíz.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sommelier-chile/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}));
