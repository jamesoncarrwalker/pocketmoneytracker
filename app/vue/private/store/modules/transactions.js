import moment from 'moment'
export default {
    namespaced:true,

    state: {
        transactions: [

        ],
        lastUpdate:null
    },

    getters: {

        allTransactions: state => state.transactions,

        getCreditTransactions: state => state.transactions.filter(transaction => transaction.transaction_type == 'CREDIT'),

        getDebitTransactions: state => state.transactions.filter(transaction => transaction.transaction_type == 'SPEND'),

        getCreditTotal: state => state.transactions.reduce((total, transaction) => total + (transaction.transaction_type == 'CREDIT' ? Number(transaction.transaction_amount) : 0),0),

        getDebitTotal: state => state.transactions.reduce((total, transaction) => total + (transaction.transaction_type == 'SPEND' ? Number(transaction.transaction_amount) : 0),0),

        getOrderedTransactions: state => state.transactions.sort((a,b) => (new Date(b.transaction_added) - new Date(a.transaction_added) ))


    },

    actions: {
        addTransaction({commit}, payload) {
            if(payload.UUID) {
                commit('ADD_TRANSACTION',payload);
            }
        },

        setTransactions({commit}, payload) {
            if(payload.length > 0 && payload[0].UUID) {
                commit('SET_TRANSACTIONS', payload);
                commit('SET_TRANSACTIONS_UPDATED',new Date() | moment( "now"));
            }
        }
    },

    mutations: {

        ADD_TRANSACTION(state, payload){
            state.transactions.push(payload);
        },

        SET_TRANSACTIONS(state, payload) {
            state.transactions = payload;
        },

        SET_TRANSACTIONS_UPDATED(state,payload) {
            state.lastUpdate = payload;
        }
    }
}