import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

console.log('Vite config loaded, tailwindcss plugin:', typeof tailwindcss);

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/ordermonkey-webapp-selector/', 
})