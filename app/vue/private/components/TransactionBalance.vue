<template>

    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">

        <h5 class="pull-right remaining-balance-container"  :class="getBalanceClass">How much I have left: £<span class="remaining-balance">{{ getBalanceDisplay }}</span></h5>

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
                return balance < 0 ? 'spend' : (balance == 0 ? '' : 'credit')
            },

            getBalanceDisplay() {
                return this.getBalance.toFixed(2);
            }
        }
    }

</script>