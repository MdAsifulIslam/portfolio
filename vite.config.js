import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import.meta.env.VITE_EMAILJS_SERVICE_ID

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
