import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
    target: 'esnext'
  },
  plugins: [react(),
  federation({
    name: 'poc-host',
    remotes: {
      remoteApp: "http://localhost:3001/assets/remoteEntry.js"
    },
    shared:['react', 'react-dom']
  })],
})
