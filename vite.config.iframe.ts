import { defineConfig } from 'vite';

// Configuration for the iframe entry point
export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/iframe.ts',
            output: {
                dir: 'dist/iframe',
                entryFileNames: 'iframe.js'
            }
        }
    }
});