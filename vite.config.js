import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ladycream-skin-care-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
