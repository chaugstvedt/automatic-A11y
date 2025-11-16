/// <reference types="vitest" />
/// <reference types="vite/client" />

import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: "./src/tests/setup.ts",
    exclude: [
    ...configDefaults.exclude,
    'e2e/', 
    'test-examples/', 
    ],
    globals: true,
  },
})