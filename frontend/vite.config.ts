import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  }
})
