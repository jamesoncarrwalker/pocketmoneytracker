<template>
    <div>

        <form-input :inputValue="transactionAmount"
                    placeHolder="e.g 1.50"
                    :transactionAmount.sync="transactionAmount"
                    input-name="transactionAmount"
                    input-type="number"
                    id="transactionAmount"
                    emit-listener="transactionAmount"
                    inputLabel="Amount"
        ></form-input>

        <form-input :inputValue="getTransactionDescription"
                    placeHolder="e.g did all your chores..."
                    :transactionDescription.sync="transactionDescription"
                    input-name="transactionDescription"
                    input-type="text"
                    emit-listener="transactionDescription"
                    id="transactionDescription"
                    inputLabel="Description"
        ></form-input>

        <action-button
                      button-value="Credit"
                      input-classes="button btn btn-sm "
                      :button-is-active="getTransactionType == 'CREDIT'"
                      :transactionType.sync="transactionType"
                      emit-value="CREDIT"
                      emit-listener="transactionType"
        ></action-button>

        <action-button
                       input-classes="button btn btn-sm "
                       :button-is-active="getTransactionType == 'SPEND'"
                       button-value="Spend"
                       emit-value="SPEND"
                       emit-listener="transactionType"
                       :transactionType.sync="transactionType"
        ></action-button>

        <action-button
                       input-classes="button btn btn-sm pull-right submit"
                       button-value="Save"
                       emit-value="submitting"
                       emit-listener="saveTransaction"
                       :saveTransaction.sync="submitTransaction"
        ></action-button>

    </div>

</template>

<script>

    import FormInput from '../../shared/components/form-components/FormInput.vue';
    import ActionButton from '../../shared/components/form-components/ActionButton.vue';
    import { mapActions } from 'vuex';

    export default {

        components: {
            FormInput,
            ActionButton
        },

        props: {

        },

        computed: {
            getTransactionType() {
                return this.transactionType;
            },

            getTransactionAmount() {
                return this.transactionAmount > 0 ? this.transactionAmount : "";
            },

            getTransactionDescription() {
                return this.transactionDescription;
            },

            getTransactionPayload() {
                if(this.transactionType == '' || this.transactionDescription == '' || this.transactionAmount == 0) {
                    return {
                        error: 'Please complete all fields.'
                    }
                }

                if(this.transactionAmount < 1) {
                    return {
                        error: 'Please don\'t use negative amounts.'
                    }
                }

                const payload = new FormData();
                payload.append('transaction_type', this.transactionType);
                payload.append('transaction_amount', this.transactionAmount);
                payload.append('transaction_description', this.transactionDescription);
                return payload;
            }
        },

        methods: {
            ...mapActions({

                addTransaction: 'transactions/addTransaction'

            }),
            resetData() {
                this.transactionAmount = 0,
                this.transactionDescription = '',
                this.transactionType = 'CREDIT',
                this.submitTransaction = ''
            }
        },

        data() {
            return {
                transactionAmount:0,
                transactionDescription: '',
                transactionType: 'CREDIT',
                submitTransaction: '',
                errorMessage: ''

            };
        },

        watch: {

            submitTransaction: function(newVal, oldVal) {

                if(this.submitTransaction != 'submitting') {
                    return;
                }
                if(this.submitTransaction == 'submitting') {
                    //create payload
                    this.errorMessage = '';
                    const payload = this.getTransactionPayload;
                    if(payload.hasOwnProperty('error')) {
                        this.errorMessage = payload.error;
                        this.submitTransaction = '';
                        return;
                    }
                    this.$axios
                        .post(env.API_URL + '/transactions',payload,{'Content-Type': 'multipart/form-data' })
                        .then(
                            response => (
                                this.addTransaction(response.data.transaction),
                                this.resetData()
                            )
                        )
                }
                this.submitTransaction = ''
            }
        }

    }

</script>