import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Erlaubt Zugriff über Tunnel-Hostnamen (z.B. loca.lt, trycloudflare.com) beim lokalen Testen.
    allowedHosts: true,
  },
})
