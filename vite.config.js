import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages hosts this project under /polytechnic-pathway/.
  // Local development and other hosting targets continue to use root paths.
  base: process.env.GITHUB_PAGES === 'true' ? '/polytechnic-pathway/' : '/',
  // SPA fallback: serve index.html for all unmatched routes
  // so React Router handles /privacy, /terms, /independence etc.
  preview: { port: 4173 },
  server:  { port: 5173 },
});
