import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts()
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
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  }
});
