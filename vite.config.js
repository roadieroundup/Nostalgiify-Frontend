import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Nostalgiify-Frontend/",
    server: {
        host: true,
    },
});
