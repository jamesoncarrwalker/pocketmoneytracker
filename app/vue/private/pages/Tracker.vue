<template>
    <div class="container-fluid">

        <h1>THIS IS THE TRACKER</h1>
        <transaction-table></transaction-table>

    </div>

</template>

<script>
    import TransactionTable from '../../private/components/TransactionTable.vue';

    export default {

        components: {
            TransactionTable
        },

        props: {

        },

        methods: {

        },
        computed: {

        }

    };
</script>