<template>

    <tr
        :class="isCreditTransaction ? 'credit' : 'spend'"
    >
        <td>{{ transaction.transaction_added }}</td>
        <td>{{ getFriendlyTransactionType }}</td>
        <td>{{ transaction.transaction_description }}</td>
        <td>{{ getTransactionDisplay }}</td>
    </tr>


</template>

<script>

    export default {

        components: {

        },

        props: {
            transaction:{
                type: Object,
                required: true
            }
        },

        methods: {

        },

        computed: {
            getFriendlyTransactionType() {
                return this.isCreditTransaction ? 'Earned' : 'Spent';
            },

            isCreditTransaction() {
                return this.transaction.transaction_type == 'credit'
            },

            getTransactionDisplay() {
                return (this.transaction.transaction_type == 'credit' ? "" : "-") +  Number(this.transaction.transaction_amount).toFixed(2);

            }
        }

    }
</script>