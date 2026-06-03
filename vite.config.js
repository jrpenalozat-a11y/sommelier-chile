import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base de la app:
//  - dev local:        '/'
//  - build por defecto: '/sommelier-chile/'  (GitHub Pages)
//  - Vercel:            define VITE_BASE='/'  (ver vercel.json) para servir en la raíz
// El basename del router (en main.jsx) usa import.meta.env.BASE_URL, así que se
// adapta solo a cualquiera de los dos destinos.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.VITE_BASE || '/sommelier-chile/') : '/',
  plugins: [react()],
  server: { port: 5173, open: true }
}));
