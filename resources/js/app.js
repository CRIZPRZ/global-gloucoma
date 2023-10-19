
require('./bootstrap');
import { createApp, h } from 'vue';
import { app, plugin } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 0,
    // The color of the progress bar.
    color: '#9F55EA',
    // Whether to include the default NProgress styles.
    includeCSS: true,
    // Whether the NProgress spinner will be shown.
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
    // .component("v-icon", OhVueIcon)
    // .use(setupCalendar, {})
    // .use(plugin)
    // .use(BootstrapIconsPlugin)
    // .use(pinia)
    // .use(Donut)
    // .use(VueApexCharts)
    // .use(VCalendar, {})
    .mixin({
        methods: {
            route: route,
        }
    })
    .mount(el);
