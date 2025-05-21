import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Vite config loaded, tailwindcss plugin:', typeof react);

export default defineConfig({
  plugins: [react()],
  base: '/landingpage-urbanfood/'
})