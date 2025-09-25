import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages: https://<user>.github.io/<repo>/
  base: '/new-castle-metal-redesign/',
  optimizeDeps: {
    include: ['lucide-react'],
  },
});
