import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/clima-app/', // 👈 nombre del repo en GitHub
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    coverage: {
      reporter: ['text', 'json', 'html'], // puedes ver por consola y generar html
      exclude: ['node_modules/', 'dist/', 'setupTests.js'],
    },
  },
});
