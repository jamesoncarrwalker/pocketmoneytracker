import Landing from '../vue/shared/pages/Landing.vue';
import Lost from '../vue/shared/pages/404.vue';
import Tracker from '../vue/private/pages/Tracker.vue'

const base = env.BASE_URL;

export default {

    mode:'history',
    linkActiveClass: 'active-link',

    routes: [
        {
            path: base,
            component: Landing,
            name: 'Landing'
        },
        {
            path: base + 'tracker',
            component: Tracker,
            name: 'Tracker'
        },
        {
            path: '*',
            component: Lost,
            name: '404'
        }

    ]
};