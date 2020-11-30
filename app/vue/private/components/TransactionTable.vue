<template>
     <table class="table table-striped">
            <tr>
                <td>Date</td>
                <td>Type</td>
                <td>Description</td>
                <td>Amount</td>
            </tr>

            <transaction-row v-for="transaction in allTransactions"
                             :transaction="transaction"
                             :key="transaction.UUID"

            ></transaction-row>

        </table>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import TransactionRow from './TransactionRow.vue';

    export default {

        components: {
            TransactionRow
        },

        props: {

        },

        methods: {
            ...mapActions({
                setTransactions: 'transactions/setTransactions'
            }),

            getTransactions() {
                this.$axios
                .get(env.API_URL + '/transactions')
                .then(
                    response => (
                        this.setTransactions(response.data.transactions)
                    )
                ).catch(console.log('that went belly up buddy'))
            }
        },

        mounted(){
            this.getTransactions();
        },

        computed: {
            ...mapGetters({
                allTransactions: 'transactions/allTransactions'
            })
        }

    };
</script>
