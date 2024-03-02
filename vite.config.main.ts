import { defineConfig } from 'vite'

// Configuration for the main entry point
export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/main.ts',
            output: {
                dir: 'dist/main',
                entryFileNames: 'main.js'
            }
        }
    }
});