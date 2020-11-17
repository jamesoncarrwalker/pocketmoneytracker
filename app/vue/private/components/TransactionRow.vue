<template>
    <tr :class="isCreditTransaction ? 'success' : 'danger'">
        <td>{{ transaction.date }}</td>
        <td>{{ getFriendlyTransactionType }}</td>
        <td>{{ transaction.description }}</td>
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
                return this.transaction.type == 'credit'
            },

            getTransactionDisplay() {
                return (this.transaction.type == 'credit' ? "" : "-") +  Number(this.transaction.amount).toFixed(2);

            }
        }

    }
</script>