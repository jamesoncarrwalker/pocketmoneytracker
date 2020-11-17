<template>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        <h5 class="pull-right">Current balance: <span :class="getBalanceClass">{{ getBalanceDisplay }}</span></h5>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {

        props: {

        },

        components: {

        },

        methods: {

        },

        computed: {

            ...mapGetters({
                totalCredit: 'transactions/getCreditTotal',
                totalDebit: 'transactions/getDebitTotal'
            }),

            getBalance() {
                return this.totalCredit - this.totalDebit;
            },

            getBalanceClass() {
                const balance = this.getBalance;
                return balance < 0 ? 'debt' : (balance == 0 ? '' : 'credit')
            },

            getBalanceDisplay() {
                return this.getBalance.toFixed(2);
            }
        }
    }

</script>