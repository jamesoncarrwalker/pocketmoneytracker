import Vue from 'vue';
import Vuex from 'vuex';

import transactions from './modules/transactions';
import user from './modules/user';


export default{

    modules: {
        transactions,
        user
    }

};

