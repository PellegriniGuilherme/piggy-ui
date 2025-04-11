import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'package',
      outDir: 'dist/package',
      include: ['package'],
      insertTypesEntry: true,
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'package/index.ts'),
      name: 'PiggyUI',
      fileName: 'index',
      formats: ['es']
    },
    outDir: 'dist/package',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
