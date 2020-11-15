<template>
    <div class="container">

        <table class="table table-striped">
            <tr>
                <td>Date</td>
                <td>Type</td>
                <td>Description</td>
                <td>Amount</td>
            </tr>

            <transaction-row v-for="transaction in transactions"
                             :transaction="transaction"
                             :key="transaction.id"

            ></transaction-row>

        </table>

    </div>




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
                // map `this.doneCount` to `this.$store.getters.doneTodosCount`
                transactions: 'transactions/allTransactions'
            })
        }

    };
</script>