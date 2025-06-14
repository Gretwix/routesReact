import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), 
    react()
  ],
})
