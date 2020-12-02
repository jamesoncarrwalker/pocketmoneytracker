<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table class="table table-bordered transaction-table">
            <tbody>
                <tr>
                    <td>Date</td>
                    <td>Type</td>
                    <td>Description</td>
                    <td>Amount</td>
                </tr>
                <transaction-row v-for="transaction in getOrderedTransactions"
                                 :transaction="transaction"
                                 :key="transaction.UUID"

                ></transaction-row>
            </tbody>


        </table>
    </div>

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
                getOrderedTransactions: 'transactions/getOrderedTransactions',

            })
        }

    };
</script>
