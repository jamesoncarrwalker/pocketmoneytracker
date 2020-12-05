<template>
    <div class="container-fluid tracker-page">

        <div  class="row">

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                {{ getNameToDisplay }}
            </div>

            <transaction-balance></transaction-balance>

        </div>

        <div  class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul  class="nav nav-tabs list-inline">

                    <navigation-tab
                            title="Tracker"
                            emit-value="tracker"
                            emit-listener="setTrackerTab"
                            :setTrackerTab.sync="activeTab"
                            :active="(activeTab == 'tracker')"
                    ></navigation-tab>

                    <navigation-tab
                            title="Add transaction"
                            emit-value="form"
                            emit-listener="setTrackerTab"
                            :setTrackerTab.sync="activeTab"
                            :active="(activeTab != 'tracker')"
                    ></navigation-tab>

                </ul>
            </div>

        </div>




        <div class="row">

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tracker-tab-container" v-if=" (activeTab == 'tracker') ">

                <transaction-table ></transaction-table>

            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tracker-tab-container" v-else>

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

        data() {
            return {
                activeTab: 'tracker'
            }
        },

        components: {
            TransactionTable,
            TransactionBalance,
            TransactionCreator
        },

        props: {

        },

        methods: {
            setActiveTab(newTab) {
                this.activeTab = newTab;
            }
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