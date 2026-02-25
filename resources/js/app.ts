import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import '../css/app.css';
import AppLayout from '@/layouts/app-layout.vue';
import AccountLayout from '@/layouts/account-layout.vue';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import { MotionPlugin } from '@vueuse/motion';
createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const page = await resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue'));

        if (name.startsWith('a/')) {
            page.default.layout = page.default.layout || AccountLayout;
        } else {
            page.default.layout = page.default.layout || AppLayout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(MotionPlugin)
            .mount(el);
    },
    progress: {
        color: 'orange',
        includeCSS: true,
    },
});
