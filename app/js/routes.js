import Landing from '../vue/shared/pages/Landing.vue';
import Lost from '../vue/shared/components/404.vue';

const base = env.BASE_URL;

export default {

    mode:'history',
    linkActiveClass: 'active-link',

    routes: [
        {
            path: base + '/landing',
            component: Landing,
            name: 'Landing'
        },
        {
            path: '*',
            component: Lost,
            name: '404'
        }

    ]
};