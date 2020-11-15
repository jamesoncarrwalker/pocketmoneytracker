import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios'

import routes from './routes';
import store_shared from '../vue/shared/store/store';
import store_public from '../vue/public/store/store';
import store_private from '../vue/private/store/store';



//globally register the common components
import './global_register';

Vue.use(require('vue-moment'));
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

const store = new Vuex.Store({...store_public, ...store_shared,...store_private});



console.log(store)

const app = new Vue({

    el:'#mainApp',
    router: new VueRouter(routes),
    store: store
});