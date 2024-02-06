import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg'
    }),
    react()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },
  define: {
    IS_DEV: JSON.stringify(true),
    API: JSON.stringify('http://localhost:8000'),
    PROJECT: JSON.stringify('frontend')
  }
})
