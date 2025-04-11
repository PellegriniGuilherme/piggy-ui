import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'package/index.ts'),
      name: 'PiggyUI',
      fileName: 'index',
      formats: ['es']
    },
    cssCodeSplit: false,
    outDir: 'dist/package',
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
    },
    sourcemap: true,
    emptyOutDir: true
  }
});
