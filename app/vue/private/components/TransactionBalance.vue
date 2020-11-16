<template>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        <h5 class="pull-right">Current balance: <span :class="getBalanceClass">{{ getBalance }}</span></h5>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {

        props: {
            debitTotal: {
                type: Number,
                required: true
            },
            creditTotal: {
                type: Number,
                required: true
            }
        },

        components: {

        },

        methods: {

        },

        computed: {
            getBalance() {
                return this.creditTotal - this.debitTotal;
            },
            getBalanceClass() {
                const balance = this.getBalance;
                return balance < 0 ? 'debt' : (balance == 0 ? '' : 'credit')
            }
        }
    }

</script>