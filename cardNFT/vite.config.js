import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NFT/', // ← ici ! Le nom de ton repo GitHub
})
