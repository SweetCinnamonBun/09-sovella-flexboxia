import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/09-sovella-flexboxia",
  server: {
    port: 3100,
  }
})
