import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Mantiene las rutas de archivos limpias para Vercel
  build: {
    format: 'file',
  },
  // Configuración de servidor para desarrollo
  server: {
    port: 3000,
  }
});