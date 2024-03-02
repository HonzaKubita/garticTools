import { defineConfig } from 'vite'

// Configuration for the main entry point
export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/index.ts',
            output: {
                dir: 'dist',
                entryFileNames: 'index.bundle.js'
            }
        }
    }
});