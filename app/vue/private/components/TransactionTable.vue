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
                             :key="transaction.id"

            ></transaction-row>

        </table>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TransactionRow from './TransactionRow.vue';

    export default {

        components: {
            TransactionRow
        },

        props: {

        },

        methods: {

        },
        computed: {
            ...mapGetters({
                allTransactions: 'transactions/allTransactions'
            })
        }

    };
</script>