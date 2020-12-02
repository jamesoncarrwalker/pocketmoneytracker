<template>

    <tr
        :class="isCreditTransaction ? 'credit' : 'spend'"
    >
        <td>{{ getFriendlyDate }}</td>
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

            getFriendlyDate() {
                return moment(String(this.transaction.transaction_added)).format('dddd Do MMMM');
            },

            getFriendlyTransactionType() {
                return this.isCreditTransaction ? 'Earned' : 'Spent';
            },

            isCreditTransaction() {
                return this.transaction.transaction_type == 'CREDIT'
            },

            getTransactionDisplay() {
                return (this.transaction.transaction_type == 'CREDIT' ? "" : "-") +  Number(this.transaction.transaction_amount).toFixed(2);

            }
        }

    }
</script>