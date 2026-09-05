import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // SPA fallback: serve index.html for all unmatched routes
  // so React Router handles /privacy, /terms, /independence etc.
  preview: { port: 4173 },
  server:  { port: 5173 },
});
