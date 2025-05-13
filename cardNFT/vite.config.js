import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NFT/',
  define: {
    'process.env.NODE_ENV': '"development"',
  },
})
