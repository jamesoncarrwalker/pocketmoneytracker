<template>
    <div class="container-fluid tracker-page">

        <div  class="row">
            <div class="container">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    {{ getNameToDisplay }}
                </div>

                <transaction-balance></transaction-balance>

            </div>


        </div>

        <div  class="row">

            <div class="container">

                <transaction-table></transaction-table>

            </div>

            <div class="container">

                <transaction-creator></transaction-creator>

            </div>


        </div>

    </div>

</template>

<script>
    import TransactionTable from '../../private/components/TransactionTable.vue';
    import TransactionBalance from '../../private/components/TransactionBalance.vue';
    import TransactionCreator from '../../private/components/TransactionCreator.vue';
    import { mapGetters } from 'vuex';
    export default {

        components: {
            TransactionTable,
            TransactionBalance,
            TransactionCreator
        },

        props: {

        },

        methods: {

        },
        computed: {
            ...mapGetters({
                currentChild: 'user/getCurrentChild'
            }),

            getNameToDisplay() {
                if(!this.currentChild.id) return;
                const lastChar = this.currentChild.name.slice(-1) == 's' ? '\'' : '\'s'
                return this.currentChild.name + lastChar + 'Tracker'
            }
        }

    };
</script>