<template>
    <div class="container-fluid">

        <div v-if="currentChild.id" class="row">

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                {{ getNameToDisplay }} Tracker
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <transaction-balance></transaction-balance>
            </div>
        </div>

        <div v-if="currentChild.id" class="row">

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <transaction-table></transaction-table>

            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <transaction-creator></transaction-creator>

            </div>


        </div>

        <div v-if="!currentChild.id">

            <feedback-placeholder message="Couldn't find any children"></feedback-placeholder>

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
                return this.currentChild.name + lastChar;
            }
        }

    };
</script>