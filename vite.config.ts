import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Avoid importing 'node:process' which may not have type declarations in this environment
declare const process: any;

export default defineConfig(({ mode }) => {
  // Resolve the current working directory and load env variables
  const env = loadEnv(mode, typeof process !== 'undefined' && process.cwd ? process.cwd() : '.', '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY)
    }
  };
});
