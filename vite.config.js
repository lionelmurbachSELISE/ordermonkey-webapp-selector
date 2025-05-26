import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Vite config loaded, react plugin:', typeof react);

export default defineConfig({
  plugins: [react()],
  base: '/ordermonkey-webapp-selector/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
})