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

        getCreditTransactions: state => state.transactions.filter(transaction => transaction.transaction_type == 'credit'),

        getDebitTransactions: state => state.transactions.filter(transaction => transaction.transaction_type == 'debit'),

        getCreditTotal: state => state.transactions.reduce((total, transaction) => total + (transaction.transaction_type == 'credit' ? Number(transaction.transaction_amount) : 0),0),

        getDebitTotal: state => state.transactions.reduce((total, transaction) => total + (transaction.transaction_type == 'debit' ? Number(transaction.transaction_amount) : 0),0)

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