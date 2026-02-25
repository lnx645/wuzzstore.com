import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';
import os from 'os';

const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]!) {
            // Pilih IPv4 dan bukan internal (bukan 127.0.0.1)
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
};

const localIp = getLocalIp();
console.log(localIp);
export default defineConfig({
    server: {
        host: '0.0.0.0', // Membuka akses agar bisa dibuka dari HP
        port: 5173,
        strictPort: true,
        cors: true, // Mengatasi error CORS saat diakses dari IP berbeda
        origin: `http://${localIp}:5173`, // Penting agar asset tidak blank
        hmr: {
            host: localIp,
            protocol: 'ws',
        },
    },

    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@ui': path.resolve(__dirname, 'resources/js/ui'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
        },
    },
});
