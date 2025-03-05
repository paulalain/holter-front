import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        plugins: [react()],
        server: {
            port: 3000, 
            open: true,
            allowedHosts: true
        },
        resolve: {
            alias: {
                "@": "/src",
            },
        },
        testEnvironment: "jest-environment-jsdom",
        transform: {
            "^.+\\.[t|j]sx?$": "babel-jest",
        },
    };
});
