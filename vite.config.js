import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:process.env.VITE_BASE_PATH ||"/HealthCare/tree/master",
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei'],
  },
});