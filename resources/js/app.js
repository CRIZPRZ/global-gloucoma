
require('./bootstrap');
import { createApp, h } from 'vue';
import { createPinia } from 'pinia'
import { app, plugin } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const pinia = createPinia()
const options = {
    // You can set your default options here
};
InertiaProgress.init({
    delay: 0,
    color: '#9F55EA',
    includeCSS: true,
    showSpinner: false,
})
const el = document.getElementById('app');
createApp({
    render: () =>
        h(app, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`./Pages/${name}`).then((module) => module.default),
        }),
})
    .use(plugin)
    .use(pinia)
    .use(Toast, options)
    .mixin({
        methods: {
            route: route,
        }
    })
    .mount(el);
