// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map "@admin" to the sibling "admin/" directory
      '@admin': path.resolve(__dirname, '../admin')
    }
  }
})
