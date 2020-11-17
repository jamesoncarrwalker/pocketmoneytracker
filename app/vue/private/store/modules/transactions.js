export default {
    namespaced:true,

    state: {
        transactions: [
            {
                id: 1,
                type: 'credit',
                date: '15/11/2015',
                amount: '2.50',
                description: 'Did all your chores'
            }, {
                id: 2,
                type: 'credit',
                date: '8/11/2015',
                amount: '2.50',
                description: 'Did all your chores'
            }, {
                id:3,
                type: 'debit',
                date: '15/11/2015',
                amount: '3.50',
                description: 'Sparkle world magazine'
            }
        ],
        lastUpdate:null
    },

    getters: {

        allTransactions: state => state.transactions,

        getCreditTransactions: state => state.transactions.filter(transaction => transaction.type == 'credit'),

        getDebitTransactions: state => state.transactions.filter(transaction => transaction.type == 'debit'),

        getCreditTotal: state => state.transactions.reduce((total, transaction) => total + (transaction.type == 'credit' ? Number(transaction.amount) : 0),0),

        getDebitTotal: state => state.transactions.reduce((total, transaction) => total + (transaction.type == 'debit' ? Number(transaction.amount) : 0),0)

        //result = words.filter(word => word.length > 6)
    },

    actions: {

    },

    mutations: {

    }
}