import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    target: 'esnext',
    cssCodeSplit: false,
    minify: false,
    modulePreload: false
  },
  plugins: [react(), federation({
    name: 'remoteApp',
    filename: 'remoteEntry.js',
    exposes:{
      './Button': './src/components/Button.tsx'
    },
    shared: ['react', 'react-dom']
  })],
})
